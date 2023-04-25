gdjs.Pantalla_32de_32carga_32finalCode = {};
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeObjects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeObjects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R1Objects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R1Objects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K2Objects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K2Objects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K1Objects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K1Objects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R2Objects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R2Objects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S1Objects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S1Objects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S2Objects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S2Objects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeDObjects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeDObjects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDdislandiaObjects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDdislandiaObjects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDbarraObjects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDbarraObjects2= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDfondoObjects1= [];
gdjs.Pantalla_32de_32carga_32finalCode.GDfondoObjects2= [];

gdjs.Pantalla_32de_32carga_32finalCode.conditionTrue_0 = {val:false};
gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0 = {val:false};
gdjs.Pantalla_32de_32carga_32finalCode.condition1IsTrue_0 = {val:false};


gdjs.Pantalla_32de_32carga_32finalCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0.val = false;
{
gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pasar");
}}

}


{


gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0.val = false;
{
gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pasar") >= 1.7;
}if (gdjs.Pantalla_32de_32carga_32finalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL(gdjs.VariablesContainer.badVariablesContainer.get("www").getChild("dislandia").getChild("club"), runtimeScene);
}}

}


};

gdjs.Pantalla_32de_32carga_32finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R1Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R1Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K2Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K2Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K1Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95K1Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R2Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95R2Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S1Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S1Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S2Objects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDCarta_95S2Objects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeDObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDpersonajeDObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDdislandiaObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDdislandiaObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDbarraObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDbarraObjects2.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDfondoObjects1.length = 0;
gdjs.Pantalla_32de_32carga_32finalCode.GDfondoObjects2.length = 0;

gdjs.Pantalla_32de_32carga_32finalCode.eventsList0(runtimeScene);

return;

}

gdjs['Pantalla_32de_32carga_32finalCode'] = gdjs.Pantalla_32de_32carga_32finalCode;
