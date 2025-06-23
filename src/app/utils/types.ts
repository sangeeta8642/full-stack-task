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
  stories?: StoriesInterface[];
}

export interface StoriesInterface {
  id?: number;
  storyId: number;
  storyName: string;
  description: string;
  statusId: number;
  status?: StatusInterface;
  boardId: number;
  userId: number;
  users?: UserInterface;
  sprintId: number;
  epicId: number;
}

export interface ReleaseInterface {
  releaseId: number;
  releaseName: string;
  sprintId: number;
}

export interface SprintsInterface {
  sprintId: number;
  sprintNo: string;
  sprintName: string;
  sprintPoint: number;
  startDate: string | Date;
  endDate: string | Date;
  board: BoardsInterface;
}

export interface UserInterface {
  userId: number;
  email: any;
  UserId?: number;
  UserName: string;
  Email: string;
  Password?: string;
  password?: string;
  RoleId?: number;
  roleId?: string;
  role?: RoleInterface;
  userName?: string;
}

export interface StatusInterface {
  id?: number;
  name: string;
}

export interface RoleInterface {
  id?: number;
  Title: string;
  title?: string;
}

export interface LoginInterface {
  email: string;
  password: string;
  newPassword?: string;
}

export interface loginFirstTimeModel {
  email: string;
  defaultPassword: string;
  newPassword: string;
}

export interface SubtaskInterface {
  taskId:number;
  taskName: string;
  description: string;
  storyId: number;
  story?: StoriesInterface;
}
