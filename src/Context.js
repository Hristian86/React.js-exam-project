import { createContext } from 'react';
import getCookie from './components/Cookies/GetCookie';
import setCookie from './components/Cookies/SetCookie';
import getUserByToken from './components/Auth/GetUserByToken';

export const Context = createContext({});

const checkUser = async () => {
    const currentUser = getCookie("user");
    const userName = getCookie("user_name");
    const cookieChek = getCookie("cheked");
    
    const token = getCookie("token");

    if (userName === null || userName === undefined || userName === "") {
        if (currentUser && cookieChek === "") {
            const user = await getUserByToken();

            if (await user.displayName !== undefined) {
                if (user.displayName.length > 2) {
                    setCookie("user_name", user.displayName, 5);
                }
            }
            setCookie("cheked", "cheked", 5);
        }
    }
}

export const UserContext = createContext(checkUser());