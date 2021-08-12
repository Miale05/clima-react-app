import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {
    
    // Extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    // grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12 z-depth-3">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p><i class="tiny material-icons">opacity</i> Humedad:
                 {' ' + parseInt(main.humidity) } <span>%</span>
                </p>

                <p><i class="tiny material-icons">filter_drama</i> Sensación Ambiente:
                    {' ' + parseFloat(main.feels_like - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>

                <p><i class="tiny material-icons">cloud_upload</i> Temperatura Máxima:
                    {' ' + parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>

                <p><i class="tiny material-icons">cloud_download</i> Temperatura Mínima:
                    {' ' + parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>

            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;