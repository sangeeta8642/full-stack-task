export interface countInterface {
  title: string;
  count: number;
  link?: string;
}

export interface ColumnConfig {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

export interface BoardsInterface {
  boardId?: number;
  boardName: string;
}

export interface EpicsInterface {
  id?: number;
  title?: any;
  epicId: number;
  epicName: string;
  description: string;
  stories?: StoriesInterface[]
}

export interface StoriesInterface {
  id?: number,
  StoryId: number;
  StoryName: string;
  Description: string;
  StatusId: number;
  BoardId: number;
  UserId: number;
  SprintId: number;
  EpicId: number;
}

export interface ReleaseInterface {
  ReleaseId: number;
  ReleaseName: string;
  SprintId: number;
}

export interface SprintsInterface {
  sprintId: number;
  sprintNo: string;
  sprintName: string;
  sprintPoint: number;
  startDate: string | Date;
  endDate: string | Date;
  board: BoardsInterface
}

export interface UserInterface {
  UserId?: number;
  UserName: string;
  Email: string;
  Password?: string;
  password?: string;
  RoleId?: number;
  role?: RoleInterface;
  userName?: string;

}

export interface StatusInterface {
  id?: number;
  Name: string;
}

export interface RoleInterface {
  id?: number;
  Title: string;
  title?: string;
}

export interface LoginInterface {
  email: string,
  password: string,
  newPassword?: string
}

export interface loginFirstTimeModel {
  email: string,
  defaultPassword: string,
  newPassword: string
}
