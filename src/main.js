import './style.css';
import confetti from 'canvas-confetti';
import { determinartiempo } from './utils';
import { describe, it, expect } from 'vitest';
import { formatearfecha } from './utils';
const boton = document.getElementById('añadir');
boton.addEventListener('click', guardarPlan);
const input = document.getElementById('texto');
const tiempo = document.getElementById('tiempo');
const lista = document.getElementById('lista');
const boton2 = document.getElementById('borrar');
boton2.addEventListener('click', function () {
  alert('Kill Yourself, NOW!!!');
});

function guardarPlan() {
  if (!tiempo) return;
  if (!input) return;
  const pi = 3.14;
  const fechahoy = formatearfecha(new Date());
  const ttiempo = determinartiempo(tiempo.value);
  const li = document.createElement('li');
  li.textContent =
    input.value + ' / ' + tiempo.value + ' ' + ttiempo + ' - ' + fechahoy;
  lista.appendChild(li);
  input.value = '';
  tiempo.value = '';
  confetti();
  console.log(tiempo.value);
}
