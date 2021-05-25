const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixa1 = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixa1.push(notas[i])
    }
}
console.log(notasBaixa1)

// Com callback
notasBaixa2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixa2)

// Com callback
const notasMenorQue7 = nota => nota < 7
const notasBaixa3 = notas.filter(notasMenorQue7)
console.log(notasBaixa2)