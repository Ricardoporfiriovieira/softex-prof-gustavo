function comparadorNumero(num1, num2){
    if(num1 > num2){
        return "O primeiro valor é maior"
    }else if(num2 > num1){
        return "O segundo valor é maior"
    }else{
        return "Não existe valor maior, os dois valores são iguais"
    }
};

console.log(comparadorNumero(1, 1));