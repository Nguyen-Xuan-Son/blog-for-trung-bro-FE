import axiosConfied from './../services/interceptor';
import ROOT_CONSTANT from './../constants/root.js';

const getMethod = api => {
    return axiosConfied.get(ROOT_CONSTANT.API_ROOT + api);
};

const putMethod = (api, data = null) => {
    return axiosConfied.put(ROOT_CONSTANT.API_ROOT + api, JSON.stringify(data));
};

const postMethod = (api, data = null) => {
    return axiosConfied.post(ROOT_CONSTANT.API_ROOT + api, JSON.stringify(data));
};

const deleteMethod = api => {
    return axiosConfied.delete(ROOT_CONSTANT.API_ROOT + api);
};

export {
    getMethod,
    putMethod,
    postMethod,
    deleteMethod
}