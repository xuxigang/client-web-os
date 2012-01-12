/**
 * @class System
 * @extends Ext.app.Controller
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Kernel System controller
 */
Ext.define('Apps.feedback.controller.Test', {
    extend: 'Ext.app.Controller',

    /**
     * Controller initializer
     */
    init: function() {
        var me = this;

         me.control({
             'feedback_viewport': {
                 drag: function() {
                      console.log('Apps.Feedback viewport dragged');
                 }
             }
         });

        // Call parent
        me.callParent(arguments);
    }
});