export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface UserDTO {
    id?: number;
    name: string;
    username: string;
    email: string;
}