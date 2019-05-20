const fibonacci = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55
};

const Iterator = function () {
    this.index = 0;
    this.fibonacci = fibonacci;
    this.iteratorEl = document.querySelector(".iterator");
    this.iteratorEl.innerText = this.fibonacci[this.index];
};

Iterator.prototype = {
    current: function(){
        return this.iteratorEl.innerText = this.fibonacci[this.index]
    },
    next: function () {
        this.iteratorEl.innerText = this.fibonacci[this.index++];
        iterator.current()
    },
    rewind: function () {
        this.index = 0;
        return this.iteratorEl.innerText = this.fibonacci[this.index]
    },
    key: function () {
        alert(Object.keys(this.fibonacci)[this.index])
    },
    prev: function () {
        this.iteratorEl.innerText = this.fibonacci[this.index--];
        iterator.current()
    }
};
const iterator = new Iterator();

const container = document.querySelector("#container");
class Button {
    constructor(name, eventFunc){
        this.name = name;
        this.eventFunc = eventFunc;
        this.render();
        this.btnEvent();
    }
    btnEvent() {
        this.buttonEl.addEventListener("click", this.eventFunc)
    }
    render() {
        this.buttonEl = document.createElement("button");
        this.buttonEl.classList.add("button");
        this.buttonEl.innerText = `${this.name}`;
        container.appendChild(this.buttonEl)
    }
}

const next = new Button("Next", function (){iterator.next()});
const rewind = new Button("Rewind", function (){iterator.rewind()});
const key = new Button("Key", function (){iterator.key()});
const prev = new Button("Previous", function (){iterator.prev()});