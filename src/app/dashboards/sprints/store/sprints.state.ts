import { SprintsInterface } from "src/app/utils/types"

export interface SprintState {
    sprints: SprintsInterface[],
    error: string | null,
    loading: boolean
}

export const initialSprintState: SprintState = {
    sprints: [
        { SprintId: 1, SprintNo: "S1", SprintName: "Sprint Alpha", SprintPoint: 20, StartDate: "2025-05-01", EndDate: "2025-05-15" },
        { SprintId: 2, SprintNo: "S2", SprintName: "Sprint Beta", SprintPoint: 25, StartDate: "2025-05-16", EndDate: "2025-05-30" },
        { SprintId: 3, SprintNo: "S3", SprintName: "Sprint Gamma", SprintPoint: 30, StartDate: "2025-06-01", EndDate: "2025-06-15" },
        { SprintId: 4, SprintNo: "S4", SprintName: "Sprint Delta", SprintPoint: 22, StartDate: "2025-06-16", EndDate: "2025-06-30" },
        { SprintId: 5, SprintNo: "S5", SprintName: "Sprint Epsilon", SprintPoint: 18, StartDate: "2025-07-01", EndDate: "2025-07-15" }
    ],
    error: null,
    loading: false
}