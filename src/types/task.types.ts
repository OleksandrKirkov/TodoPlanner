import type { IBase } from './root.types'

export const TaskPriority = {
    log: 'low',
    medium: 'medium',
    high: 'high'
} as const

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]
export interface ITaskResponse extends IBase {
    name: string
    priority?: TaskPriority
    isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
