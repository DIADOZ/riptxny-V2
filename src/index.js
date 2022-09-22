import './style.css';
import createModelElement from './controller.js';
import djImage from './assets/images/rip-txny-dj.jpeg';
import coverImage from './assets/images/rip-txny-cover.jpg';
import portalImage from './assets/images/portal-cover.jpg';
import qtttcImage from './assets/images/qtttc-cover.jpg';
import instagramLogo from './assets/icons/instagram-logo.svg';
import twitterLogo from './assets/icons/twitter-logo.svg';
import linktreeLogo from './assets/icons/linktree-logo.svg';
import html from './template.html';

createModelElement();

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
	if (options.hasOwnProperty('srcset')) {
		element.setAttribute('srcset', options.srcset);
	}
	if (options.hasOwnProperty('sizes')) {
		element.setAttribute('sizes', options.sizes);
	}
	document.body.appendChild(element);
	return element;
}

