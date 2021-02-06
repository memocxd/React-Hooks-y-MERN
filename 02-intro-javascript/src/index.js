

// I have light mode, so...
const body = document.querySelector('body');
body.style.cssText = 'background: #1d1d1d; color: #fff;';


/**********    Start de app    **********/


// FetchAPI

/* const apiKey = 'UjjRUim31H8F0BRbp3ffHDR3TNFZW6u4';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn); */



// Async - Await

const getImagen = async () => {
    try {
        const apiKey = 'UjjRUim31H8F0BRbp3ffHDR3TNFZW6u4';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        
        const {url} = data.images.original;

        const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
    } catch (error) {
        console.warn('Ha ocurrido un error');
    }
}


getImagen();


