// var app1 = new Vue({
//     el: '#app1',
//     data: {
//       message: 'Vue Demo'
//     }
// });

// var app2 = new Vue({
//     el: '#app2',
//     data: {
//       message: '页面加载于' + new Date().toLocaleString()
//     }
// });

// var app3 = new Vue({
//   el: '#app3',
//   data: {
//     seen: true,
//     message: '显示与隐藏'
//   }
// });

// var app4 = new Vue({
//   el: '#app4',
//   data: {
//     todos: [
//       {text: 'list1'},
//       {text: 'list2'},
//       {text: 'list3'}
//     ]
//   }
// });

// var app5 = new Vue({
//   el: '#app5',
//   data: {
//     message: 'reverse message'
//   },
//   methods: {
//     reverseMessage: function() {
//       this.message = this.message.split(' ').reverse().join(' ');
//     }
//   }
// })

// var app6 = new Vue({
//   el: '#app6',
//   data: {
//     message: 'hello demo'
//   }
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

// var app12 = new Vue({
//     el: '#app12',
//     data: {
//       message: 'hello demo'
//     }
//   })
  
//   var app13 = new Vue({
//     el: '#app13',
//     data: {
//       message: 'hello demo'
//     }
//   })
  
//   var app14 = new Vue({
//     el: '#app14',
//     data: {
//       isButtonDisabled: 0
//     }
//   })
  
//   var app = new Vue({
//     el: '#app15',
//     data: {
//       seen: true
//     }
//   })
  
//   var app16 = new Vue({
//     el: '#app16',
//     data: {
//       message: 'Vue Demo'
//     },
//     beforeCreate: function(){
//       console.log("beforeCreated", this.message);
//     },
//     created: function(){
//       console.log("created", this.message);
//     },
//     beforeMount: function(){
//       console.log("beforeMount", this.message);
//     },
//     mounted: function(){
//       console.log("mounted", this.message);
//     },
//     beforeUpdate: function(){
//       console.log("beforeUpdated", this.message);
//     },
//     updated: function(){
//       console.log("updated", this.message);
//     },
//     beforeDestroy: function(){
//       console.log("updated", this.message);
//     },
//     destroyed: function(){
//       console.log("updated", this.message);
//     },
//     computed: {
//       reversedMessage: function(){
//         console.log("computed", this.message);
//         return this.message.split(' ').reverse().join(' ');
//       }
//     },
//     methods: {
//       reverseMessage: function() {
//         console.log("clicked", this.message);
//         this.message = this.message.split(' ').reverse().join(' ');
//       }
//     }
//   })

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

// var app20 = new Vue({
//     el: '#app20',
//     data: {
//         firstName: 'Hello',
//         lastName: 'Demo',
//         fullName: 'Hello Demo'
//     },
//     // computed: {
//     //     fullName: function(){
//     //         return this.firstName + ' ' + this.lastName;
//     //     }
//     // }
//     watch: {
//         firstName: function(val){
//             this.fullName = val + ' ' + this.lastName
//         },
//         lastName: function(val){
//             this.fullName = this.firstName + ' ' + val
//         }
//     }
// });

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

// var app22 = new Vue({
//     el: '#app22',
//     data: {
//         question: '',
//         answer: 'I cannot give you an answer until you ask a question!'
//     },
//     watch: {
//         question: function(newValue, oldValue){
//             this.answer = 'Waiting for you to stop typing...'
//             this.getAnswer()
//         }
//     },
//     methods: {
//         getAnswer: _.debounce(
//             function () {
//               if (this.question.indexOf('?') === -1) {
//                 this.answer = 'Questions usually contain a question mark. ;-)'
//                 return
//               }
//               this.answer = 'Thinking...'
//               var vm = this
//               axios.get('https://yesno.wtf/api')
//                 .then(function (response) {
//                   vm.answer = _.capitalize(response.data.answer)
//                 })
//                 .catch(function (error) {
//                   vm.answer = 'Error! Could not reach the API. ' + error
//                 })
//             },
//             // 这是我们为判定用户停止输入等待的毫秒数
//             500
//         )
//     }
// })

