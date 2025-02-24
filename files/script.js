//=============================
// 초기 세팅
//=============================
//함수 : DOM 선택자
function $(parameter, startNode) {
  if (!startNode) return document.querySelector(parameter)
  else return startNode.querySelector(parameter)
}
function $$(parameter, startNode) {
  if (!startNode) return document.querySelectorAll(parameter)
  else return startNode.querySelectorAll(parameter)
}




//=============================
// 버튼 상호작용
//=============================
$("#footerButton_main").onclick = () => {
  $("#main_title").classList.remove("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_info").classList.add("hidden")
  $("#main_schedule").classList.add("hidden")
}
$("#footerButton_floor").onclick = () => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.remove("hidden")
    $("#floorMain").className = "floor1"
    $("#floorHeader").innerHTML = "서창도서관 1층 안내도"
  $("#main_info").classList.add("hidden")
  $("#main_schedule").classList.add("hidden")
  goBack()
}

  $("#floorButton_1").onclick = () => {
    $("#floorMain").className = "floor1"
    $("#floorHeader").innerHTML = "서창도서관 1층 안내도"
    goBack()
  }
  $("#floorButton_2").onclick = () => {$(
    "#floorMain").className = "floor2"
    $("#floorHeader").innerHTML = "서창도서관 2층 안내도"
    goBack()
  }
  $("#floorButton_3").onclick = () => {
    $("#floorMain").className = "floor3"
    $("#floorHeader").innerHTML = "서창도서관 3층 안내도"
    goBack()
  }
  $("#floorButton_4").onclick = () => {
    $("#floorMain").className = "floor4"
    $("#floorHeader").innerHTML = "서창도서관 4층 안내도"
    goBack()
  }

$("#footerButton_info").onclick = () => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_info").classList.remove("hidden")
    $("#infoMain").className = "info1"
    $("#infoHeader").innerHTML = "서창도서관 자료실 안내"
  $("#main_schedule").classList.add("hidden")
  goBack()
}

  $("#infoButton_1").onclick = () => {
    $("#infoMain").className = "info1"
    $("#infoHeader").innerHTML = "서창도서관 자료실 안내"
    goBack()
  }
  $("#infoButton_2").onclick = () => {$(
    "#infoMain").className = "info2"
    $("#infoHeader").innerHTML = "서창도서관 회원가입 및 대출 안내"
    goBack()
  }
  $("#infoButton_3").onclick = () => {
    $("#infoMain").className = "info3"
    $("#infoHeader").innerHTML = "서창도서관 상호대차 및 책바다 안내"
    goBack()
  }
  $("#infoButton_4").onclick = () => {
    $("#infoMain").className = "info4"
    $("#infoHeader").innerHTML = "서창도서관 도서기증 안내"
    goBack()
  }


$("#footerButton_schedule").onclick = () => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_info").classList.add("hidden")
  $("#main_schedule").classList.remove("hidden")
  goBack()
}


//=============================
// 날짜 및 시간 표시
//=============================
function checkTime(i) {
  if (i < 10) {
      i = "0" + i
  }
  return i.toString()
}
function startTime() {
  let today = new Date()
  let yymmdd = today.getFullYear().toString() + "년 " + (today.getMonth()+1).toString() + "월 " + today.getDate().toString() + "일 "
  let h = today.getHours()
  var m = checkTime(today.getMinutes())
  let s = today.getSeconds()
  // add a zero in front of numbers<10
  if (h === 0) {
      h = "오전 12"
  } else if (h < 12) {
      h = "오전 " + h.toString()
  } else if (h === 12 ) {
      h = "오후 12"
  } else {
      h = "오후 " + (h-12).toString()
  }
  if (s % 2 === 1) {
      $('#titleHeader').innerHTML = yymmdd + h + "<span style=\"font-weight:bold;padding:0 0.3vh;color:#303030;\">:</span>" + m
  } else {
      $('#titleHeader').innerHTML = yymmdd + h + "<span style=\"font-weight:bold;padding:0 0.3vh;\">:</span>" + m
  }
  t = setTimeout(function () {
      startTime()
  }, 500)
}
document.addEventListener('DOMContentLoaded', async function () {
  //시계 표시
  startTime()
})



//=============================
// 화면 이동 후 1분 뒤에 복귀
//=============================
var goBackTimer
function goBack() {
  clearTimeout(goBackTimer)
  goBackTimer = setTimeout(() => {
    $("#main_title").classList.remove("hidden")
    $("#main_floor").classList.add("hidden")
    $("#main_info").classList.add("hidden")
    $("#main_schedule").classList.add("hidden")
  }, 60000)
}