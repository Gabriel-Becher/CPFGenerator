export default class ValidaCPF {
  constructor(cpfRecebido) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfRecebido.replace(/\D+/g, ""),
    });
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digi1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digi2 = ValidaCPF.geraDigito(cpfSemDigitos + digi1);
    this.novoCPF = cpfSemDigitos + digi1 + digi2;
  }

  static geraDigito(cpf) {
    let total = 0;
    let inverso = cpf.length + 1;

    for (let num of cpf) {
      total += inverso * Number(num);
      inverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.eSequencia()) return false;
    this.geraNovoCPF();
    return this.novoCPF === this.cpfLimpo;
  }
}
