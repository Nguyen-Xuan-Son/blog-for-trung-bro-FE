import { getData } from "./../utils/local-storage";

const beforeRouteEnterHandle = (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        getData("token").then(res => {
            if (!res) {
                next({ path: "/admin/login" });
            } else {
                next();
            }
        });
    }

    next();
}

export {
    beforeRouteEnterHandle
}