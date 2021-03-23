sap.ui.define([], function(){
    "use strict";
    return {
        model:{
            I18N: "i18n",
        },

        names: {
            Models: {
                modelOrders: "productoJSON",
                modelOrderSelect: "productoSelectJSON",
            }
        },

        routes: {
            Entitys: {
                orderDetails: "/V3/Northwind/Northwind.svc/Order_Details",
                orders: "/V3/Northwind/Northwind.svc/Orders("             
            }
        },

    };
}, true);