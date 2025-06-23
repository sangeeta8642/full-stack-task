
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { getAllEpics } from 'src/app/dashboards/epics/store/epics.selectors';
import { getAllSprints } from 'src/app/dashboards/sprints/store/sprints.selectors';
import { getAllStories } from 'src/app/dashboards/stories/store/stories.selector';

import {
  BoardsInterface,
  EpicsInterface,
  ReleaseInterface,
  RoleInterface,
  SprintsInterface,
  StoriesInterface,
  UserInterface,
} from 'src/app/utils/types';

import { getAllUsers } from 'src/app/dashboards/users/store/users.selectors';
import { getAllRoles } from 'src/app/ngrx/roles/role.selectors';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RoleDialogComponent } from 'src/app/components/role-dialog/role-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Context, entityDispatchers, entityDispatchersForUpdate, entityFormControls } from 'src/app/utils/helper';
import { getAllBoards } from 'src/app/dashboards/boards/store/boards.selector';
import { getAllReleases } from 'src/app/dashboards/releases/store/releases.selectors';
import { forkJoin, Observable, firstValueFrom, combineLatest, filter } from 'rxjs';
import { BoardState } from 'src/app/dashboards/boards/store/boards.state';
import { boardActions, epicActions, releaseActions, sprintActions, storyActions, userActions } from 'src/app';
import { loadRoles } from 'src/app/ngrx/roles/role.actions';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
})
export class FormViewComponent implements OnInit {
  entityTypes: Context[] = ['Board', 'Sprint', 'Story', 'Epic', 'User', 'Release']
  selectedEntity = '';
  typeForm: FormGroup;
  entityForm: FormGroup;

  pageType: string = 'update'


  statusData = [
    { id: 1, value: 'TODO' },
    { id: 2, value: 'IN_PROCESS' },
    { id: 3, value: 'COMPLETED' },
  ];

  boards: BoardsInterface[] = [];
  release: ReleaseInterface[] = [];
  epics: EpicsInterface[] = [];
  stories: StoriesInterface[] = [];
  sprints: SprintsInterface[] = [];
  users: UserInterface[] = [];
  roles: RoleInterface[] = [];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<FormViewComponent>,
    private activeRoute: ActivatedRoute,
    private userServices: AuthService,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log("Data", this.data);
    this.callAllDispatchs()
    // this.getDataFromApis()
    this.typeForm = this.fb.group({
      entityType: ['', Validators.required],
    });

    this.entityForm = this.fb.group({});

    this.subscribeToEntity(getAllBoards, 'boards');
    console.log("this.boards", this.boards);

    this.subscribeToEntity(getAllReleases, 'release');
    this.subscribeToEntity(getAllEpics, 'epics');
    this.subscribeToEntity(getAllSprints, 'sprints');
    this.subscribeToEntity(getAllStories, 'stories');
    this.subscribeToEntity(getAllUsers, 'users');
    this.subscribeToEntity(getAllRoles, 'roles');

    this.userServices.getAllUsers().subscribe(res => {
      console.log("User Data", res);
      this.users = res as UserInterface[]
    })
  }

  ngOnInit() {

    if (this.data) {
      this.pageType = 'update'
      this.selectedEntity = this.data.tableType
      this.buildEntityForm()
      setTimeout(() => {
        this.entityForm.patchValue(this.data.element);
      });
    } else {
      this.pageType = 'create'
    }
  }

  onEntityTypeChange() {
    this.selectedEntity = this.typeForm.value.entityType;
    this.buildEntityForm();
  }

  buildEntityForm() {
    const controls = entityFormControls[this.selectedEntity]?.();
    this.entityForm = this.fb.group(controls || {});
  }

  onSubmit() {
    const formData = this.entityForm.value;
    const entityType = this.selectedEntity;
    const idField = `${entityType}Id`;
    // const newId = this.entityIdGenerators[entityType]?.();

    if (entityDispatchers[entityType]) {

      // const entityData = { ...formData;
      console.log("payload", formData);

      if (this.pageType === 'create') {
        if (entityType === "User") {
          const payload = {
            email: formData.Email,
            roleId: formData.RoleId,
            userName: formData.UserName,
            password: formData.Password
          }
          const action = entityDispatchers[entityType](payload);
          this.store.dispatch(action);
        }
        else if (entityType === 'Board') {
          // const payload = {
          //   boardName: formData.BoardName
          // }
          const action = entityDispatchers[entityType](formData);
          this.store.dispatch(action);
        }
        else if (entityType === 'Sprint') {
          // const payload = {
          //   boardName: formData.BoardName
          // }
          const action = entityDispatchers[entityType](formData);
          this.store.dispatch(action);
        }
        else if (entityType === 'Epic') {
          // const payload = {
          //   boardName: formData.BoardName
          // }
          const action = entityDispatchers[entityType](formData);
          this.store.dispatch(action);
        }
        else if (entityType === 'Story') {
          // const payload = {
          //   boardName: formData.BoardName
          // }
          const action = entityDispatchers[entityType](formData);
          this.store.dispatch(action);
        }
        else {
          const action = entityDispatchers[entityType](formData);
          this.store.dispatch(action);
        }
      } else if (this.pageType === 'update') {
        const action = entityDispatchersForUpdate[entityType](this.data?.id, formData);
        this.store.dispatch(action);
      } else {
        null
      }
    }

    this.dialogRef.close();
  }
  onCreateNewRoleClick() {
    this.dialog.open(RoleDialogComponent, {
      width: '500px',
    });
  }

  subscribeToEntity<T>(selector: any, assignTo: keyof FormViewComponent) {
    this.store.select(selector).subscribe((data: any) => {
      console.log("Result :", data, Object.keys(data)[0]);

      const key = Object.keys(data)[0];
      console.log("data[key]", data[key]);

      this[assignTo] = data[key];
    });
  }

  close() {
    this.dialogRef.close();
  }

  callAllDispatchs() {
    this.store.dispatch(boardActions.loadBoards())
    this.store.dispatch(sprintActions.loadSprints())
    this.store.dispatch(epicActions.loadEpics())
    this.store.dispatch(releaseActions.loadReleases())
    this.store.dispatch(storyActions.loadStories())
    this.store.dispatch(loadRoles())
    this.store.dispatch(userActions.loadUsers())
  }
}
