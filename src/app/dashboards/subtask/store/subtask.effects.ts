import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { SubtaskActions } from 'src/app';
import { SubtaskService } from '../subtask.service';

@Injectable()
export class SubtaskEffects {
  constructor(
    private actions$: Actions,
    private subtaskService: SubtaskService
  ) {}

  loadSubtasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubtaskActions.loadSubtasks),
      mergeMap(() =>
        this.subtaskService.getSubtasks().pipe(
          map((subtasks) => SubtaskActions.loadSubtasksSuccess({subtasks:subtasks.data })),
          catchError((error) =>
            of(SubtaskActions.loadSubtasksFailed({ error }))
          )
        )
      )
    )
  );

  addSubtask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubtaskActions.addSubtask),
      mergeMap((action) =>
        this.subtaskService.createSubtask(action).pipe(
          map((subtask) => {
            alert(subtask.message);
            return SubtaskActions.addSubtaskSuccess({ subtask: subtask.data });
          }),
          catchError((error) => of(SubtaskActions.addSubtaskFailed({ error })))
        )
      )
    )
  );

  updateSubtask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubtaskActions.updateSubtask),
      mergeMap((action) =>
        this.subtaskService.updateSubtask(action.id, action.subtask).pipe(
          map(() =>
            SubtaskActions.updateSubtaskSuccess({
              id: action.id,
              subtask: action.subtask,
            })
          ),
          catchError((error) =>
            of(SubtaskActions.updateSubtaskFailed({ error }))
          )
        )
      )
    )
  );

  deleteSubtask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubtaskActions.deleteSubtask),
      mergeMap((action) =>
        this.subtaskService.deleteSubtask(action.id).pipe(
          map(() => SubtaskActions.deleteSubtaskSuccess({ id: action.id })),
          catchError((error) =>
            of(SubtaskActions.deleteSubtaskFailed({ error }))
          )
        )
      )
    )
  );
}
