export default class SessionManager {

    constructor() {}

    getItem({ key }) {

        return localStorage.getItem(key);
    }

    setItem({ key, item }) {

        localStorage.setItem(key, item);
    }

    removeItem({ key }) {

        localStorage.removeItem(key);
    }

    b64Encode(str) {

        return window.btoa(unescape(encodeURIComponent(str)));
    }

    b64Decode(str) {

        return decodeURIComponent(escape(window.atob(str)));
    }
}