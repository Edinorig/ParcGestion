import ParkList from './park-list.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('region')
console.log(product);
const parentElement = document.querySelector('.wrapper-reggions-list');


const data = {
    'regionName': product
};

let noParks = "There no parks";



let dataPark = null;

await UtilsFetch.postData('./php/view-list.php', data)
    .then(response => {
        console.log(response);
        if (response.status == '201') {
            dataPark = JSON.parse(response.data);
            console.log(dataPark);

            dataPark.forEach(nameData => {
                const park = new ParkList(parentElement);
                console.log(nameData['name']);
                park.init();
                park.setRegionName(nameData['name']);
            });
        } else {
            console.log("Is something wrong");
                const park = new ParkList(parentElement);
                park.init();
                park.noParks();

        }
    });



window.addEventListener('open-region', (e) => {
    console.log(e.detail);
});

parentElement.addEventListener('open-region', (e) => {
    location.href = `../esemplari-list/esemplari-list.php?park=${e.detail.park}`;
})

