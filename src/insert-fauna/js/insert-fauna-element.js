import UtilsFetch from "../../common/js/utils-fetch.js";

class InsertFaunaElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};


    }

    init() {
        this.initElements();
        this.initEventListener();
    }

    initElements() {
        this.elements = {
            ambiente: this.rootElement.querySelector('input[name="ambiente"]'),
            inputTipoData: this.rootElement.querySelector('.data-tipo'),
            inputSpecieData: this.rootElement.querySelector('.data-specie'),
            inputSessoData: this.rootElement.querySelector('.data-sesso'),
            inputEtaData: this.rootElement.querySelector('.data-age'),
            inputSaluteData: this.rootElement.querySelector('.data-salute'),
            inputQuantitaData: this.rootElement.querySelector('input[name="input-data-quantità"]'),
            inputNomeData: this.rootElement.querySelector('input[name="input-data-nome"]'),
            btnSubmit: this.rootElement.querySelector('.aggiungere-eseplare'),
        };

    }

    async initEventListener() {

        

    }

    addDataSelect() {

    }
}

export default InsertFaunaElement;