export enum ROLE{
    USER = "USER",
    AGENT = "AGENT",
    ADMIN = "ADMIN"
}

export enum STATUS{
    ACTIVE = "ACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IUser{
    _id ?: string;
    name: string;
    email: string;
    password: string;
    role : ROLE;
    isApproved ?: boolean;
    status : STATUS;
    isDeleted: boolean
}