// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import { formFields } from 'src/app/config/form-config';
// import { getAllBoards } from 'src/app/ngrx/boards/boards.selector';
// import { getAllReleases } from 'src/app/ngrx/releases/releases.selectors';
// import { getAllEpics } from 'src/app/ngrx/epics/epics.selectors';
// import { getAllSprints } from 'src/app/ngrx/sprints/sprints.selectors';
// import { getAllStories } from 'src/app/ngrx/stories/stories.selector';

// import * as boardActions from 'src/app/ngrx/boards/boards.actions';
// import * as releaseAction from 'src/app/ngrx/releases/releases.action';
// import * as epicAction from 'src/app/ngrx/epics/epics.actions';
// import * as sprintsAction from 'src/app/ngrx/sprints/sprints.actions';
// import * as storyActions from 'src/app/ngrx/stories/stories.actions';
// // import * as epicAction from 'src/app/ngrx/epics/epics.actions'

// @Component({
//   selector: 'app-form-view',
//   templateUrl: './form-view.component.html',
//   styleUrls: ['./form-view.component.scss'],
// })
// export class FormViewComponent {
//   formValue: String = '';
//   entityOptions = Object.keys(formFields);
//   currentFields: {
//     name: string;
//     type: string;
//     optionsKey?: string;
//     label: string;
//   }[] = [];
//   entityForm: FormGroup = this.fb.group({});

//   entityForm: FormGroup;

//   fieldSteps: {
//     name: string;
//     type: string;
//     optionsKey?: string;
//     label: string;
//   }[][] = [];

//   boardsLength: number = 0;
//   releaseLength: number = 0;
//   epicsLength: number = 0;
//   storiesLength: number = 0;
//   sprintsLength: number = 0;
//   // Length: number = 0

//   dropdownOptions: { [key: string]: { id: number; name: string }[] } = {
//     boards: [
//       { id: 1, name: 'Board Alpha' },
//       { id: 2, name: 'Board Beta' },
//     ],
//     users: [
//       { id: 101, name: 'Alice' },
//       { id: 102, name: 'Bob' },
//     ],
//     sprints: [
//       { id: 201, name: 'Sprint 1' },
//       { id: 202, name: 'Sprint 2' },
//     ],
//     epics: [
//       { id: 301, name: 'Epic A' },
//       { id: 302, name: 'Epic B' },
//     ],
//   };

//   constructor(private fb: FormBuilder, private store: Store) {
//     this.entityForm = this.fb.group({
//       entity: [''], // just one control: the selected entity type
//     });

//     this.entityForm = this.fb.group({});

//     this.store.select(getAllBoards).subscribe((data) => {
//       console.log('boards', data);
//       this.boardsLength = data.boards.length;
//     });
//     this.store.select(getAllReleases).subscribe((data) => {
//       console.log('releases', data);
//       this.releaseLength = data.releases.length;
//     });
//     this.store.select(getAllEpics).subscribe((data) => {
//       console.log('epics', data);
//       this.epicsLength = data.epics.length;
//     });
//     this.store.select(getAllSprints).subscribe((data) => {
//       console.log('sprints', data);
//       this.sprintsLength = data.sprints.length;
//     });
//     this.store.select(getAllStories).subscribe((data) => {
//       console.log('stories', data);
//       this.storiesLength = data.stories.length;
//     });
//   }

//   onEntityChange(event: Event | any) {
//     // console.log("entity");

//     const selectedValue = (event.target as HTMLSelectElement).value;
//     this.formValue = selectedValue;

//     console.log("entity",this.formValue);

//     this.currentFields = formFields[selectedValue];
//     const group: any = {};
//     this.currentFields.forEach((field) => {
//       group[field.name] = [''];
//     });
//     this.entityForm = this.fb.group(group);
//   }
//   //   [
//   //     "Board",
//   //     "Sprint",
//   //     "Story",
//   //     "Epic",
//   //     "Release",
//   //     "User"
//   // ]

//   splitFieldsIntoSteps(fields: any[], chunkSize: number): any[][] {
//     const steps: any[][] = [];
//     for (let i = 0; i < fields.length; i += chunkSize) {
//       steps.push(fields.slice(i, i + chunkSize));
//     }
//     return steps;
//   }

//   // onEntityChange(event: any) {
//   //   const selectedValue = event.value;
//   //   this.formValue = selectedValue;
//   //   this.currentFields = formFields[selectedValue];

//   //   // split into steps
//   //   this.fieldSteps = this.splitFieldsIntoSteps(this.currentFields, 2); // 2 fields per step

//   //   const group: any = {};
//   //   this.currentFields.forEach(field => {
//   //     group[field.name] = [''];
//   //   });
//   //   this.entityForm = this.fb.group(group);
//   // }

//   onSubmit() {
//     // this.entityForm.controls['BoardId'].setValue(this.boardsLength + 1)

//     // console.log(this.entityForm.value, data);
//     switch (this.formValue) {
//       case 'Board': {
//         let data = {
//           ...this.entityForm.value,
//           BoardId: this.boardsLength + 1,
//         };
//         this.store.dispatch(boardActions.addBoardSuccess({ board: data }));
//         break;
//       }
//       case 'Release': {
//         let data = {
//           ...this.entityForm.value,
//           ReleaseId: this.releaseLength + 1,
//         };
//         this.store.dispatch(releaseAction.addReleaseSuccess({ release: data }));
//         break;
//       }
//       case 'Epic': {
//         let data = {
//           ...this.entityForm.value,
//           EpicId: this.epicsLength + 1,
//         };
//         this.store.dispatch(epicAction.addEpicSuccess({ epic: data }));
//         break;
//       }
//       case 'Sprint': {
//         let data = {
//           ...this.entityForm.value,
//           SprintId: this.sprintsLength + 1,
//         };
//         this.store.dispatch(sprintsAction.addSprintSuccess({ sprint: data }));
//         break;
//       }
//       case 'Story': {
//         let data = {
//           ...this.entityForm.value,
//           StoryId: this.storiesLength + 1,
//         };
//         this.store.dispatch(storyActions.addStorySuccess({ story: data }));
//         break;
//       }
//     }
//   }

//   boardForm!: FormGroup;

//   ngOnInit(): void {
//     this.boardForm = this.fb.group({
//       boardName: ['', [Validators.required, Validators.maxLength(100)]]
//     });
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as boardActions from 'src/app/ngrx/boards/boards.actions';
import * as releaseAction from 'src/app/ngrx/releases/releases.action';
import * as epicAction from 'src/app/ngrx/epics/epics.actions';
import * as sprintsAction from 'src/app/ngrx/sprints/sprints.actions';
import * as storyActions from 'src/app/ngrx/stories/stories.actions';
import * as usersActions from 'src/app/ngrx/user/users.actions';

import { getAllBoards } from 'src/app/ngrx/boards/boards.selector';
import { getAllReleases } from 'src/app/ngrx/releases/releases.selectors';
import { getAllEpics } from 'src/app/ngrx/epics/epics.selectors';
import { getAllSprints } from 'src/app/ngrx/sprints/sprints.selectors';
import { getAllStories } from 'src/app/ngrx/stories/stories.selector';
import {
  BoardsInterface,
  EpicsInterface,
  ReleaseInterface,
  RoleInterface,
  SprintsInterface,
  StoriesInterface,
  UserInterface,
} from 'src/app/utils/types';
import { getAllUsers } from 'src/app/ngrx/user/users.selectors';
import { getAllRoles } from 'src/app/ngrx/roles/role.selectors';
import { MatDialog } from '@angular/material/dialog';
import { RoleDialogComponent } from 'src/app/components/role-dialog/role-dialog.component';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
})
export class FormViewComponent {
  entityTypes = ['Board', 'Sprint', 'Story', 'Epic', 'User', 'Release'];
  selectedEntity = '';
  typeForm: FormGroup;
  entityForm: FormGroup;

  statusData = [
    { id: 1, value: 'To-do' },
    { id: 2, value: 'In-process' },
    { id: 3, value: 'Completed' },
  ];

  // boardsLength: number = 0;
  // releaseLength: number = 0;
  // epicsLength: number = 0;
  // storiesLength: number = 0;
  // sprintsLength: number = 0;
  // usersLength: number = 0;

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
    private dialog: MatDialog
  ) {
    this.typeForm = this.fb.group({
      entityType: ['', Validators.required],
    });

    this.entityForm = this.fb.group({});

    this.store.select(getAllBoards).subscribe((data) => {
      console.log('boards', data);
      this.boards = data.boards;
    });

    this.store.select(getAllReleases).subscribe((data) => {
      console.log('releases', data);
      this.release = data.releases;
    });

    this.store.select(getAllEpics).subscribe((data) => {
      console.log('epics', data);
      this.epics = data.epics;
    });

    this.store.select(getAllSprints).subscribe((data) => {
      console.log('sprints', data);
      // this.sprintsLength = data.sprints.length;
      this.sprints = data.sprints;
    });

    this.store.select(getAllStories).subscribe((data) => {
      console.log('stories', data);
      this.stories = data.stories;
    });

    this.store.select(getAllUsers).subscribe((data) => {
      console.log('users', data);
      // this.storiesLength = data.users.length;
      this.users = data.users;
    });

    this.store.select(getAllRoles).subscribe((data) => {
      console.log('users', data);
      // this.storiesLength = data.users.length;
      this.roles = data.roles;
    });
  }

  onEntityTypeChange() {
    this.selectedEntity = this.typeForm.value.entityType;
    this.buildEntityForm();
  }

  buildEntityForm() {
    const controls: any = {};

    switch (this.selectedEntity) {
      case 'Board':
        controls['BoardName'] = ['', Validators.required];
        break;

      case 'Sprint':
        controls['SprintName'] = ['', Validators.required];
        controls['SprintNo'] = ['', Validators.required];
        controls['SprintPoint'] = [''];
        controls['StartDate'] = [''];
        controls['EndDate'] = [''];
        // controls['BoardId'] = [''];
        // controls['ReleaseId'] = [''];
        break;

      case 'Story':
        controls['StoryName'] = ['', Validators.required];
        controls['Description'] = [''];
        controls['Flag'] = [false];
        controls['StatusId'] = [''];
        controls['BoardId'] = [''];
        controls['UserId'] = [''];
        controls['SprintId'] = [''];
        controls['EpicId'] = [''];
        break;

      case 'Epic':
        controls['EpicName'] = ['', Validators.required];
        controls['Description'] = [''];
        break;

      case 'User':
        controls['UserName'] = ['', Validators.required];
        controls['Email'] = ['', [Validators.required, Validators.email]];
        controls['Password'] = ['', Validators.required];
        controls['RoleId'] = [''];
        break;

      case 'Release':
        controls['ReleaseName'] = ['', Validators.required];
        controls['SprintId'] = ['', Validators.required];
        break;

      default:
        // Optionally handle default case
        break;
    }

    this.entityForm = this.fb.group(controls);
  }

  submitForm() {
    console.log('Submitted:', {
      type: this.selectedEntity,
      data: this.entityForm.value,
    });
  }

  onSubmit() {
    // this.entityForm.controls['BoardId'].setValue(this.boardsLength + 1)

    console.log(this.entityForm.value);
    switch (this.selectedEntity) {
      case 'Board': {
        let data = {
          ...this.entityForm.value,
          BoardId: this.boards.length + 1,
        };
        this.store.dispatch(boardActions.addBoardSuccess({ board: data }));
        break;
      }
      case 'Release': {
        let data = {
          ...this.entityForm.value,
          ReleaseId: this.release.length + 1,
        };
        this.store.dispatch(releaseAction.addReleaseSuccess({ release: data }));
        break;
      }
      case 'Epic': {
        let data = {
          ...this.entityForm.value,
          EpicId: this.epics.length + 1,
        };
        this.store.dispatch(epicAction.addEpicSuccess({ epic: data }));
        break;
      }
      case 'Sprint': {
        let data = {
          ...this.entityForm.value,
          SprintId: this.sprints.length + 1,
        };
        this.store.dispatch(sprintsAction.addSprintSuccess({ sprint: data }));
        break;
      }
      case 'Story': {
        let data = {
          ...this.entityForm.value,
          StoryId: this.stories.length + 1,
        };
        this.store.dispatch(storyActions.addStorySuccess({ story: data }));
        break;
      }
      case 'User': {
        let data = {
          ...this.entityForm.value,
          UserId: this.users.length + 1,
        };
        this.store.dispatch(usersActions.addUserSuccess({ user: data }));
        break;
      }
    }
  }

  onCreateNewRoleClick() {
    this.dialog.open(RoleDialogComponent, {
      width: '500px',
    });
  }
}
