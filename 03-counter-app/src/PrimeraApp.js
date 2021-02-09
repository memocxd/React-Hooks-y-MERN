import { Fragment } from "react";
import PropTypes from "prop-types";


const PrimeraApp = ({saludo, subtitulo}) => {

    return ( 
    // <Fragment>
    //     <h1>Hola mundo!!!</h1>
    //     <p>Mi primer componente</p>
    // </Fragment>

    <>
        <h1> {saludo} </h1>
        <p> {subtitulo} </p>
    </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Texto por defecto'
}


export default PrimeraApp;
