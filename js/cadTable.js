// function AssignValues() {
//   sessionStorage.setItem("txtPredio", document.frmTrabalho.txtPredio.value);
//   sessionStorage.setItem("txtLocal", document.frmTrabalho.txtLocal.value);

//   console.log(sessionStorage);
// }

// *** Função teste ***

function AssignValues(predio, local) {
  var table = document.getElementById("tbTrabalho");
  var qtdlines = table.rows.length;
  var line = table.insertRow(qtdlines);

  var cellPredio = line.insertCell(0);
  var cellLocal = line.insertCell(1);

  cellPredio.innerHTML = predio;
  cellLocal.innerHTML = local;
}
