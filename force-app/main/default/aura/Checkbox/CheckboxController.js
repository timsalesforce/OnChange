({
    onInit : function(component, event, helper) {
        component.set('v.checkboxValue', 'foo');
    },
    change: function(component, event, helper) {
        console.log(event);
    }
})
