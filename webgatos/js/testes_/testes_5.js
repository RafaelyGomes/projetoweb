let data_hora = new Date ();
let dia_semana = data_hora.getDay();
switch (dia_semana) {
    case 0: alert("domingo de descanso merecido.");
        break;
    case 1: alert("dia de trabalhar.");
        break;
    case 2: alert("Calma ainda é terça.");
        break;
    case 3: alert("Estamos quase.");
        break;
    case 4: alert("não chegou ainda.");
        break;
    case 5: alert("chegou a sexta-feira,isso é legal!!!");
        break;
    case 6: alert("maravilha,sabado chegou");
       break;
       
    default: alert ("que semana longa.");
       break;   
}