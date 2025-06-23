import { Component } from '@angular/core';
import { card_colours } from '../../utils/constants';
import {
  BoardsInterface,
  countInterface,
  EpicsInterface,
  ReleaseInterface,
  RoleInterface,
  SprintsInterface,
  StoriesInterface,
  UserInterface,
} from '../../utils/types';
import { Store } from '@ngrx/store';
import { getAllBoards } from 'src/app/dashboards/boards/store/boards.selector';
import { getAllEpics } from 'src/app/dashboards/epics/store/epics.selectors';
import { getAllReleases } from 'src/app/dashboards/releases/store/releases.selectors';
import { getAllSprints } from 'src/app/dashboards/sprints/store/sprints.selectors';
import { getAllStories } from 'src/app/dashboards/stories/store/stories.selector';
import { getAllUsers } from 'src/app/dashboards/users/store/users.selectors';
import { getAllRoles } from 'src/app/ngrx/roles/role.selectors';
import { FormViewComponent } from '../form-view/form-view.component';
import { loadBoards } from 'src/app/dashboards/boards/store/boards.actions';
import { BoardService } from 'src/app/dashboards/boards/board.service';
import { forkJoin } from 'rxjs';
import { SprintsService } from 'src/app/dashboards/sprints/sprints.service';
import { StoriesService } from 'src/app/dashboards/stories/stories.service';
import { EpicsService } from 'src/app/dashboards/epics/epics.service';
import { ReleasesService } from 'src/app/dashboards/releases/releases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards = card_colours;

  boards: BoardsInterface[] = [];
  release: ReleaseInterface[] = [];
  epics: EpicsInterface[] = [];
  stories: StoriesInterface[] = [];
  sprints: SprintsInterface[] = [];
  users: UserInterface[] = [];
  roles: RoleInterface[] = [];

  constructor(
    private store: Store,
    private boardService: BoardService,
    private sprintService: SprintsService,
    private storyService: StoriesService,
    private epicService: EpicsService,
    private releaseService: ReleasesService
  ) {
  }

  // ngOnInit() {
  //   this.store.dispatch(loadBoards());

  //   this.boardService.getBoards().subscribe(boards => {
  //     console.log("response", boards);

  //     this.boards = boards
  //     this.counts = [
  //       { title: 'total boards', count: boards.length, link: '/boards/dashboard' },
  //       { title: 'total sprints', count: this.sprints?.length, link: '/sprints/dashboard' },
  //       { title: 'total stories', count: this.stories?.length, link: '/stories/dashboard' },
  //       { title: 'total epics', count: 8, link: '/stories/dashboard' },
  //       { title: 'total releases', count: this.release?.length, link: '/releases/dashboard' },
  //     ];

  //   }
  //   )

  //   console.log("boards", this.boards);

  // }

  ngOnInit() {
    this.store.dispatch(loadBoards());

    forkJoin({
      boards: this.boardService.getBoards(),
      sprints: this.sprintService.getSprints(),
      stories: this.storyService.getStories(),
      epics: this.epicService.getEpics(),
      releases: this.releaseService.getReleases(),
    }).subscribe(({ boards, sprints, stories, releases,epics }) => {
      this.boards = boards;
      // this.sprints = sprints;
      // this.stories = stories;
      // this.release = releases;

      this.counts = [
        { title: 'total boards', count: boards.length, link: '/boards/dashboard' },
        { title: 'total sprints', count: sprints.length, link: '/sprints/dashboard' },
        { title: 'total stories', count: stories.length, link: '/stories/dashboard' },
        { title: 'total epics', count:epics.length , link: '/stories/dashboard' },
        { title: 'total releases', count: releases.data.length, link: '/releases/dashboard' },
      ];
    });
  }

  counts: countInterface[] = [
    {
      title: 'total boards',
      count: this.boards?.length,
      link: '/boards/dashboard',
    },
    {
      title: 'total sprints',
      count: this.sprints?.length,
      link: '/sprints/dashboard',
    },
    {
      title: 'total stories',
      count: this.stories?.length,
      link: '/stories/dashboard',
    },
    {
      title: 'total epics',
      count: 8,
      link: '/stories/dashboard',
    },
    {
      title: 'total releases',
      count: this.release?.length,
      link: '/releases/dashboard',
    },
  ];

}
