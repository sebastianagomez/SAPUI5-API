/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EjercicioApi20/EjercicioApi20/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
