dragElement(document.getElementById("1"));
dragElement(document.getElementById("2"));
dragElement(document.getElementById("3"));
dragElement(document.getElementById("4"));
dragElement(document.getElementById("5"));
dragElement(document.getElementById("6"));
dragElement(document.getElementById("7"));
dragElement(document.getElementById("8"));
dragElement(document.getElementById("9"));
dragElement(document.getElementById("10"));
dragElement(document.getElementById("11"));
dragElement(document.getElementById("12"));
dragElement(document.getElementById("13"));
dragElement(document.getElementById("14"));


function dragElement(terrariumElement) {
  let posicionUno = 0,
    posicionDos = 0,
    posicionTres = 0,
    posicionCuatro = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    posicionTres = e.clientX;
    posicionCuatro = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    posicionUno = posicionTres - e.clientX;
    posicionDos = posicionCuatro - e.clientY;
    posicionTres = e.clientX;
    posicionCuatro = e.clientY;
    // console.log(posicionUno, posicionDos, posicionTres, posicionCuatro);
    terrariumElement.style.top =
      terrariumElement.offsetTop - posicionDos + "px";
    terrariumElement.style.left =
      terrariumElement.offsetLeft - posicionUno + "px";
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
