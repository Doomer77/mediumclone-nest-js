import { UserType } from './user.types';

export interface UserPesponseInterface {
  user: UserType & { token: string };
}
