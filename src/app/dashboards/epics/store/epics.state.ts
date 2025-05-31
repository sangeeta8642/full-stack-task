import { BoardsInterface, EpicsInterface } from "src/app/utils/types"

export interface EpicState {
    epics: EpicsInterface[],
    error: string | null,
    loading: boolean
}

export const initialEpicState: EpicState = {
    epics: [
        {
            EpicId: 1,
            EpicName: 'User Onboarding',
            Description: 'Implement features related to new user registration and authentication.'
        },
        {
            EpicId: 2,
            EpicName: 'Dashboard Revamp',
            Description: 'Redesign and enhance the main user dashboard with new widgets and charts.'
        },
        {
            EpicId: 3,
            EpicName: 'Payment Integration',
            Description: 'Integrate third-party payment gateways such as Stripe and PayPal.'
        },
        {
            EpicId: 4,
            EpicName: 'Notification System',
            Description: 'Create a system for sending real-time and scheduled notifications.'
        },
        {
            EpicId: 5,
            EpicName: 'Analytics Module',
            Description: 'Develop a module to track user activities and provide insights.'
        }

    ],
    error: null,
    loading: false
}