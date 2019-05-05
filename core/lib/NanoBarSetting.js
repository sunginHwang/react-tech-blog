import axiosAuth from './axiosAuth';

const requests = [];

let progress = 0;
let timerId = null;

function setProgress(value) {
    progress = value;
    if (typeof window !== 'undefined' && window.nanoBar) {
        window.nanoBar.go(progress);
    }
}

function timer() {
    if (progress < 98) {
        const diff = 100 - progress; // 75
        const inc = diff / (10 + progress * (1 + progress / 100));
        setProgress(progress + inc);
    }
    timerId = setTimeout(timer, 50);
}

export function nanoBarSetup() {
    console.log(33433);
    axiosAuth.interceptors.request.use((req) => {
        if (requests.length === 0) {
            setProgress(25);
            timer();
        }
        requests.push(req);
        return req;
    });
    const responseHandler = (res) => {
        setTimeout(() => {
            requests.pop();
            if (requests.length === 0) {
                if (timerId) {
                    clearTimeout(timerId);
                    timerId = null;
                }
                setProgress(100);
            }
        }, 150);
        return res;
    };
    const errorHandler = (response) => {
        setTimeout(() => {
            requests.pop();
            if (requests.length === 0) {
                if (timerId) {
                    clearTimeout(timerId);
                    timerId = null;
                }
                setProgress(100);
            }
        }, 150);
        return Promise.reject(response);
    };

    console.log(responseHandler);
    console.log(12);
    axiosAuth.interceptors.response.use(responseHandler, errorHandler);

}
