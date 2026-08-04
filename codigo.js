function mostrar() {
  let sumaDias = 0;
  let edad = 0;
  let edadEnDias = 0;
  let ndia = 0;
  let nmes = 0;
  let diferenciaAnoPasado = 0;
  let fdia = 0;
  let fmes = 0;
  let diferenciaAnoActual = 0;

  //bienvendia
  alert("Sacrificial Suicide 💀🤙. Castill0.666. Derechos Reservados. @2023.");

  //inputs
  function preguntar(mensaje, entero) {
    const valor = prompt(mensaje);
    if (valor === null) return null;
    return entero ? parseInt(valor) : valor.toLowerCase();
  }

  do {
    ndia = preguntar("Ingresá tu día de nacimiento, del 1 al 31 👼🏾", true);
    if (ndia === null) return;
  } while (ndia < 1 || ndia > 31 || isNaN(ndia));

  do {
    nmes = preguntar("Ingresá tu mes de nacimiento, del 1 al 12 👼🏽", true);
    if (nmes === null) return;
  } while (nmes < 1 || nmes > 12 || isNaN(nmes));

  do {
    edad = preguntar("Ingresá tu edad 😃", true);
    if (edad === null) return;
  } while (edad < 0 || edad > 100 || isNaN(edad));

  do {
    bandera = preguntar("Los ha cumplido este año? s/n 😜");
    if (bandera === null) return;
  } while (bandera != "s" && bandera != "n");

  do {
    fmes = preguntar("Ingresá el mes actual, del 1 al 12 ✡️", true);
    if (fmes === null) return;
  } while (fmes < 1 || fmes > 12 || isNaN(fmes));

  do {
    fdia = preguntar("Ingresá el dia actual, del 1 al 31 ☀️", true);
    if (fdia === null) return;
  } while (fdia < 1 || fdia > 31 || isNaN(fdia));

  //procesamientos
  if (bandera == "s") {
    diferenciaAnoActual = 30 - ndia + (fmes - nmes - 1) * 30 + fdia;
  } else {
    diferenciaAnoPasado = 30 - ndia + (12 - nmes) * 30;
    diferenciaAnoActual = fdia + (fmes - 1) * 30;
  }

  //outputs
  edadEnDias = edad * 365.24189;
  edadEnDias = Math.floor(edadEnDias);
  sumaDias = edadEnDias + diferenciaAnoActual + diferenciaAnoPasado;
  alert("Tenés " + sumaDias + " dias en la tierra 🚀✍️");
}
