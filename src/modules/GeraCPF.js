import ValidaCPF from "./ValidaCPF.js";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  geraNovoCPF() {
    const inicio = this.rand();
    const digi1 = ValidaCPF.geraDigito(inicio);
    const digi2 = ValidaCPF.geraDigito(inicio + digi1);
    this.novoCPF = inicio + digi1 + digi2;
  }

  formatar() {
    this.geraNovoCPF();
    return (
      this.novoCPF.slice(0, 3) +
      "." +
      this.novoCPF.slice(3, 6) +
      "." +
      this.novoCPF.slice(6, 9) +
      "-" +
      this.novoCPF.slice(-2)
    );
  }
}
