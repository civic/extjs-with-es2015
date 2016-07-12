/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.define('ExtJSWithES2015.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ExtJSWithES2015',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch() {
        // TODO - Launch the application
    },

    onAppUpdate () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?', choice => {
            if (choice === 'yes') {
                window.location.reload();
            }
        });
    }
});
