const KeySession = Object.freeze({
    Token: 'token'
});

export default class LoginManager {

    constructor({ sessionManager }) {

        this.nameField = document.getElementById('name');
        this.passwordField = document.getElementById('password');
        this.sessionManager = sessionManager;
    }

    initialize() {

        console.info('Initialize login manager');
    }

    login() {

        if (!this.nameField.value) {

            return;
        }

        const token = this.sessionManager.b64Encode(this.nameField.value);

        if (token) {

            this.sessionManager.setItem({ key: KeySession.Token, item: token });

            return this.nameField.value;
        }

        return;
    }

    validateSession() {

        const token = this.sessionManager.getItem({ key: KeySession.Token });

        if (token) {

            const userName = this.sessionManager.b64Decode(token);

            return userName;
        }

        return;
    }

    logout() {

        this.sessionManager.removeItem({ key: KeySession.Token });
    }
}