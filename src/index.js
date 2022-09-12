import './style.css';
import './controller.js';
import djImage from './assets/images/rip-txny-dj.jpeg';
import coverImage from './assets/images/rip-txny-cover.jpg';
import portalImage from './assets/images/portal-cover.jpg';
import qtttcImage from './assets/images/qtttc-cover.jpg';
import instagramLogo from './assets/icons/instagram-logo.svg';
import twitterLogo from './assets/icons/twitter-logo.svg';
import linktreeLogo from './assets/icons/linktree-logo.svg';

const bio = `Felipe González Avila also known as RIP TXNY is an Artist, 
Music Producer and DJ from Santiago, Chile. He has collaborated with 
Red Bull Music (US), Nacional Records (US), Mad Decent (US), Neoperreo (CL) 
and KinKon Records (US/MX). He has produced songs that have been performed 
at musical gatherings such as The Museum of Modern Art in New York, Primavera 
Sound (Spain), Lollapalooza (CL), Coachella (LA), Boiler Room, among others. 
His most recent performances were for Red Bull, Estados Unidos de Bass and 
playing an opening set for King Woman at The Music Hall of Williamsburg in New 
York. Felipe now resides in NYC, active in a mesh of different cultural 
communities through his music and pursuing his personal artistic career.`;

createElement('p', {
	text: bio,
});
createElement('h1', {
	text: 'RIP TXNY',
});
createElement('img', {
	title: 'RIPTXNY on stage',
	src: djImage,
});
createElement('img', {
	title: 'Cover for RIPTXNY EP',
	src: coverImage,
});
createElement('img', {
	title: 'Cover for Portal',
	src: portalImage,
});
createElement('img', {
	title: 'Cover for QTTTC',
	src: qtttcImage,
});

createElement('iframe', {
	title: 'Spotify player for Portal',
	class: 'spotify-embed',
	src: 'https://open.spotify.com/embed/track/4MVSpERzPckgj9CfBVMyvd?utm_source=generator',
	allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
	loading: 'lazy',
});
createElement('iframe', {
	title: 'Youtube video player for Portal',
	class: 'youtube-embed',
	src: 'https://www.youtube.com/embed/Ei6mJ2JIPI4',
	allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
});

createElement('iframe', {
	title: 'Apple music player for Portal',
	class: 'apple-embed',
	src: 'https://embed.music.apple.com/us/album/portal/1633092892?i=1633092910',
	allow: 'autoplay *; encrypted-media *; fullscreen *; clipboard-write',
	sandbox: 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation',
});


createElement('iframe', {
	class: 'bandcamp-embed',
	title: 'Bandcamp player for Portal',
	src: 'https://bandcamp.com/EmbeddedPlayer/track=2210751335/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/',
});

createElement('img', {
	title: 'RIPTXNY Instagram',
	src: instagramLogo,
});

createElement('img', {
	title: 'RIPTXNY Twitter',
	src: twitterLogo,
});

createElement('img', {
	title: 'RIPTXNY Linktree',
	src: linktreeLogo,
});

/**
 * Creates DOM elements
 *
 * @param {string} elementType element type to be created
 * @param {object} options any options to be added to element
 * @returns {
 *   HTMLElement|
 *   HTMLIFrameElement|
 *   HTMLImageElement
 * } returns created element
 */
function createElement(elementType, options) {
	const element = document.createElement(elementType);
	if (options.hasOwnProperty('text')) {
		const text = document.createTextNode(options.text);
		element.appendChild(text);
	}
	if (options.hasOwnProperty('src')) {
		element.setAttribute('src', options.src);
	}
	if (options.hasOwnProperty('class')) {
		element.classList.add(options.class);
	}
	if (options.hasOwnProperty('title')) {
		element.setAttribute('title', options.title);
	}
	if (options.hasOwnProperty('allow')) {
		element.setAttribute('allow', options.allow);
	}
	if (options.hasOwnProperty('sandbox')) {
		element.setAttribute('sandbox', options.sandbox);
	}
	if (options.hasOwnProperty('allowfullscreen') && options.allowfullscreen) {
		element.setAttribute('allowfullscreen', '');
	}
	if (options.hasOwnProperty('loading')) {
		element.setAttribute('loading', options.loading);
	}
	document.body.appendChild(element);
	return element;
}

