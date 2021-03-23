sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "EjercicioApi20/EjercicioApi20/util/Services",
        "EjercicioApi20/EjercicioApi20/util/Constants",
        "sap/ui/core/routing/History"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services, Constants, History) {
		"use strict";

		return Controller.extend("EjercicioApi20.EjercicioApi20.controller.Main", {
			onInit: function () {
                this.loadServiceModel();
            },

            loadServiceModel: async function(){

                const oComponent = this.getOwnerComponent();

                let oResponseProducto = await Services.getOrdersDetail();
                let oDataProducto = oResponseProducto[0];

                var oModelProducto = new JSONModel();
                oModelProducto.setData(oDataProducto);

                oComponent.setModel(oModelProducto, Constants.names.Models.modelOrders);
            },

            pressItem: function(oEvent){
                var oItem = oEvent.getSource();
                var oBindingContext = oItem.getBindingContext(Constants.names.Models.modelOrders);
                var oModel = this.getOwnerComponent().getModel(Constants.names.Models.modelOrders);
                var oItemSeleccioando = oModel.getProperty(oBindingContext.getPath());

                var oItemID = oItemSeleccioando.OrderID;

                this.loadServiceModel2(oItemID);

                this.getOwnerComponent().getRouter().navTo("RouteMain2");
            },


            loadServiceModel2: async function(sParam){

                const oComponent = this.getOwnerComponent();

                let oResponseProducto = await Services.getOrders(sParam);
                let oDataProducto = oResponseProducto[0];

                var oModelProducto = new JSONModel();
                oModelProducto.setData(oDataProducto);

                oComponent.setModel(oModelProducto, Constants.names.Models.modelOrderSelect);
            }

            // mostrarMain2: function(){
            //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //     oRouter.navTo("RouteMain2");
            // },
		});
	});
