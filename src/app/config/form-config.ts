export const formFields: {
    [key: string]: { name: string; type: string; optionsKey?: string, label: string }[];
} = {
    Board: [
        { name: 'BoardName', type: 'text', label: 'Board Name' },
        // { name: 'StartDate', type: 'date' },
        // { name: 'EndDate', type: 'date' }
    ],

    Sprint: [
        { name: 'SprintName', label: 'Sprint Name', type: 'text' },
        { name: 'SprintNo', label: 'Sprint Number', type: 'text' },
        { name: 'StartDate', label: 'Start Date', type: 'date' },
        { name: 'EndDate', label: 'End Date', type: 'date' },
        { name: 'BoardId', label: 'Board Id', type: 'select', optionsKey: 'boards' }
    ],

    Story: [
        { name: 'StoryName', label: 'Story Name', type: 'text' },
        { name: 'Description', label: 'Description', type: 'text' },
        { name: 'Flag', label: 'Flag', type: 'checkbox' },
        { name: 'StatusId', label: 'Status', type: 'number' },
        { name: 'BoardId', label: 'Board', type: 'select', optionsKey: 'boards' },
        { name: 'UserId', label: 'User', type: 'select', optionsKey: 'users' },
        { name: 'SprintId', label: 'Sprint', type: 'select', optionsKey: 'sprints' },
        { name: 'EpicId', label: 'Epic', type: 'select', optionsKey: 'epics' }
    ],

    Epic: [
        { name: 'EpicName', label: 'Epic Name', type: 'text' },
        { name: 'Description', label: 'Description', type: 'text' },
        // { name: 'BoardId', type: 'select', optionsKey: 'boards' }
    ],

    Release: [
        { name: 'ReleaseName', label: 'Release Name', type: 'text' },
        { name: 'Version', label: 'Version', type: 'text' },
        { name: 'StartDate', label: 'Start Date', type: 'date' },
        { name: 'EndDate', label: 'End Date', type: 'date' },
        { name: 'SprintId', label: 'Sprint', type: 'select', optionsKey: 'sprints' }
    ],

    User: [
        { name: 'UserName', label: 'UserName', type: 'text' },
        { name: 'Email', label: 'Email', type: 'email' },
        { name: 'Role', label: 'Role', type: 'text' }
    ]
};
