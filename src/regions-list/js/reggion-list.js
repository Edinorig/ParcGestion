
class ReggionList {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        const parser = new DOMParser();
        const templateString = '<div class="wrapper-reggion"></div>';
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector('body > div');
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            reggionBlock: this.template,
        };

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {

        this.elements.reggionBlock.addEventListener('click', (event) => {
            event.preventDefault();


            this.rootElement.dispatchEvent(new CustomEvent('open-region', {
                bubbles: true,
                detail: {
                    region: this.elements.reggionBlock.innerHTML,
                },
            }));
        });
    }

    setRegionName(name){
        this.elements.reggionBlock.innerHTML = name.toString();
    }
}

export default ReggionList;