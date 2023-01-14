import ReggionList from './reggion-list.js';
import UtilsFetch from '../../common/js/utils-fetch.js';

const parentElement = document.querySelector('.wrapper-reggions-list');

const data = {};

let dataRegion = null;

await UtilsFetch.postData('./php/view-list.php', data)
    .then(response => {

        if (response.status == '200') {
            dataRegion = JSON.parse(response.data);
            console.log(dataRegion[0]);
        } else {
            console.log("Is something wrong");
        }
    });


dataRegion.forEach(nameData => {
    const region = new ReggionList(parentElement);
    console.log(nameData['name']);
    region.init();
    region.setRegionName(nameData['name']);
}); 

parentElement.addEventListener('open-region', (e) => {
    location.href = `../park-list/park-list.php?region=${e.detail.region}`;
})

// SELECT Parks.name FROM `Parks` inner join Regions on Parks.idRegion = Regions.id WHERE Regions.name = 'Lazio';