import AppController from './src/appController.js';
import LoginManager from './src/loginManager.js';
import SessionManager from './src/sessionManager.js';
import ViewManager from './src/viewManager.js';

const appController = new AppController({
    loginManager: new LoginManager({
        sessionManager: new SessionManager()
    }),
    viewManager: new ViewManager()
});

try {
    appController.initialize();
} catch (error) {
    console.error('error on initializing', error);
}