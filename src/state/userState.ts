import { proxy } from "valtio";
import { User } from "../types/user";

type UserState = {
    user: User | null;
}

export const userState = proxy<UserState>({
    user: {
        id: 1,
        name: 'Default User',
        email: 'default@user.com',
        password: 'password'
    },
});
