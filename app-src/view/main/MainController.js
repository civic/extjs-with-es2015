/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSWithES2015.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', choice => {
            let active_tab = this.getView().getActiveTab();  // 'this' is MainController instannce
            console.log(choice);
            console.log(active_tab.getTitle());
        });
    },
    onTabChange(tabPanel, newCard, oldCard, eOpts){
        this.getViewModel().set("name", newCard.getTitle()); 
    }

});
