import axiosConfied from './../services/interceptor';
import ROOT_CONSTANT from './../constants/root.js';

const getMethod = api => {
    axiosConfied.get(ROOT_CONSTANT.API_ROOT + api).then(res => {
        console.log('res', res);
    }).catch(err => console.error(err));
};

const putMethod = (api, data = null) => {
    axiosConfied.put(api, data).then(res => {
        console.log('res', res);
    }).catch(err => console.error(err));
};

const postMethod = (api, data = null) => {
    axiosConfied.post(api, data).then(res => {
        console.log('res', res);
    }).catch(err => console.error(err));
};

const deleteMethod = api => {
    axiosConfied.get(api).then(res => {
        console.log('res', res);
    }).catch(err => console.error(err));
};

export {
    getMethod,
    putMethod,
    postMethod,
    deleteMethod
}