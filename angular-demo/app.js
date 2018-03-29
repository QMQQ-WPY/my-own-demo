var app32 = new Vue({
    el: '#app32',
    data: {
        counter: 0,
        name: 'Vue Demo'
    },
    methods: {
        greet: function(e){
            console.log(e);
            alert('Hello '+this.name+' !');
            if(e){
                alert(e.target.tagName);
            }
        },
        warn: function(message, event) {
            alert(message);
            console.log(event);
            if(event){
                alert(event.target.tagName);
            }
        }
    }
})

