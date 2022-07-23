function novoSalario(anos, salario){
    if(anos <= 3){
        return salario + (salario * 0.03);
    }else if(anos > 3 && anos < 10){
        return salario + (salario * 0.125);
    }else{
        return salario + (salario * 0.2);
    }
}

const nome = "Sanks"
const anos = 10;
const salario = 1000;

console.log(`${nome} trabalhou ${anos} anos e seu novo salario será de ${novoSalario(anos, salario)}`);