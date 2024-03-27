import { atom } from "jotai";
import { User } from "../types/user";

export const userAtom = atom<User | null>({
    id: 1,
    name: "Default User",
    email: "defaultUser@user.com",
    password: "password"
})