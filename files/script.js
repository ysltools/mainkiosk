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
$("#footerButton_main").onclick = async (e) => {
  $("#main_title").classList.remove("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_info").classList.add("hidden")
  $("#main_schedule").classList.add("hidden")
  $("#footerButton_floor").classList.remove("active")
  $("#footerButton_info").classList.remove("active")
  goNext(e.srcElement.id)
}
$("#footerButton_floor").onclick = async (e) => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.remove("hidden")
  $("#main_info").classList.add("hidden")
  $("#main_schedule").classList.add("hidden")
    $("#floorMain").className = "floor1"
    $("#floorHeader").innerHTML = "서창도서관 1층 안내도"
  $("#footerButton_floor").classList.add("active")
  $("#footerButton_info").classList.remove("active")
  $("#floorButton_1").focus()
  goNext(e.srcElement.id)
}

  $("#floorButton_1").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.remove("hidden")
    $("#main_info").classList.add("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#floorMain").className = "floor1"
      $("#floorHeader").innerHTML = "서창도서관 1층 안내도"
    $("#footerButton_floor").classList.add("active")
    $("#footerButton_info").classList.remove("active")
    goNext(e.srcElement.id)
  }
  $("#floorButton_2").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.remove("hidden")
    $("#main_info").classList.add("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#floorMain").className = "floor2"
      $("#floorHeader").innerHTML = "서창도서관 2층 안내도"
    $("#footerButton_floor").classList.add("active")
    $("#footerButton_info").classList.remove("active")
    goNext(e.srcElement.id)
  }
  $("#floorButton_3").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.remove("hidden")
    $("#main_info").classList.add("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#floorMain").className = "floor3"
      $("#floorHeader").innerHTML = "서창도서관 3층 안내도"
    $("#footerButton_floor").classList.add("active")
    $("#footerButton_info").classList.remove("active")
    goNext(e.srcElement.id)
  }
  $("#floorButton_4").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.remove("hidden")
    $("#main_info").classList.add("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#floorMain").className = "floor4"
      $("#floorHeader").innerHTML = "서창도서관 4층 안내도"
    $("#footerButton_floor").classList.add("active")
    $("#footerButton_info").classList.remove("active")
    goNext(e.srcElement.id)
  }

$("#footerButton_info").onclick = async (e) => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_info").classList.remove("hidden")
  $("#main_schedule").classList.add("hidden")
    $("#infoMain").className = "info1"
    $("#infoHeader").innerHTML = "서창도서관 자료실 안내"
  $("#footerButton_floor").classList.remove("active")
  $("#footerButton_info").classList.add("active")
  $("#infoButton_1").focus()
  goNext(e.srcElement.id)
}

  $("#infoButton_1").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.add("hidden")
    $("#main_info").classList.remove("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#infoMain").className = "info1"
      $("#infoHeader").innerHTML = "서창도서관 자료실 안내"
    $("#footerButton_floor").classList.remove("active")
    $("#footerButton_info").classList.add("active")
    goNext(e.srcElement.id)
  }
  $("#infoButton_2").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.add("hidden")
    $("#main_info").classList.remove("hidden")
    $("#main_schedule").classList.add("hidden")
    $("#infoMain").className = "info2"
      $("#infoHeader").innerHTML = "서창도서관 회원가입 및 대출 안내"
    $("#footerButton_floor").classList.remove("active")
    $("#footerButton_info").classList.add("active")
    goNext(e.srcElement.id)
  }
  $("#infoButton_3").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.add("hidden")
    $("#main_info").classList.remove("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#infoMain").className = "info3"
      $("#infoHeader").innerHTML = "서창도서관 상호대차 및 책바다 안내"
    $("#footerButton_floor").classList.remove("active")
    $("#footerButton_info").classList.add("active")
    goNext(e.srcElement.id)
  }
  $("#infoButton_4").onclick = async (e) => {
    $("#main_title").classList.add("hidden")
    $("#main_floor").classList.add("hidden")
    $("#main_info").classList.remove("hidden")
    $("#main_schedule").classList.add("hidden")
      $("#infoMain").className = "info4"
      $("#infoHeader").innerHTML = "서창도서관 도서기증 안내"
    $("#footerButton_floor").classList.remove("active")
    $("#footerButton_info").classList.add("active")
    goNext(e.srcElement.id)
  }


$("#footerButton_schedule").onclick = async (e) => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_info").classList.add("hidden")
  $("#main_schedule").classList.remove("hidden")
  $("#footerButton_floor").classList.remove("active")
  $("#footerButton_info").classList.remove("active")
  goNext(e.srcElement.id)
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
  let weekArr = ["일","월","화","수","목","금","토"]
  let today = new Date()
  let mmdd = (today.getMonth()+1).toString() + "월 " + today.getDate().toString() + "일(" + weekArr[today.getDay()] + ")"
  $('#time').innerHTML = mmdd
  /*
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
      $('#time').innerHTML = mmdd + h + "<span style=\"font-weight:bold;padding:0 0.3vh;color:#303030;\">:</span>" + m
  } else {
      $('#time').innerHTML = mmdd + h + "<span style=\"font-weight:bold;padding:0 0.3vh;\">:</span>" + m
  }
  t = setTimeout(function () {
      startTime()
  }, 500)
  */
}

//=============================
// 화면 이동 후 1분 뒤에 복귀
//=============================
var goNextTimer
let buttonList = [
  "footerButton_main",
  "floorButton_1","floorButton_2","floorButton_3","floorButton_4",
  "infoButton_1","infoButton_2","infoButton_3","infoButton_4",
  "footerButton_schedule"
]
function goNext(id) {
  clearTimeout(goNextTimer)
  goNextTimer = setTimeout(async () => {
    let targetElement = $("#" + buttonList[(buttonList.indexOf(id) + 1) % buttonList.length])
    await targetElement.click()
    targetElement.focus()
  }, 60000)
}

//=============================
// 페이지 로드 시
//=============================
document.addEventListener('DOMContentLoaded', async function () {
  //시계 표시
  startTime()
  //자동 이동 개시
  $("#footerButton_main").focus()
  goNext("footerButton_main")
})

//=============================
// 페이지 새로고침(오류 발생 대비)
//=============================
$('#refresh').onclick = function() {
  location.reload()
}