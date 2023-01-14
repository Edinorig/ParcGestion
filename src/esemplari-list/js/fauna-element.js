
class FaunaElement {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};

        const parser = new DOMParser();
        const templateString = '<div class="line-block-fauna"> <p class="line-Text-ambiente"></p><p class="line-Text-nome"></p><p class="line-Text-quantity"></p><p class="line-Text-age"></p><p class="line-Text-sex"></p><p class="line-Text-kind"></p><p class="line-Text-health"></p><p class="line-Text-type"></p><p class="line-Text-birthday"></p><p class="line-Text-dataRegistered"></p></div>';
        const templateElement = parser.parseFromString(templateString, 'text/html');
        this.template = templateElement.documentElement.querySelector('body > div');
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            esemplablock : this.template,
            blockFlora: this.template.querySelector('.wrapper-list-fauna'),
            floraLine : this.template.querySelector('.line-block-flora'),
            faunaLine : this.template.querySelector('.line-block-faunaLine'),
            blockFlora: this.template.querySelector('.wrapper-list-fauna'),
            lineTextAmbiente  : this.template.querySelector('.line-Text-ambiente'),
            lineTextNome  : this.template.querySelector('.line-Text-nome'),
            lineTextQuantity  : this.template.querySelector('.line-Text-quantity'),
            lineTextSex  : this.template.querySelector('.line-Text-sex'),
            lineTextKind  : this.template.querySelector('.line-Text-kind'),
            lineTextHealth  : this.template.querySelector('.line-Text-health'),
            lineTextType  : this.template.querySelector('.line-Text-type'),
            lineTextAge  : this.template.querySelector('.line-Text-age'),
            faunaId  : this.template.querySelector('.fauna-id'),
            linetextBirthday : this.template.querySelector('.line-Text-birthday'),
            linetextDataRegistered : this.template.querySelector('.line-Text-dataRegistered'),

        };

        this.rootElement.appendChild(this.template);
    }

    initEventListeners() {
        
    }

    setName(nome){
        this.elements.lineTextNome.innerHTML =  nome;
    }

    setQuantity(quantity){
        this.elements.lineTextQuantity.innerHTML =  quantity;
    }

    setSex(sex){
        this.elements.lineTextSex.innerHTML =  sex;
    }

    setAge(age){
        this.elements.lineTextAge.innerHTML =  age;
    }

    setKind(kind){
        this.elements.lineTextKind.innerHTML =  kind;
    }

    setHealth(health){
        this.elements.lineTextHealth.innerHTML =  health;
    }

    setType(type){
        this.elements.lineTextType.innerHTML =  type;
    }

    setDataRegistered(data){
        this.elements.linetextDataRegistered.innerHTML =  data;
    }

    setDataBirthday(data){
        this.elements.linetextDataRegistered.innerHTML =  data;
    }
}

export default FaunaElement;