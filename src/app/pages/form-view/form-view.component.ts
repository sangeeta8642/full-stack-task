
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

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
})
export class FormViewComponent implements OnInit {
  entityTypes: Context[] = ['Board', 'Sprint', 'Story', 'Epic', 'User', 'Release','Subtask']
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
  }

  // ngOnInit() {
  //   let id = Number(this.activeRoute.snapshot.paramMap.get('id'))
  //   let dashboard = this.activeRoute.snapshot.paramMap.get('dashboard')

  //   if (id && dashboard) {
  //     this.pageType = 'update'
  //     this.selectedEntity = dashboard.charAt(0).toUpperCase() + dashboard.slice(1).toLowerCase()
  //     // this.selectedEntity = 'Story'
  //     this.buildEntityForm()

  //     if (dashboard === "story") {
  //       let story = this.stories.find(s => s.StoryId === id)
  //       console.log("dashboard", dashboard, "id", id, "story", story, "stories", this.stories);

  //       if (story) {
  //         this.entityForm.patchValue(story)
  //       }
  //     }
  //     else if (dashboard === 'board') {
  //       let board = this.boards.find(s => s.BoardId === id)
  //       console.log("dashboard", dashboard, "id", id, "board", board, "boards", this.boards);

  //       if (board) {
  //         this.entityForm.patchValue(board)
  //       }
  //     }
  //     else if (dashboard === 'sprint') {
  //       let sprint = this.sprints.find(s => s.SprintId === id)
  //       console.log("dashboard", dashboard, "id", id, "sprint", sprint, "sprints", this.sprints);

  //       if (sprint) {
  //         this.entityForm.patchValue(sprint)
  //       }
  //     }
  //     else if (dashboard === 'user') {
  //       let user = this.users.find(s => s.UserId === id)
  //       console.log("dashboard", dashboard, "id", id, "user", user, "users", this.users);

  //       if (user) {
  //         this.entityForm.patchValue(user)
  //       }
  //     }
  //     else if (dashboard === 'release') {
  //       let release = this.release.find(s => s.ReleaseId === id)
  //       console.log("dashboard", dashboard, "id", id, "release", release, "releases", this.release);

  //       if (release) {
  //         this.entityForm.patchValue(release)
  //       }
  //     }
  //     else if (dashboard === 'epic') {
  //       let epic = this.epics.find(s => s.EpicId === id)
  //       console.log("dashboard", dashboard, "id", id, "epic", epic, "epics", this.epics);

  //       if (epic) {
  //         this.entityForm.patchValue(epic)
  //       }
  //     }
  //   } else {
  //     this.pageType = 'create'
  //   }
  // }

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


  // entityIdGenerators: Record<string, () => number> = {
  //   Board: () => this.boards.length + 1,
  //   Release: () => this.release.length + 1,
  //   Epic: () => this.epics.length + 1,
  //   Sprint: () => this.sprints.length + 1,
  //   Story: () => this.stories.length + 1,
  //   User: () => this.users.length + 1,
  // };


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

  // getDataFromApis(): void {

  //   // this.callAllDispatchs()
  //   const boards = firstValueFrom(this.store.select(getAllBoards));
  //   const sprints = firstValueFrom(this.store.select(getAllSprints));
  //   const epics = firstValueFrom(this.store.select(getAllEpics));
  //   const releases = firstValueFrom(this.store.select(getAllReleases));
  //   const stories = firstValueFrom(this.store.select(getAllStories));
  //   const roles = firstValueFrom(this.store.select(getAllRoles));
  //   const users = firstValueFrom(this.store.select(getAllUsers));

  //   forkJoin([boards, sprints, epics, releases, stories, roles, users]).subscribe(
  //     (res) => {

  //       console.log("ALL respinses", res);

  //     },
  //     error => {
  //       console.error('Error fetching data', error);
  //     }
  //   )
  // }


// getDataFromApis(): void {
//   console.log("getDataFromApis");
  
//   combineLatest([
//     this.store.select(getAllBoards).pipe(filter(data => data.boards.length > 0)),
//     this.store.select(getAllSprints).pipe(filter(data => data.sprints.length > 0)),
//     this.store.select(getAllEpics).pipe(filter(data => data.epics.length > 0)),
//     this.store.select(getAllReleases).pipe(filter(data => data.releases.length > 0)),
//     this.store.select(getAllStories).pipe(filter(data => data.stories.length > 0)),
//     this.store.select(getAllRoles).pipe(filter(data => data.roles.length > 0)),
//     this.store.select(getAllUsers).pipe(filter(data => data.users.length > 0)),
//   ]).subscribe(
//     ([boards, sprints, epics, releases, stories, roles, users]) => {
//       console.log('ALL responses', { boards, sprints, epics, releases, stories, roles, users });

//       // assign them here
//       this.boards = boards.boards;
//       this.sprints = sprints.sprints;
//       this.epics = epics.epics;
//       this.release = releases.releases;
//       this.stories = stories.stories;
//       this.roles = roles.roles;
//       this.users = users.users;
//     },
//     error => {
//       console.error('Error fetching data', error);
//     }
//   );
// }

// getDataFromApis(): void {
//   console.log("getDataFromApis");

//   const combined$ = combineLatest([
//     this.store.select(getAllBoards).pipe(filter(data => data.boards.length > 0)),
//     this.store.select(getAllSprints).pipe(filter(data => data.sprints.length > 0)),
//     this.store.select(getAllEpics).pipe(filter(data => data.epics.length > 0)),
//     this.store.select(getAllReleases).pipe(filter(data => data.releases.length > 0)),
//     this.store.select(getAllStories).pipe(filter(data => data.stories.length > 0)),
//     this.store.select(getAllRoles).pipe(filter(data => data.roles.length > 0)),
//     this.store.select(getAllUsers).pipe(filter(data => data.users.length > 0)),
//   ]);

//   firstValueFrom(combined$)
//     .then(([boards, sprints, epics, releases, stories, roles, users]) => {
//       console.log('ALL responses', { boards, sprints, epics, releases, stories, roles, users });

//       this.boards = boards.boards;
//       this.sprints = sprints.sprints;
//       this.epics = epics.epics;
//       this.release = releases.releases;
//       this.stories = stories.stories;
//       this.roles = roles.roles;
//       this.users = users.users;
//     })
//     .catch(error => {
//       console.error('Error fetching data', error);
//     });
// }



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
