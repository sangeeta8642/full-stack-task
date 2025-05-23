import { ReleaseInterface } from "src/app/utils/types"

export interface ReleaseState {
    releases: ReleaseInterface[],
    error: string | null,
    loading: boolean
}

export const initialReleaseState: ReleaseState = {
    releases: [
        { ReleaseId: 1, ReleaseName: "v1.0", SprintId: 1 },
        { ReleaseId: 2, ReleaseName: "v1.1", SprintId: 2 },
        { ReleaseId: 3, ReleaseName: "v2.0", SprintId: 3 },
        { ReleaseId: 4, ReleaseName: "v2.1", SprintId: 4 },
        { ReleaseId: 5, ReleaseName: "v3.0", SprintId: 5 }
    ],
    error: null,
    loading: false
}