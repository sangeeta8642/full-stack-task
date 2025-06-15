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

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadBoards());
  }

  ngAfterViewInit() {
    this.subscribeToEntity(getAllBoards, 'boards');
    console.log('this.boards', this.boards);

    this.subscribeToEntity(getAllReleases, 'release');
    this.subscribeToEntity(getAllEpics, 'epics');
    this.subscribeToEntity(getAllSprints, 'sprints');
    this.subscribeToEntity(getAllStories, 'stories');
    this.subscribeToEntity(getAllUsers, 'users');
    this.subscribeToEntity(getAllRoles, 'roles');
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

  subscribeToEntity<T>(selector: any, assignTo: keyof HomeComponent) {
    this.store.select(selector).subscribe((data: any) => {
      console.log('Result :', data, Object.keys(data)[0]);

      const key = Object.keys(data)[0];
      console.log('data[key]', data[key]);

      this[assignTo] = data[key];
    });
  }
}
