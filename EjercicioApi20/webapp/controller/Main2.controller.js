sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "EjercicioApi20/EjercicioApi20/util/Services",
        "sap/ui/core/routing/History"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services, History) {
		"use strict";

		return Controller.extend("EjercicioApi20.EjercicioApi20.controller.Main2", {
			onInit: function () {
                // this.getOwnerComponent().getModel("productoSelectJSON")
            },
            onNavBack: function(){
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined){
                    window.history.go(-1);
                } else {
                    var oRoute = sap.ui.core.IComponent.getRouterFor(this);
                    oRoute.navTo("RouteMain2");
                }
            }
		});
	});
