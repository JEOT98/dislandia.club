gdjs.Pantalla_32de_32carga_32principalCode = {};
gdjs.Pantalla_32de_32carga_32principalCode.GDdislandiaObjects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDdislandiaObjects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDbarraObjects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDbarraObjects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDfondoObjects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDfondoObjects2= [];

gdjs.Pantalla_32de_32carga_32principalCode.conditionTrue_0 = {val:false};
gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0 = {val:false};
gdjs.Pantalla_32de_32carga_32principalCode.condition1IsTrue_0 = {val:false};


gdjs.Pantalla_32de_32carga_32principalCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0.val = false;
{
gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pasar");
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}}

}


{


gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0.val = false;
{
gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pasar") >= 1.7;
}if (gdjs.Pantalla_32de_32carga_32principalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu_pronunciacion", false);
}}

}


};

gdjs.Pantalla_32de_32carga_32principalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pantalla_32de_32carga_32principalCode.GDdislandiaObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDdislandiaObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDbarraObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDbarraObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDfondoObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDfondoObjects2.length = 0;

gdjs.Pantalla_32de_32carga_32principalCode.eventsList0(runtimeScene);

return;

}

gdjs['Pantalla_32de_32carga_32principalCode'] = gdjs.Pantalla_32de_32carga_32principalCode;
