/**
 * @class SignUp
 * @extends Ext.Img
 * @author Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 *
 * Kebab Desktop viewport widget
 */
Ext.define('Apps.feedback.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.feedback_form',

    id: 'feedback-form',

    /**
     * Component initializer
     */
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            frame: true,
            padding: 20,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            buttonAlign: 'center',
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'top',
                labelSeparator: '',
                anchor: '100%'
            },
            items: me.buildItems(),
            buttons: me.buildButtons()
        }, null);

        me.callParent(arguments);
    },

    buildItems: function() {
        var me = this;

        return [{
            xtype: 'textfield',
            fieldLabel: 'Your e-mail address',
            readOnly: true,
            value: Kebab.helper.config('user').email,
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Subject',
            allowBlank: false
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Message',
            labelAlign: 'top',
            flex: 1,
            margins: '0',
            allowBlank: false
        }];
    },

    buildButtons: function() {
        return [{
            text: 'Send feedback',
            action: 'submit',
            formBind: true,
            disabled: true
        }];
    }
});