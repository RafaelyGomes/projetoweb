let data_hora = new Date();
let hora = data_hora.getHours();
let previsao_tempo ="chuvoso"

if (hora < 12){
    console.log ("bom dia...");
    if (previsao_tempo=="chuvoso")
    {
    console.log("esta chovendo,leve o guarda chuva")
    }
}
else {
    if(hora >=12 && hora < 18)
    {
        console.log("Boa tarde...");
    }
    else{
        console.log("boa noite...");
        if (previsao_tempo=="chuvoso")
    {
    console.log("esta chovendo,leve o guarda chuva")
    }
    }
}