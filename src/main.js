import dayjs from "dayjs"
const boton = document.getElementById("añadir");
boton.addEventListener("click", guardarPlan);
const input = document.getElementById("texto")
const lista = document.getElementById("lista")
const boton2 = document.getElementById("borrar")
boton2.addEventListener("click", function() {
    alert("Kill Yourself, NOW!!!")
})

function guardarPlan() {
    const fechahoy = dayjs().format("DD/MM/YYYY")
    const li = document.createElement("li")
    li.textContent = input.value + " - " + fechahoy
    lista.appendChild(li)
    input.value = ""
}





