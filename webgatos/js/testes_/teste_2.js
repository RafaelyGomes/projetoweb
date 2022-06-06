<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>:::::testes js:::::</title>
</head>
<body>
    <script>
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
   </script>
</body>
</html>