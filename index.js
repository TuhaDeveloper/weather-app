

const temperature = document.querySelector('.temperature')

const getData = (city) => {
    cityName.innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '610bd5936cmshf8316fc8881f7a5p149815jsn6b4e699e7a73',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const img1 = 'https://wallpapercave.com/wp/DNucn03.jpg'
    const img2 = 'https://th.bing.com/th/id/R.7b50e28f8d901126b54b93b582e884ce?rik=%2brM1Dcl0gqNS0A&riu=http%3a%2f%2fwallpapercave.com%2fwp%2foWfnrb6.jpg&ehk=tP5TZKIG%2bXtClR67FXAOQyfEtA0yGWbq1vHJS5rHbc8%3d&risl=&pid=ImgRaw&r=0'
    const img4 = 'https://th.bing.com/th/id/R.0ee50f0dd71d032e20385e495ec4c496?rik=2MkHDVUwpNSLPg&pid=ImgRaw&r=0'
    const img3 = 'https://th.bing.com/th/id/R.af0eb9868a66b3a1a109809be7eec026?rik=Qw4rAZiItQWklw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f8%2f8%2f1199812-winter-wallpaper-desktop-wallpapers-3840x2160-full-hd.jpg&ehk=Y0uFkO9sBWGFUhMuQNavsULt%2fLIV8QFFlAzQ67a1Z5U%3d&risl=&pid=ImgRaw&r=0'

    fetch(url, options)
        .then(res => res.json())
        .then(res => {

            cloud.innerHTML = res.cloud_pct

            feelLike.innerHTML = res.feels_like

            humidity.innerHTML = res.humidity

            humidity2.innerHTML = res.humidity

            max_temp.innerHTML = res.max_temp

            min_temp.innerHTML = res.min_temp

            sunrise.innerHTML = res.sunrise

            sunset.innerHTML = res.sunset

            temp.innerHTML = res.temp

            wind_degrees.innerHTML = res.wind_degrees

            wind_speed.innerHTML = res.wind_speed

            wind_speed2.innerHTML = res.wind_speed

            if (res.temp > 25) {
                body.style.backgroundImage = `url('${img2}')`;

            } else if (res.temp >= 20) {
                body.style.backgroundImage = `url('${img1}')`;

            } else if (res.temp > 10) {
                body.style.backgroundImage = `url('${img3}')`;

            }
            else if (res.temp > -50) {
                body.style.backgroundImage = `url('${img4}')`;

            }

        })

        .catch((err) => {
            console.log(err)
        })


}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    getData(city.value)
})



getData('Dhaka')

