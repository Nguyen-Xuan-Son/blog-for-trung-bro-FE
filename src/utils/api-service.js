import axios from 'axios';

import ROOT_CONSTANT from './../constants/root.js';

axios.interceptors.request.use((config) => {
    config.headers.token = "Fake token";

    // TODO
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if (response.config.parse) {
        //perform the manipulation here and change the response object
        // TODO
    }
    return response;
}, error => {
    return Promise.reject(error);
});

const getMethod = api => {
    axios.get(ROOT_CONSTANT.API_ROOT + api).then(res => {
        console.log('res', res);
    });
};

const putMethod = (api, data) => {
    axios.put(api, data).then(res => {
        console.log('res', res);
    });
};

const postMethod = (api, data) => {
    axios.post(api, data).then(res => {
        console.log('res', res);
    });
};

const deleteMethod = api => {
    axios.get(api).then(res => {
        console.log('res', res);
    });
};

export {
    getMethod,
    putMethod,
    postMethod,
    deleteMethod
}