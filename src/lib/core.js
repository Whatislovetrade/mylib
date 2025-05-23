const $ = function(selector) {
    return new $.prototype.init(selector);
}

$.prototype.init = function(selector) {
    if(!selector) {
        return this; // {} Возвращает пустой объект, если нет селектора
    }

    if(selector.tagName) {
        this[0] = selector
        this.length = 1
        return this
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype; // Прототип прототипа верхней функции

window.$ = $

export default $