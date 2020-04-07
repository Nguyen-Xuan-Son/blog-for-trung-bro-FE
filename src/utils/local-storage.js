const setData = (key, data) => {
    return new Promise(res => {
        localStorage.setItem(key, JSON.stringify(data));
        const result = localStorage.getItem(key);
        if (key && data && result) {
            res(result);
        }
        res(false);
    });
};

const getData = key => {
    return new Promise(res => {
        const data = localStorage.getItem(key);
        if (key && data) {
            res(JSON.parse(data));
        }
        res(false);
    });
};

const removeItemData = key => {
    return new Promise(res => {
        localStorage.removeItem(key);
        if (key && !localStorage.getItem(key)) {
            res(true);
        }
        res(false);
    });
};

const clearAllData = () => {
    return new Promise(res => {
        localStorage.clear();
        if (!localStorage.length) {
            res(true);
        }
        res(false);
    });
}

export {
    setData,
    getData,
    removeItemData,
    clearAllData
};