gdjs.Pantalla_32de_32carga_32principalCode = {};
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeObjects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeObjects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R1Objects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R1Objects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K2Objects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K2Objects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K1Objects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K1Objects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R2Objects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R2Objects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S1Objects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S1Objects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S2Objects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S2Objects2= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeDObjects1= [];
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeDObjects2= [];
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
}{gdjs.evtTools.window.setMargins(runtimeScene, 0, 0, 0, 0);
}{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
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

gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R1Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R1Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K2Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K2Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K1Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95K1Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R2Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95R2Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S1Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S1Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S2Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDCarta_95S2Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeDObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32principalCode.GDpersonajeDObjects2.length = 0;
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
