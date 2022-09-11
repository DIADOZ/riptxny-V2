import './style.css';
import './controller.js';
// import './assets/favicon.ico';
// import './assets/favicon-16x16.png';
// import './assets/favicon-32x32.png';
import djImage from './assets/images/rip-txny-dj.jpeg';
import coverImage from './assets/images/rip-txny-cover.jpg';
import portalImage from './assets/images/portal-cover.jpg';
import qtttcImage from './assets/images/qtttc-cover.jpg';

const bio = `Felipe González Avila also known as RIP TXNY is an Artist, 
Music Producer and DJ from Santiago, Chile. He has collaborated with 
Red Bull Music (US), Nacional Records (US), Mad Decent (US), Neoperreo (CL) 
and KinKon Records (US/MX). He has produced songs that have been performed 
at musical gatherings such as The Museum of Modern Art in New York, Primavera 
Sound (Spain), Lollapalooza (CL), Coachella (LA), Boiler Room, among others. 
His most recent performances were for Red Bull, Estados Unidos de Bass and 
playing an opening set for King Woman at The Music Hall of Williamsburg in New York. 
Felipe now resides in NYC, active in a mesh of different cultural communities through 
his music and pursuing his personal artistic career.`

createElement("p", {text: bio});
createElement("h1", {text: 'RIP TXNY'});
createElement("img", {src: djImage});
createElement("img", {src: coverImage});
createElement("img", {src: portalImage});
createElement("img", {src: qtttcImage});

//embeds
//social icons
createElement("iframe", {src: "https://open.spotify.com/embed/track/4MVSpERzPckgj9CfBVMyvd?utm_source=generator"});

function createElement(elementType, options) {
    const element = document.createElement(elementType);
    if(options.hasOwnProperty('text')){
        const text = document.createTextNode(options.text);
        element.appendChild(text);
    }
    if(options.hasOwnProperty('src'))
        element.src = options.src;
    document.body.appendChild(element);
}

