import { getData } from "./../utils/local-storage";

const beforeRouteEnterHandle = (to, from, next) => {
    if (to.path.indexOf("/admin") !== -1) {
        getData("token").then(res => {
            if (res) {
                next({
                    path: to.name === "login" ? "/admin" : to.path
                });
            } else {
                next({
                    path: "/admin/login"
                });
            }
        });
    }
    next();
}

export {
    beforeRouteEnterHandle
}