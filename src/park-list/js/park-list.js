
class ParkList {
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
            parkBlock: this.template,
        };

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {

        this.elements.parkBlock.addEventListener('click', (event) => {
            location.href = '../esemplari-list/esemplari-list.php?name=value1';

            event.preventDefault();

            this.rootElement.dispatchEvent(new CustomEvent('open-region', {
                bubbles: true,
                detail: {
                    park: this.elements.parkBlock.innerHTML,
                },
            }));

        });
    }

    setRegionName(name) {
        this.elements.parkBlock.innerHTML = name.toString();
    }

    noParks() {
        this.elements.parkBlock.style.background = "red";
        this.elements.parkBlock.innerHTML = "There no parks";
    }
}

export default ParkList;