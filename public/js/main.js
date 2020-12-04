const submitBtn = document.getElementById("submitBtn");

const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

//preventDefault--> to prevent the page from restarting
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please Write The Name Before Search";
    } 
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=20acadc9898c37625fdc1221a5413a2b`;
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            //temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            //if condition to check sunny or cloudy
            if(tempMood == "Clear") {
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if(tempMood == "Clouds") {
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if(tempMood == "Rain") {
                temp_status.innerHTML = 
                    "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
        }catch{
            city_name.innerText = "Please Enter The City Name Properly";
        }
    }
}
// don't put parenthesis
submitBtn.addEventListener("click", getInfo);