import UtilsFetch from '../../common/js/utils-fetch.js';

class ValidationRegistration {
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
            
        };

    }

    initEventListener() {
    }
}

export default ValidationRegistration;