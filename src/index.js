import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../assets/app.styl'
import Photo from './photo.jpg';

function component() {
    var element = document.createElement('div');
    var myIcon = new Image();
    myIcon.src = Photo;

    element.appendChild(myIcon)

    return element;
}

document.body.appendChild(component());

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
