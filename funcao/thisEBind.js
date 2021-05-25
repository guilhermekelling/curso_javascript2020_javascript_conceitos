const pessoa = {
    saudacao : 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradimas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


// Exemplo 2
function Pessoa() {
    this.idade = 0

    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa

