const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('park')
console.log(product);