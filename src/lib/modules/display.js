import $ from '../core'

$.prototype.show = function() { // Показывает элемент(например модалку)
    for(let i = 0; i < this.length; i++) {
        if(!this[i].style) continue
        this[i].style.display = ''
    }

    return this
}

$.prototype.hide = function() { // Скрывает элемент(например та же модалку)
    for(let i = 0; i < this.length; i++) {
        if(!this[i].style) continue
        this[i].style.display = 'none'
    }

    return this
}

$.prototype.toggle = function() { // Переключение(показывает и убирает элемент)
    for(let i = 0; i < this.length; i++) {
        if(!this[i].style) continue
        if(this[i].style.display === 'none') {
            this.style.display = ''
        } else {
            this.style.display = 'none'
        }
    }

    return this
}