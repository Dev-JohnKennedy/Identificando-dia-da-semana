let agora = new Date() // Variavel dia 
let dia_semana = agora.getDay() // Variavel .getDay tem outras opções...

console.log(dia_semana);

switch (dia_semana) {
    case 0:
        console.log('Domingo!');
        break;
    case 1:
        console.log('Segunda-feira!');
        break
    case 2:
        console.log('Terça-feira!');
        break
    case 3:
        console.log('Quarta-feira!');
        break
    case 4:
        console.log('Quinta-feira!');
        break
    case 5:
        console.log('Sexta-feira!');
        break
    case 6:
        console.log('Sábado!');
        break

    default:
        console.log('[ERRO] Dia invalido!');
        break;
}