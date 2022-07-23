const ano = 2002;
const validador = (ano) => {return (ano < 2006?"Pode Votar ":"Não pode Votar ")}
console.log(validador(ano) + `idade atual ${2022 - ano}`);
