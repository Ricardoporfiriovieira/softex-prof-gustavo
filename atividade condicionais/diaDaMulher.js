const nome = "bruna";
const sexo =  "F";
let valorCompras = 16000;
let desconto = (valorCompras) => {return (sexo === "F"?valorCompras - (valorCompras*0.13):valorCompras - (valorCompras*0.05))}
console.log(desconto(valorCompras));


