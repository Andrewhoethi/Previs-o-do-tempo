const key ="e0283766cee7e7e70be7e75409ae8042"

function sla(){
let cidade = document.querySelector(".input-cidade").value
console.log(cidade);
dadoss(cidade);
}

async function dadoss(cidade){
let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
console.log(dados);
tela(dados);
}

function tela(dados){
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone-de-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umi").innerHTML = "umidade" + dados.main.humidity + " %"  
}