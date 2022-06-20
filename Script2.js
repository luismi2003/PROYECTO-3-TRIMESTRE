// Contadores
let i = 0;
let o = 1;

// Carga las preguntas mediante AJAX
function cargaPregunta() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, i);
      i++;
    }
  };
  http.open("GET", "Pregcoches.xml", true);
  http.send();
}

// Carga las preguntas y los contadores
function cargaPreguntar() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, i);
      i++;
      o++;
    }
  };
  http.open("GET", "Pregcoches.xml", true);
  http.send();
}

// Zona de preguntas
function myFunction2(xml, i) {
  var xmlDoc = xml.responseXML;
  var y = xmlDoc.getElementsByTagName("question");
  qq = y[i].getElementsByTagName("wording")[0].childNodes[0].nodeValue;

  rr1 =
    y[i].getElementsByTagName("choices")[0].childNodes[1].childNodes[0]
      .nodeValue;
  rr2 =
    y[i].getElementsByTagName("choices")[0].childNodes[3].childNodes[0]
      .nodeValue;
  rr3 =
    y[i].getElementsByTagName("choices")[0].childNodes[5].childNodes[0]
      .nodeValue;
  rr4 =
    y[i].getElementsByTagName("choices")[0].childNodes[7].childNodes[0]
      .nodeValue;

  res = document.getElementById("numero").innerHTML = "Pregunta nº: " + (i + 1);
  punt = document.getElementById("puntuacion").innerHTML = "Puntuación: " + o;

  document.getElementById("pregunta").innerHTML = qq;
  document.getElementById("btn1").innerHTML = rr1;
  document.getElementById("btn2").innerHTML = rr2;
  document.getElementById("btn3").innerHTML = rr3;
  document.getElementById("btn4").innerHTML = rr4;
}

// Tiempo
window.onload = updateClock;
var totalTime = 60;
function updateClock() {
  document.getElementById("tiempo").innerHTML = totalTime;
  if (totalTime == 0) {
    alert("Has perdido");
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}
function reinicio() {
  location.reload();
}