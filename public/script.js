const enterButton = document.getElementById("enter");
const input = document.getElementById("inputText");
const tableSection = document.getElementById("table-section");
const table = document.getElementById("table");
const tbody = document.getElementById("body-table");
const message = document.getElementById("message");
var valores = null;

enterButton.addEventListener("click", (event) => {
  getresults(
    `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
  );
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  removeAllChildNodes(tbody);
  const resp = await fetch(`${heightRef}`);
  console.log(resp);
  const data = await resp.json();
  console.log("data from back", data);
  var todo = "";
  var count = 1;
  var arr = [];
  console.log(input.value);
  data.values.forEach((dato) => {
    data.values.forEach((dato2) => {
      if (
        dato != dato2 &&
        parseInt(dato.h_in) + parseInt(dato2.h_in) == input.value &&
        !arr.includes(dato.first_name + dato.last_name) &&
        !arr.includes(dato2.first_name + dato2.last_name)
      ) {
        console.log("pasa1");
        var tabla = document.createElement(`tr`);
        console.log("pasa");
        todo = `<td>${count}</td>
        <td>${dato.first_name} ${dato.last_name}</td>
        <td>${dato2.first_name} ${dato2.last_name}</td>`;
        count++;
        console.log(todo);
        tabla.innerHTML = todo;
        tbody.appendChild(tabla);
        arr.push(dato.first_name + dato.last_name);
      }
    });
  });
  console.log("finaliza");
  valores = data.values;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
