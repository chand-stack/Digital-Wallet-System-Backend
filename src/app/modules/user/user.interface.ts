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
    name: string;
    email: string;
    password: string;
    role : ROLE;
    isApproved ?: boolean;
    status : STATUS;
}