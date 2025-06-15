import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoriesService } from '../stories/stories.service';
import { SubtaskService } from './subtask.service';
import { SubtaskInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss'],
})
export class SubtaskComponent {
  // taskId!: number;
  // task!: SubtaskInterface;

  // constructor(
  //   private route: ActivatedRoute,
  //   private storyService: StoriesService,
  //   private store: Store,
  //   private subtaskService: SubtaskService,
  //   private dialog: MatDialog
  // ) {
  //   this.route.paramMap.subscribe((params) => {
  //     this.taskId = Number(params.get('id'));

  //     if (this.taskId) {
  //       this.subtaskService.getSubtask(this.taskId).subscribe((res) => {
  //         console.log('Get subtask', res);

  //         this.task = res.data;
  //       });
  //     }
  //   });
  // }
}
