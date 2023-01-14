import UtilsFetch from '../../common/js/utils-fetch.js';

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('park')
console.log(product);

const data = {
    'product': product,
};

await UtilsFetch.postData('./php/park.php', data)
    .then(response => {
        console.log(response);
        if (response.status == '201') {

        } else {
            console.log("Is something wrong");

        }
    });