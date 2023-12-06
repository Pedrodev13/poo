class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`${this.modelo} está acelerando...`);
    }

    frear() {
        console.log(`${this.modelo} está freando...`);
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, numPortas) {
        super(marca, modelo);
        this.numPortas = numPortas;
    }

    abrirPortas() {
        console.log(`${this.modelo} tem ${this.numPortas} portas abertas.`);
    }
}


class Moto extends Veiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    empinar() {
        console.log(`${this.modelo} está empinando a ${this.tipo}.`);
    }
}


const carro1 = new Carro('Toyota', 'Corolla', 4);
const moto1 = new Moto('Honda', 'cbr', 'esportiva');
const carro2 = new Carro('Ford', 'Focus', 5);


carro1.acelerar();
carro1.abrirPortas();

moto1.acelerar();
moto1.empinar();

carro2.frear();
carro2.abrirPortas();
