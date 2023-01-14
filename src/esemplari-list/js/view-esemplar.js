import FloraElement from './flora-element.js';
import FaunaElement from './fauna-element.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

const parentElement = document.querySelector('.wrapper-list-flora');
const parentElement2 = document.querySelector('.wrapper-list-fauna');

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('park')


const hrefEle = document.querySelector('#href-fauna');
hrefEle.href = hrefEle.href + `?park=${product}`; 

const hrefEleFlora = document.querySelector('#href-flora');
hrefEleFlora.href = hrefEleFlora.href + `?park=${product}`; 

const data = {
    'parkName': product
};

console.log(data);


let dataParkFlora = null;
let dataParkFauna= null;

await UtilsFetch.postData('./php/view-esemplar-flora.php', data)
    .then(response => {
        console.log(response);
        if (response.status == '201') {
            dataParkFlora = JSON.parse(response.data);
            console.log(dataParkFlora);
        } else {
            console.log("Is something wrong");
        }
    });

await UtilsFetch.postData('./php/view-esemplar-fauna.php', data)
    .then(response => {
        console.log(response);
        if (response.status == '201') {
            dataParkFauna = JSON.parse(response.data);
            console.log(dataParkFauna);
        } else {
            console.log("Is something wrong");
        }
    });

    dataParkFlora.forEach(nameData => {
    const esemplarElement = new FloraElement(parentElement);
    esemplarElement.init();
    esemplarElement.setName(nameData['Name']);
    esemplarElement.setQuantity(nameData['Quantity']);
    esemplarElement.setSex(nameData['Sex']);
    esemplarElement.setAge(nameData['Age']);
    esemplarElement.setKind(nameData['KindFlora']);
    esemplarElement.setHealth(nameData['statusHealth']);
    esemplarElement.setType([nameData['Type']]);
    esemplarElement.setDataRegistered([nameData['dataRegistered']])
    esemplarElement.setDataBirthday([nameData['birthday']])
});



dataParkFauna.forEach(nameData => {
    const esemplarElement = new FaunaElement(parentElement2);
    esemplarElement.init();
    esemplarElement.setName(nameData['Name']);
    esemplarElement.setQuantity(nameData['Quantity']);
    esemplarElement.setSex(nameData['Sex']);
    esemplarElement.setAge(nameData['Age']);
    esemplarElement.setKind(nameData['KindFauna']);
    esemplarElement.setHealth(nameData['statusHealth']);
    esemplarElement.setType([nameData['Type']]);
    esemplarElement.setDataRegistered([nameData['dataRegistered']])
    esemplarElement.setDataBirthday([nameData['birthday']])
});
