/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Kebab.controller.desktop.Menu', {
    extend: 'Ext.app.Controller',

    /**
     * Controller view widgets
     */
    views: [
        'desktop.Menu',
        'desktop.menu.Indicators',
        'desktop.menu.Info'
    ],

    refs: [{
        ref: 'menu',
        selector: 'desktop_menu_index'
    },{
        ref: 'info',
        selector: 'desktop_menu_info'
    },{
        ref: 'indicators',
        selector: 'desktop_menu_indicators'
    }],

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

        // Call parent
        me.callParent(arguments);
    }
});
