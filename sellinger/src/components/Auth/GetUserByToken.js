import url from "../BaseUrl/BaseUrl";
import getCookie from "../Cookioes/GetCookie";

const sendChanges = async (userName, userImage) => {

    let payload = {};
    if (userName != null) {
        payload = {
            "displayName": userName
        }
    } else if (userImage != null) {
        payload = {
            "imageURL": userImage
        }
    }

    const token = getCookie("token");
    try {

        const result = await fetch(url("manage"), {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }, body: JSON.stringify(payload)
        }).then(res => res.json());

        if (await result) {
            return result;
        }

    } catch (e) {
        console.log(e);
    }
}

const getUserByToken = async () => {
    const token = getCookie("token");
    try {

        const result = await fetch(url("manage"), {
            "method": "POST",
            "headers": {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json());

        if (await result) {
            return result;
        }

    } catch (e) {
        console.log(e);
    }
}

export { sendChanges };
export default getUserByToken;