//=============================
// 0. 초기 세팅
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
// 0. 화면 이동
//=============================
$("#footerButton_main").onclick = () => {
  $("#main_title").classList.remove("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_schedule").classList.add("hidden")
}
$("#footerButton_floor").onclick = () => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.remove("hidden")
    $("#floorMain").className = "floor1"
    $("#floorHeader").innerHTML = "서창도서관 1층"
  $("#main_schedule").classList.add("hidden")
}
  $("#floorButton_1").onclick = () => {
    $("#floorMain").className = "floor1"
    $("#floorHeader").innerHTML = "서창도서관 1층"
  }
  $("#floorButton_2").onclick = () => {$(
    "#floorMain").className = "floor2"
    $("#floorHeader").innerHTML = "서창도서관 2층"
  }
  $("#floorButton_3").onclick = () => {
    $("#floorMain").className = "floor3"
    $("#floorHeader").innerHTML = "서창도서관 3층"
  }
  $("#floorButton_4").onclick = () => {
    $("#floorMain").className = "floor4"
    $("#floorHeader").innerHTML = "서창도서관 4층"
  }
$("#footerButton_schedule").onclick = () => {
  $("#main_title").classList.add("hidden")
  $("#main_floor").classList.add("hidden")
  $("#main_schedule").classList.remove("hidden")
  
}