// var app6 = new Vue({
//     el: '#app6',
//     data: {
//         message: 'Hello Vue'
//     }
// })

// Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>{{todo.text}}</li>'
// });
// var app7 = new Vue({
//     el: '#app7',
//     data: {
//         groceryList: [
//             { id: 0, text: '蔬菜' },
//             { id: 1, text: '水果' },
//             { id: 2, text: '牛奶' },
//         ]
//     }
// })

// var app8Data = {
//     message: '这是定义在app8Data中的数据'
// };
// var app8 = new Vue({
//     el: '#app8',
//     data: app8Data
// })

// var app9Data = {
//     message: '这是定义在app9Data中的数据'
// };
// Object.freeze(app9Data);
// var app9 = new Vue({
//     el: '#app9',
//     data: app9Data
// });

// var app10Data = {
//     message: '这是定义在app9Data中的数据'
// };
// var app10 = new Vue({
//     el: '#app10',
//     data: app10Data
// });
// app10.$watch('message', function(newValue, oldValue){
//     console.log("message发生变化了，开始执行app10.$watch中的回调");
//     console.log("app10.$data === app10Data吗？", app10.$data === app10Data);
//     console.log("app10.$el === document.getElementById('app10')吗？", app10.$el === document.getElementById('app10'));
//     console.log(newValue, oldValue);
//     console.log("message发生变化了，结束执行app10.$watch中的回调");
// });

// var app11 = new Vue({
//     el: '#app11',
//     data: {
//         message: "app11中的message"
//     },
//     created: function(){
//         console.log('created', this.message);
//     },
//     mounted: function(){
//         console.log('mounted', this.message);
//     },
//     updated: function(){
//         console.log('updated', this.message);
//     },
//     destroyed: function(){
//         console.log('destroyed', this.message);
//     }
// });

// var app19 = new Vue({
//     el: '#app19',
//     data: {
//         message: 'Vue Demo',
//         now: Date.now()
//     },
//     methods: {
//         reverseMessage: function(){
//             this.message = this.message.split(' ').reverse().join(' ');
//         },
//         refreshNow: function(){
//             this.now = Date.now();
//         }
//     },
//     computed: {
//         reversedMessage: function(){
//             return this.message.split(' ').reverse().join(' ');
//         },
//         refreshedNow: function(){
//             return Date.now();
//         }
//     },
// });

var app20 = new Vue({
    el: '#app20',
    data: {
        firstName: 'Hello',
        lastName: 'Demo',
        fullName: 'Hello Demo'
    },
    // computed: {
    //     fullName: function(){
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
    watch: {
        firstName: function(val){
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val){
            this.fullName = this.firstName + ' ' + val
        }
    }
});

// var app21 = new Vue({
//     el: '#app21',
//     data: {
//         firstName: 'Hello',
//         lastName: 'Demo'
//     },
//     computed: {
//         fullName: {
//             get: function(){
//                 return this.firstName + ' ' + this.lastName;
//             },
//             set: function(newValue){
//                 var names = newValue.split(' ')
//                 this.firstName = names[0]
//                 this.lastName = names[names.length - 1]
//             }
//         }
//     }
// })



