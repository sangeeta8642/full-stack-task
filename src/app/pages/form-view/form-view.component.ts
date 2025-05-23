import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { formFields } from 'src/app/config/form-config';
import { getAllBoards } from 'src/app/ngrx/boards/boards.selector';
import { getAllReleases } from 'src/app/ngrx/releases/releases.selectors';
import { getAllEpics } from 'src/app/ngrx/epics/epics.selectors';
import { getAllSprints } from 'src/app/ngrx/sprints/sprints.selectors';
import { getAllStories } from 'src/app/ngrx/stories/stories.selector';

import * as boardActions from 'src/app/ngrx/boards/boards.actions'
import * as releaseAction from 'src/app/ngrx/releases/releases.action'
import * as epicAction from 'src/app/ngrx/epics/epics.actions'
import * as sprintsAction from 'src/app/ngrx/sprints/sprints.actions'
import * as storyActions from 'src/app/ngrx/stories/stories.actions'
// import * as epicAction from 'src/app/ngrx/epics/epics.actions'

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent {
  formValue: String = ''
  entityOptions = Object.keys(formFields);
  currentFields: { name: string; type: string; optionsKey?: string, label: string }[] = [];
  dynamicForm: FormGroup = this.fb.group({});

  entityForm: FormGroup;

  fieldSteps: { name: string; type: string; optionsKey?: string, label: string }[][] = [];

  boardsLength: number = 0
  releaseLength: number = 0
  epicsLength: number = 0
  storiesLength: number = 0
  sprintsLength: number = 0
  // Length: number = 0

  dropdownOptions: { [key: string]: { id: number; name: string }[] } = {
    boards: [
      { id: 1, name: 'Board Alpha' },
      { id: 2, name: 'Board Beta' }
    ],
    users: [
      { id: 101, name: 'Alice' },
      { id: 102, name: 'Bob' }
    ],
    sprints: [
      { id: 201, name: 'Sprint 1' },
      { id: 202, name: 'Sprint 2' }
    ],
    epics: [
      { id: 301, name: 'Epic A' },
      { id: 302, name: 'Epic B' }
    ]
  };

  constructor(private fb: FormBuilder, private store: Store) {
    this.entityForm = this.fb.group({
      entity: ['']  // just one control: the selected entity type
    });

    this.dynamicForm = this.fb.group({});

    this.store.select(getAllBoards).subscribe(data => {
      console.log("boards", data);
      this.boardsLength = data.boards.length
    })
    this.store.select(getAllReleases).subscribe(data => {
      console.log("releases", data);
      this.releaseLength = data.releases.length
    })
    this.store.select(getAllEpics).subscribe(data => {
      console.log("epics", data);
      this.epicsLength = data.epics.length
    })
    this.store.select(getAllSprints).subscribe(data => {
      console.log("sprints", data);
      this.sprintsLength = data.sprints.length
    })
    this.store.select(getAllStories).subscribe(data => {
      console.log("stories", data);
      this.storiesLength = data.stories.length
    })
  }

  onEntityChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.formValue = selectedValue
    this.currentFields = formFields[selectedValue];
    const group: any = {};
    this.currentFields.forEach(field => {
      group[field.name] = [''];
    });
    this.dynamicForm = this.fb.group(group);
  }
  //   [
  //     "Board",
  //     "Sprint",
  //     "Story",
  //     "Epic",
  //     "Release",
  //     "User"
  // ]

  splitFieldsIntoSteps(fields: any[], chunkSize: number): any[][] {
    const steps: any[][] = [];
    for (let i = 0; i < fields.length; i += chunkSize) {
      steps.push(fields.slice(i, i + chunkSize));
    }
    return steps;
  }

  // onEntityChange(event: any) {
  //   const selectedValue = event.value;
  //   this.formValue = selectedValue;
  //   this.currentFields = formFields[selectedValue];

  //   // split into steps
  //   this.fieldSteps = this.splitFieldsIntoSteps(this.currentFields, 2); // 2 fields per step

  //   const group: any = {};
  //   this.currentFields.forEach(field => {
  //     group[field.name] = [''];
  //   });
  //   this.dynamicForm = this.fb.group(group);
  // }

  onSubmit() {
    // this.dynamicForm.controls['BoardId'].setValue(this.boardsLength + 1)

    // console.log(this.dynamicForm.value, data);
    switch (this.formValue) {
      case 'Board': {
        let data = {
          ...this.dynamicForm.value,
          BoardId: (this.boardsLength + 1)
        }
        this.store.dispatch(boardActions.addBoardSuccess({ board: data }))
        break;
      }
      case "Release": {
        let data = {
          ...this.dynamicForm.value,
          ReleaseId: (this.releaseLength + 1)
        }
        this.store.dispatch(releaseAction.addReleaseSuccess({ release: data }))
        break;
      }
      case "Epic": {
        let data = {
          ...this.dynamicForm.value,
          EpicId: (this.epicsLength + 1)
        }
        this.store.dispatch(epicAction.addEpicSuccess({ epic: data }))
        break;
      }
      case "Sprint": {
        let data = {
          ...this.dynamicForm.value,
          SprintId: (this.sprintsLength + 1)
        }
        this.store.dispatch(sprintsAction.addSprintSuccess({ sprint: data }))
        break;
      }
      case "Story": {
        let data = {
          ...this.dynamicForm.value,
          StoryId: (this.storiesLength + 1)
        }
        this.store.dispatch(storyActions.addStorySuccess({ story: data }))
        break;
      }
    }
  }
}
