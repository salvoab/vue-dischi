/***************************************************************************************************
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di Vue JS stampiamo tutto a schermo.

Chiamata: https://flynn.boolean.careers/exercises/api/array/music
****************************************************************************************************/

let app = new Vue({
    el: '#app',
    data: {
        dischi: []
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(response => this.dischi = response.data.response)
            .catch(error => console.log(error));
    }
});