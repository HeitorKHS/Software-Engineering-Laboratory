class Carro
{
    constructor(marca, modelo, ano, cor, kilometragem, valor_fipe)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kilometragem = kilometragem;
        this.valor_fipe = valor_fipe;
    }

    anosUtilizacao()
    {
        let data = new Date();
        return data.getFullYear() - this.ano;
    }

    valorMercado()
    {
        const anos = this.anosUtilizacao();
        const kilometragemAno = this.kilometragem/anos;

        if(kilometragemAno < 30000) return this.valor_fipe*1.1;
        else if(kilometragemAno >= 30000 && kilometragemAno <= 50000) return this.valor_fipe;
        else if(kilometragemAno > 50000) return this.valor_fipe*0.9;
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => 
{
    event.preventDefault();
    const carro = new Carro
    (
        document.getElementById("marca").value,
        document.getElementById("modelo").value,
        document.getElementById("ano").value,
        document.getElementById("cor").value,
        document.getElementById("kilometragem").value,
        document.getElementById("valor_fipe").value
    );

    console.log(carro.anosUtilizacao());
    console.log(carro.valorMercado());

});
