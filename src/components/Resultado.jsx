import useClima from "../hooks/useClima"


const Resultado = () => {
    const { resultado } = useClima()
    const { name, main, weather } = resultado

    //Grados Kelvin
    const kelvin = 273.15

    //Iconos weather map

    // const iconMappings = {

    //     '01d': 'clear-day.svg',
    //     '01n': 'clear-night.svg',
    //     '02d': 'partly-cloudy-day.svg',
    //     '02n': 'partly-cloudy-night.svg',
    //     '03d': 'cloudy.svg',
    //     '03n': 'cloudy.svg',
    //     '04d': 'cloudy.svg',
    //     '04n': 'cloudy.svg',
    //     '09d': 'partly-cloudy-day-rain.svg',
    //     '09n': 'partly-cloudy-night-rain.svg',
    //     '10d': 'partly-cloudy-day-rain.svg',
    //     '10n': 'partly-cloudy-night-rain.svg',
    //     '11d': 'thunderstorms-day.svg',
    //     '11n': 'thunderstorms-night.svg',
    //     '13d': 'snow.svg',
    //     '13n': 'partly-cloudy-night-snow.svg',
    //     '50d': 'fog-day.svg',
    //     '50n': 'fog-night.svg',
    // };

    // const iconCode = weather && weather[0] && weather[0].icon;
    // const imageName = iconMappings[iconCode] || 'image.svg';


    return (

        <div className="contenedor clima">
            <h2>El clima de {name} es: </h2>
            {/* <img className="imagen-clima"
                src={`/public/${imageName}`}
                alt={`Icono de clima para ${weather && weather[0] && weather[0].description}`}
            /> */}
            <p>
                {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
            </p>

            <div className="temp_min_max">

                <p>
                    Mín: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
                </p>
                <p>
                    Máx: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
                </p>

            </div>

        </div>

    )

}


export default Resultado