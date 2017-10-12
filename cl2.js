-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;

@page {
	margin: 0cm;
}



g_arVars[имя переменной] //доступ к переменной CL

CL.axSlides[0].id //получение идентификатора слайда по его номеру, где 0- первый слайд, 1- второй и т.д.

CLZ.sCurrentSlideId //id текущего слайда

CLZ.aVisited //просмотренные слайды

CLO.OBJ_13 //объект курса

//вызов функции перехода на следующий слайд
<button onclick="gNext()" type="button">Следующий слайд
</button>
//вызов функции перехода на следующий слайд
<script>
  function gNext(){
    return CL.Navigation.GoTo({ sTargetType: "slide", sTargetDir: "next" });
  }
</script>



//вызов функции перехода на заданный слайд
<span style="font-size:28px;">
  <button onclick="gSlide('SLIDE_10')" type="button">Вызов
  </button></span>
<script>
//функция перехода на заданный слайд
  function gSlide(x){
    window.PMsoft = CLZ.sCurrentSlideId;
    return CL.Navigation.GoTo({ sTargetType: "slide", sTargetId: x });
  }
</script>

//вызов функции возврата на предыдущий слайд
<span style="font-size:28px;">
  <button onclick="gBack()" type="button">Назад
  </button></span>
//функция возврата на предыдущий слайд
<script>
  function gBack(){
    return CL.Navigation.GoTo({ sTargetType: "slide", sTargetId: window.PMsoft });
  }
</script>


if(!!g_arVars.pmTest || g_arVars.pmTest===0 )
  g_arVars.pmTest+=1;
else
  g_arVars.pmTest=0;

///////////////////////////////////////////////////////////пока не смотреть


//скинуть время для объекта 27(тест)
CLZ.oStore.OBJ_27.e = 0;

///

//правильный ответ на iтый вопрос
CLZ.oStore.OBJ_27.Q[i].P

///оценка total

CLJ.total.nRawScore

////

CL.Event.Fire({ aEvents:
[
  { bRT: true, sEvtName: "EVENT_STABLE_STATE_CHANGED", sSourceId: CLO.OBJ_13.sId },
  { sEvtName: "onChangeStableState", sSourceType: "OBJECT", sSourceId: CLO.OBJ_13.sId }
]});

CL.Event.Fire({ aEvents:
[
  { bRT: true, sEvtName: "EVENT_OBJECT_SHOW", sSourceId: CLO.OBJ_13.sId },
  { sEvtName: "ondisplay", sSourceType: "OBJECT", sSourceId: CLO.OBJ_13.sId },
  { sEvtName: "ondisplaytransitionend", sSourceType: "OBJECT", sSourceId: CLO.OBJ_13.sId },
  { bRT: true, sEvtName: "EVENT_DISPLAY_STATE_CHANGED", sSourceId: CLO.OBJ_13.sId }
]});
