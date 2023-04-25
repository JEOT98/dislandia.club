gdjs.p_95finalCode = {};
gdjs.p_95finalCode.GDpersonajeObjects1= [];
gdjs.p_95finalCode.GDpersonajeObjects2= [];
gdjs.p_95finalCode.GDCarta_95R1Objects1= [];
gdjs.p_95finalCode.GDCarta_95R1Objects2= [];
gdjs.p_95finalCode.GDCarta_95R2Objects1= [];
gdjs.p_95finalCode.GDCarta_95R2Objects2= [];
gdjs.p_95finalCode.GDCarta_95L1Objects1= [];
gdjs.p_95finalCode.GDCarta_95L1Objects2= [];
gdjs.p_95finalCode.GDCarta_95L2Objects1= [];
gdjs.p_95finalCode.GDCarta_95L2Objects2= [];
gdjs.p_95finalCode.GDCarta_95r1Objects1= [];
gdjs.p_95finalCode.GDCarta_95r1Objects2= [];
gdjs.p_95finalCode.GDCarta_95r2Objects1= [];
gdjs.p_95finalCode.GDCarta_95r2Objects2= [];
gdjs.p_95finalCode.GDCarta_95K1Objects1= [];
gdjs.p_95finalCode.GDCarta_95K1Objects2= [];
gdjs.p_95finalCode.GDCarta_95K2Objects1= [];
gdjs.p_95finalCode.GDCarta_95K2Objects2= [];
gdjs.p_95finalCode.GDCarta_95l1Objects1= [];
gdjs.p_95finalCode.GDCarta_95l1Objects2= [];
gdjs.p_95finalCode.GDCarta_95l2Objects1= [];
gdjs.p_95finalCode.GDCarta_95l2Objects2= [];
gdjs.p_95finalCode.GDCarta_95S1Objects1= [];
gdjs.p_95finalCode.GDCarta_95S1Objects2= [];
gdjs.p_95finalCode.GDCarta_95S2Objects1= [];
gdjs.p_95finalCode.GDCarta_95S2Objects2= [];
gdjs.p_95finalCode.GDbloque1Objects1= [];
gdjs.p_95finalCode.GDbloque1Objects2= [];
gdjs.p_95finalCode.GDbloque2Objects1= [];
gdjs.p_95finalCode.GDbloque2Objects2= [];
gdjs.p_95finalCode.GDbloque3Objects1= [];
gdjs.p_95finalCode.GDbloque3Objects2= [];
gdjs.p_95finalCode.GDfondoObjects1= [];
gdjs.p_95finalCode.GDfondoObjects2= [];
gdjs.p_95finalCode.GDNivelObjects1= [];
gdjs.p_95finalCode.GDNivelObjects2= [];
gdjs.p_95finalCode.GDParejasObjects1= [];
gdjs.p_95finalCode.GDParejasObjects2= [];
gdjs.p_95finalCode.GDposicionObjects1= [];
gdjs.p_95finalCode.GDposicionObjects2= [];
gdjs.p_95finalCode.GDparticulasObjects1= [];
gdjs.p_95finalCode.GDparticulasObjects2= [];
gdjs.p_95finalCode.GDnivelObjects1= [];
gdjs.p_95finalCode.GDnivelObjects2= [];
gdjs.p_95finalCode.GDTitulo_95cargaObjects1= [];
gdjs.p_95finalCode.GDTitulo_95cargaObjects2= [];
gdjs.p_95finalCode.GDboton_95jugarObjects1= [];
gdjs.p_95finalCode.GDboton_95jugarObjects2= [];
gdjs.p_95finalCode.GDN1Objects1= [];
gdjs.p_95finalCode.GDN1Objects2= [];
gdjs.p_95finalCode.GDboton_95otravezObjects1= [];
gdjs.p_95finalCode.GDboton_95otravezObjects2= [];
gdjs.p_95finalCode.GDboton_95salirObjects1= [];
gdjs.p_95finalCode.GDboton_95salirObjects2= [];

gdjs.p_95finalCode.conditionTrue_0 = {val:false};
gdjs.p_95finalCode.condition0IsTrue_0 = {val:false};
gdjs.p_95finalCode.condition1IsTrue_0 = {val:false};
gdjs.p_95finalCode.condition2IsTrue_0 = {val:false};


gdjs.p_95finalCode.eventsList0 = function(runtimeScene) {

{


gdjs.p_95finalCode.condition0IsTrue_0.val = false;
{
gdjs.p_95finalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.p_95finalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.p_95finalCode.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.p_95finalCode.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.p_95finalCode.GDpersonajeObjects1[i].setAnimationName("correcto");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sonidos\\otra vez.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "nivel3");
}}

}


};gdjs.p_95finalCode.mapOfGDgdjs_46p_9595finalCode_46GDboton_9595otravezObjects1Objects = Hashtable.newFrom({"boton_otravez": gdjs.p_95finalCode.GDboton_95otravezObjects1});
gdjs.p_95finalCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boton_otravez"), gdjs.p_95finalCode.GDboton_95otravezObjects1);

gdjs.p_95finalCode.condition0IsTrue_0.val = false;
gdjs.p_95finalCode.condition1IsTrue_0.val = false;
{
gdjs.p_95finalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.p_95finalCode.mapOfGDgdjs_46p_9595finalCode_46GDboton_9595otravezObjects1Objects, runtimeScene, true, false);
}if ( gdjs.p_95finalCode.condition0IsTrue_0.val ) {
{
gdjs.p_95finalCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.p_95finalCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "p_nivel1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sonidos\\tarjeta.mp3", false, 100, 1);
}}

}


};gdjs.p_95finalCode.eventsList2 = function(runtimeScene) {

{


gdjs.p_95finalCode.eventsList0(runtimeScene);
}


{


gdjs.p_95finalCode.eventsList1(runtimeScene);
}


};

gdjs.p_95finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.p_95finalCode.GDpersonajeObjects1.length = 0;
gdjs.p_95finalCode.GDpersonajeObjects2.length = 0;
gdjs.p_95finalCode.GDCarta_95R1Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95R1Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95R2Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95R2Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95L1Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95L1Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95L2Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95L2Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95r1Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95r1Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95r2Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95r2Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95K1Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95K1Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95K2Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95K2Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95l1Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95l1Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95l2Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95l2Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95S1Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95S1Objects2.length = 0;
gdjs.p_95finalCode.GDCarta_95S2Objects1.length = 0;
gdjs.p_95finalCode.GDCarta_95S2Objects2.length = 0;
gdjs.p_95finalCode.GDbloque1Objects1.length = 0;
gdjs.p_95finalCode.GDbloque1Objects2.length = 0;
gdjs.p_95finalCode.GDbloque2Objects1.length = 0;
gdjs.p_95finalCode.GDbloque2Objects2.length = 0;
gdjs.p_95finalCode.GDbloque3Objects1.length = 0;
gdjs.p_95finalCode.GDbloque3Objects2.length = 0;
gdjs.p_95finalCode.GDfondoObjects1.length = 0;
gdjs.p_95finalCode.GDfondoObjects2.length = 0;
gdjs.p_95finalCode.GDNivelObjects1.length = 0;
gdjs.p_95finalCode.GDNivelObjects2.length = 0;
gdjs.p_95finalCode.GDParejasObjects1.length = 0;
gdjs.p_95finalCode.GDParejasObjects2.length = 0;
gdjs.p_95finalCode.GDposicionObjects1.length = 0;
gdjs.p_95finalCode.GDposicionObjects2.length = 0;
gdjs.p_95finalCode.GDparticulasObjects1.length = 0;
gdjs.p_95finalCode.GDparticulasObjects2.length = 0;
gdjs.p_95finalCode.GDnivelObjects1.length = 0;
gdjs.p_95finalCode.GDnivelObjects2.length = 0;
gdjs.p_95finalCode.GDTitulo_95cargaObjects1.length = 0;
gdjs.p_95finalCode.GDTitulo_95cargaObjects2.length = 0;
gdjs.p_95finalCode.GDboton_95jugarObjects1.length = 0;
gdjs.p_95finalCode.GDboton_95jugarObjects2.length = 0;
gdjs.p_95finalCode.GDN1Objects1.length = 0;
gdjs.p_95finalCode.GDN1Objects2.length = 0;
gdjs.p_95finalCode.GDboton_95otravezObjects1.length = 0;
gdjs.p_95finalCode.GDboton_95otravezObjects2.length = 0;
gdjs.p_95finalCode.GDboton_95salirObjects1.length = 0;
gdjs.p_95finalCode.GDboton_95salirObjects2.length = 0;

gdjs.p_95finalCode.eventsList2(runtimeScene);
return;

}

gdjs['p_95finalCode'] = gdjs.p_95finalCode;
