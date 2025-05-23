export interface countInterface {
  title: string,
  count: number,
  link?: string
}

export interface ColumnConfig {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

export interface BoardsInterface {
  BoardId: number, BoardName: string
}

export interface EpicsInterface {
  EpicId: number, EpicName: string, Description: string
}

export interface StoriesInterface {
  StoryId: number, StoryName: string,
  Description: string, StatusId: number,
  BoardId: number, UserId: number, SprintId: number, EpicId: number
}

export interface ReleaseInterface {
  ReleaseId: number,
  ReleaseName: string,
  SprintId: number
}

export interface SprintsInterface {
  SprintId: number,
  SprintNo: string,
  SprintName: string,
  SprintPoint: number,
  StartDate: string | Date,
  EndDate: string | Date
}

export interface UserInterface {
  UserId?: number,
  UserName: string,
  Email: string,
  Password: string,
  RoleId: number
}