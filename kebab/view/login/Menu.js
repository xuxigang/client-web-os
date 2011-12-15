/**
 * @class Index
 * @extends Ext.toolbar.Toolbar
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab OS Login menu bar widget
 */
Ext.define('Kebab.view.login.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.login_menu',

    id: 'login-menu',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            dock: 'top',
            items: me.buildItems()
        });

        me.callParent(arguments);
    },

    /**
     * Build the dock items
     */
    buildItems: function() {

        return [{
            xtype: 'login_menu_tenantInfo'
        }, '->', {
            xtype: 'login_menu_indicators'
        }];
        
    }
});