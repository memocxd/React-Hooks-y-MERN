
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componentes
import PrimeraApp from './PrimeraApp';




// I hate light mode, so...
// const body = document.querySelector('body');
// body.style.cssText = 'background: #1d1d1d; color: #fff;';


/**********    Start de app    **********/

const divRoot = document.querySelector('#root');

// const saludo = <h1>Hola mundo!!!</h1>;
ReactDOM.render( <PrimeraApp /> , divRoot );
















