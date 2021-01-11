/***************************************************************************************************
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di Vue JS stampiamo tutto a schermo.

Chiamata: https://flynn.boolean.careers/exercises/api/array/music

Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo 
nella select vedremo i corrispondenti cd.
****************************************************************************************************/

let app = new Vue({
    el: '#app',
    data: {
        dischi: [],
        dischiDaMostrare: []
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(response => {
                const self = this;
                this.dischi = response.data.response;
                this.dischiDaMostrare = this.dischi;

                const select = document.getElementById("genere");
                select.addEventListener('change', function(){
                    const genereSelezionato = this.value;
                    if(genereSelezionato == 'All'){
                        self.dischiDaMostrare = self.dischi;
                    } else {
                        self.dischiDaMostrare = self.dischi.filter(disco => disco.genre == genereSelezionato);
                    }
                });
            })
            .catch(error => console.log(error));
            
    }
});