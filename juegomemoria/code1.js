gdjs.p_95nivel1Code = {};
gdjs.p_95nivel1Code.GDpersonajeObjects1= [];
gdjs.p_95nivel1Code.GDpersonajeObjects2= [];
gdjs.p_95nivel1Code.GDCarta_95R1Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95R1Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95R2Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95R2Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95L1Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95L1Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95L2Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95L2Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95r1Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95r1Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95r2Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95r2Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95K1Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95K1Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95K2Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95K2Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95l1Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95l1Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95l2Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95l2Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95S1Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95S1Objects2= [];
gdjs.p_95nivel1Code.GDCarta_95S2Objects1= [];
gdjs.p_95nivel1Code.GDCarta_95S2Objects2= [];
gdjs.p_95nivel1Code.GDbloque1Objects1= [];
gdjs.p_95nivel1Code.GDbloque1Objects2= [];
gdjs.p_95nivel1Code.GDbloque2Objects1= [];
gdjs.p_95nivel1Code.GDbloque2Objects2= [];
gdjs.p_95nivel1Code.GDbloque3Objects1= [];
gdjs.p_95nivel1Code.GDbloque3Objects2= [];
gdjs.p_95nivel1Code.GDfondoObjects1= [];
gdjs.p_95nivel1Code.GDfondoObjects2= [];
gdjs.p_95nivel1Code.GDNivelObjects1= [];
gdjs.p_95nivel1Code.GDNivelObjects2= [];
gdjs.p_95nivel1Code.GDParejasObjects1= [];
gdjs.p_95nivel1Code.GDParejasObjects2= [];
gdjs.p_95nivel1Code.GDposicionObjects1= [];
gdjs.p_95nivel1Code.GDposicionObjects2= [];
gdjs.p_95nivel1Code.GDparticulasObjects1= [];
gdjs.p_95nivel1Code.GDparticulasObjects2= [];
gdjs.p_95nivel1Code.GDnivelObjects1= [];
gdjs.p_95nivel1Code.GDnivelObjects2= [];
gdjs.p_95nivel1Code.GDTitulo_95cargaObjects1= [];
gdjs.p_95nivel1Code.GDTitulo_95cargaObjects2= [];
gdjs.p_95nivel1Code.GDboton_95jugarObjects1= [];
gdjs.p_95nivel1Code.GDboton_95jugarObjects2= [];
gdjs.p_95nivel1Code.GDN1Objects1= [];
gdjs.p_95nivel1Code.GDN1Objects2= [];

gdjs.p_95nivel1Code.conditionTrue_0 = {val:false};
gdjs.p_95nivel1Code.condition0IsTrue_0 = {val:false};
gdjs.p_95nivel1Code.condition1IsTrue_0 = {val:false};


gdjs.p_95nivel1Code.eventsList0 = function(runtimeScene) {

{


gdjs.p_95nivel1Code.condition0IsTrue_0.val = false;
{
gdjs.p_95nivel1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.p_95nivel1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("personaje"), gdjs.p_95nivel1Code.GDpersonajeObjects1);
{for(var i = 0, len = gdjs.p_95nivel1Code.GDpersonajeObjects1.length ;i < len;++i) {
    gdjs.p_95nivel1Code.GDpersonajeObjects1[i].setAnimationName("correcto");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sonidos\\nivel1.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "nivel1");
}}

}


};gdjs.p_95nivel1Code.eventsList1 = function(runtimeScene) {

{


gdjs.p_95nivel1Code.condition0IsTrue_0.val = false;
{
gdjs.p_95nivel1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nivel1") >= 1.2;
}if (gdjs.p_95nivel1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel 1", false);
}}

}


};gdjs.p_95nivel1Code.eventsList2 = function(runtimeScene) {

{


gdjs.p_95nivel1Code.eventsList0(runtimeScene);
}


{


gdjs.p_95nivel1Code.eventsList1(runtimeScene);
}


};

gdjs.p_95nivel1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.p_95nivel1Code.GDpersonajeObjects1.length = 0;
gdjs.p_95nivel1Code.GDpersonajeObjects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95R1Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95R1Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95R2Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95R2Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95L1Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95L1Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95L2Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95L2Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95r1Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95r1Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95r2Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95r2Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95K1Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95K1Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95K2Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95K2Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95l1Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95l1Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95l2Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95l2Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95S1Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95S1Objects2.length = 0;
gdjs.p_95nivel1Code.GDCarta_95S2Objects1.length = 0;
gdjs.p_95nivel1Code.GDCarta_95S2Objects2.length = 0;
gdjs.p_95nivel1Code.GDbloque1Objects1.length = 0;
gdjs.p_95nivel1Code.GDbloque1Objects2.length = 0;
gdjs.p_95nivel1Code.GDbloque2Objects1.length = 0;
gdjs.p_95nivel1Code.GDbloque2Objects2.length = 0;
gdjs.p_95nivel1Code.GDbloque3Objects1.length = 0;
gdjs.p_95nivel1Code.GDbloque3Objects2.length = 0;
gdjs.p_95nivel1Code.GDfondoObjects1.length = 0;
gdjs.p_95nivel1Code.GDfondoObjects2.length = 0;
gdjs.p_95nivel1Code.GDNivelObjects1.length = 0;
gdjs.p_95nivel1Code.GDNivelObjects2.length = 0;
gdjs.p_95nivel1Code.GDParejasObjects1.length = 0;
gdjs.p_95nivel1Code.GDParejasObjects2.length = 0;
gdjs.p_95nivel1Code.GDposicionObjects1.length = 0;
gdjs.p_95nivel1Code.GDposicionObjects2.length = 0;
gdjs.p_95nivel1Code.GDparticulasObjects1.length = 0;
gdjs.p_95nivel1Code.GDparticulasObjects2.length = 0;
gdjs.p_95nivel1Code.GDnivelObjects1.length = 0;
gdjs.p_95nivel1Code.GDnivelObjects2.length = 0;
gdjs.p_95nivel1Code.GDTitulo_95cargaObjects1.length = 0;
gdjs.p_95nivel1Code.GDTitulo_95cargaObjects2.length = 0;
gdjs.p_95nivel1Code.GDboton_95jugarObjects1.length = 0;
gdjs.p_95nivel1Code.GDboton_95jugarObjects2.length = 0;
gdjs.p_95nivel1Code.GDN1Objects1.length = 0;
gdjs.p_95nivel1Code.GDN1Objects2.length = 0;

gdjs.p_95nivel1Code.eventsList2(runtimeScene);
return;

}

gdjs['p_95nivel1Code'] = gdjs.p_95nivel1Code;
