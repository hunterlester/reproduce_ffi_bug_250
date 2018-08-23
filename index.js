const safeApp = require('@maidsafe/safe-node-app');

(async () => {
    const info = { id: 'primary', name: 'Primary App', vendor: '1' };
    const app = await safeApp.initialiseApp(info);
    await app.auth.loginForTest({}, { own_container: true });
    await app.auth.refreshContainersPermissions()
    console.log('This log will not print without setTimeout in safe_app_nodejs/src/api/auth.js loginForTest');
})();
