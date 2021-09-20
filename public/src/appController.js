export default class AppController {

    constructor({ loginManager, sessionManager, viewManager }) {

        this.loginManager = loginManager;
        this.viewManager = viewManager;
    }

    initialize() {

        console.info('Initialize app controller');

        this.viewManager.configureLoginForm();
        this.viewManager.configureLoginButtonEvent({
            onLogin: this.onLogin.bind(this)
        });
        this.viewManager.configureLogoutButtonEvent({
            onLogout: this.onLogout.bind(this)
        });
        this.loginManager.initialize();

        this.recoverySession();
    }

    onLogin(e) {

        const userName = this.loginManager.login();

        if (userName) {

            this.viewManager.configureWelcome(userName);
        }
    }

    onLogout(e) {

        this.loginManager.logout();
        this.viewManager.configureLoginForm();
    }

    recoverySession() {

        const userName = this.loginManager.validateSession();

        if (userName) {

            this.viewManager.configureWelcome(userName);
        }
    }
}