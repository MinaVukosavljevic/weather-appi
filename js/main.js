function getWeather(city=false) {
    if (city !== false) {
        var request = new XMLHttpRequest();
        
        request.onload = function() {


            var response = JSON.parse(request.response);
            console.log(request.response);
            console.log(response);

            let temp = Math.round(response.main.temp);
            if (temp<-10){
                document.body.style.backgroundColor = "#fff";
            }
            else if(temp<0 && temp>-11){
                document.body.style.backgroundColor = "#82BEE1";
            }
            else if(temp>-1 && temp<10){
                document.body.style.backgroundColor = "F2ED6F";
            }
            else if(temp>9 && temp<20){
                document.body.style.backgroundColor = "#F9F57F";
            }
            else if(temp>19 && temp<30){
                document.body.style.backgroundColor = "#FAA13C";
            }
            else if(temp>29){
                document.body.style.backgroundColor = "#f00";
            }
            document.querySelector('div.stats span.temperature').innerHTML = temp;
            document.querySelector('div.humidity span').innerHTML = Math.round(response.main.humidity);
            document.querySelector('div.pressure span').innerHTML = Math.round(response.main.pressure);
            
            document.querySelector('.spinner').style.display = 'none';
            document.querySelector('.humidity').style.display = 'inline-block';
            document.querySelector('.pressure').style.display = 'inline-block';
            var hidden = document.querySelectorAll('.hidden');
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.display = 'inline-block';
            }


        }
        
        request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=57dbd56603443fed04dfc54f9fe1808b');
        request.send();
    }
}

window.onload = function() {
    getWeather();
}


document.querySelector('input').onkeypress = function(event) {
    document.querySelector('.spinner').style.display='inline-block'
    if (event.key === "Enter") {
        var city = document.querySelector('input').value;
        
        
        getWeather(city);
    }
}