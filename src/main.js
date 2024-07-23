import "./assets/css/style.css";
import GeraCPF from "./modules/GeraCPF.js";
import ValidaCPF from "./modules/ValidaCPF.js";
const btn = document.querySelector("button");
const cpfGerado = document.querySelector(".cpf-gerado");

btn.addEventListener("click", (event) => {
  const gerador = new GeraCPF();
  cpfGerado.innerHTML = gerador.formatar();
});
