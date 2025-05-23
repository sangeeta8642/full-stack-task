import { BoardsInterface } from "src/app/utils/types"

export interface BoardState {
    boards: BoardsInterface[],
    error: string | null,
    loading: boolean
}

export const initialBoardState: BoardState = {
    boards: [
        { BoardId: 1, BoardName: "Development" },
        { BoardId: 2, BoardName: "Marketing" },
        { BoardId: 3, BoardName: "Sales" },
        { BoardId: 4, BoardName: "Design" },
        { BoardId: 5, BoardName: "QA" }
    ],
    error: null,
    loading: false
}