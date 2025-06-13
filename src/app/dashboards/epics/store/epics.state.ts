import { BoardsInterface, EpicsInterface } from "src/app/utils/types"

export interface EpicState {
    epics: EpicsInterface[],
    error: string | null,
    loading: boolean
}

export const initialEpicState: EpicState = {
    epics: [
        {
            epicId: 1,
            epicName: 'User Onboarding',
            description: 'Implement features related to new user registration and authentication.'
        },
        {
            epicId: 2,
            epicName: 'Dashboard Revamp',
            description: 'Redesign and enhance the main user dashboard with new widgets and charts.'
        },
        {
            epicId: 3,
            epicName: 'Payment Integration',
            description: 'Integrate third-party payment gateways such as Stripe and PayPal.'
        },
        {
            epicId: 4,
            epicName: 'Notification System',
            description: 'Create a system for sending real-time and scheduled notifications.'
        },
        {
            epicId: 5,
            epicName: 'Analytics Module',
            description: 'Develop a module to track user activities and provide insights.'
        }

    ],
    error: null,
    loading: false
}