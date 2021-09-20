export default class ViewManager {

    constructor() {

        this.containerLoginForm = document.getElementById('containerLoginForm');
        this.containerWelcome = document.getElementById('containerWelcome');
        this.welcomeName = document.getElementById('welcomeName');
        this.btnLogin = document.getElementById('btnLogin');
        this.btnLogout = document.getElementById('btnLogout');
    }

    configureLoginForm() {

        this.containerLoginForm.classList.remove('hide');
        this.containerWelcome.classList.add('hide');
    }

    configureWelcome(name) {

        if (!name) return;

        this.welcomeName.innerHTML = name;
        this.containerLoginForm.classList.add('hide');
        this.containerWelcome.classList.remove('hide');
    }

    configureLoginButtonEvent({ onLogin }) {

        this.btnLogin.addEventListener('click', onLogin);
    }

    configureLogoutButtonEvent({ onLogout }) {

        this.btnLogout.addEventListener('click', onLogout);
    }
}