import { User } from '../models/user.models';

export interface LoadUsersResponse  {
    total: number;
    usuarios: User[];
}
