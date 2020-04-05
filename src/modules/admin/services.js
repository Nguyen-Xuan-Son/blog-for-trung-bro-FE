import { postMethod } from "./../../utils/api-service";

const adminLogin = data => {
    return postMethod("/login", data);
}

export {
    adminLogin
};