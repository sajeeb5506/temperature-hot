const API_KEY = `9346fa9b2885e222a7d8994bd1d12313`;
const serchtem = ()=>{
   
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

fetch(url)
.then(res=>res.json())
.then(data=>displayTem(data));
document.getElementById('city-name').value="";
}
const setInnerText = (id,text)=>{
document.getElementById(id).innerText=text;

}


const displayTem = temp=>{
   
    setInnerText('city',temp.name);
    setInnerText('temperature',temp.main.temp);
    setInnerText('weather-condition',temp.weather[0].main);
// set weather icone
    const url = ` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url); 

}