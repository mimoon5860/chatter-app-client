export interface IUser {
    _id: string,
    name: string,
    phone: string,
    email: string,
    verified: string,
    photo: string | null,
    createdAt: string,
    updatedAt: string
}

export interface IUserState {
    user: IUser | null,
    status: 'idle' | 'loading' | 'failed',
    error: any
}
