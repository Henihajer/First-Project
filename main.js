$('header').css({ 'border-top': '4px solid #648880','border-bottom': '4px solid #648880','float': 'left','font-size': '48px','font-weight': 100,'margin-top':0, 'text-transform': 'uppercase'})
$( "aside" ).css({ 'background': "#67b11c",'height':30,'vertical-align':'middle', });
$( ".baniere" ).css({ 'background': "SkyBlue",'padding-left': '34px','padding-top': '15px','margin-top':'center','text-align': 'center', 'text-transform': 'uppercase','height':'100px' ,'width':'100px','float':'right','border-bottom': '4px solid #648880','font-size': '17px'  });
$('body').css({'background-image': 'url(img/fond.jpg','height':700})
$('.section').css({'background': 'lightcoral','height':'600px' ,'width':'1300px','margin-top':100,'margin-left':100})
var div1 = $('<div><label >Nom    <input type="text" id="name1" required></label></div>\
                                 <label>Num compte <input type="text" name="numcompte" required></label>\
	                              <label>Montant Compte<input type="number" name="montant" required></label>\
	                              <button id="creer"> Creer </button>\
	</div>')
var par=$('<div > Bienvenue </div>')
div1.css({ 'font-size': '28px', 'display': 'flex','align-content': 'center'})
par.css({ 'font-size': '68px','padding-top': '150px','padding-left': '400px'})
var inp1 = $('<input type=text>')
$('.section').append(par)
$("#home").click(function() {
$('.section').empty()	
$('.section').append(par)
});
$("#creation").click(function() {
$('.section').empty()
$('.section').append(div1)
});
$("#creer").click(function() {
var n1=$('#name1').val()
console.log(n1)
});

function makeAccount1(initial) {
     var balance = initial;
    var transaction=[]

     function makeTransaction(type, amount, 
       before,after, status,date) 
       {
       return {
        type: type,
        amount: amount,
        before: before,
        after: after,
        status: status,
        date:date
         };
       }
     return {
          withdraw: function(amount) {
           var balanceBefore=balance 
           var today = new Date();
          if (balance - amount >= 0) { 
         balance = balance - amount;
         transaction.push(makeTransaction('withdraw', amount, balanceBefore,balance, 'approved',today.toString()))

          return 'Here’s your money: $' + amount;
     }
         transaction.push(makeTransaction('withdraw', amount, balanceBefore,balance, 'not approved',today.toString()))
     return 'Insufficient funds.';
},
     deposit: function(amount) {
         var today = new Date();
          var balanceBefore=balance
          balance = balance + amount;
          transaction.push(makeTransaction('deposit', amount, balanceBefore,balance, 'approved',today.toString()))
          return 'Your balance is: $' + balance;
          },

     transactionHistory: function(n){
              var t=[]
              var b=transaction.length
         for (var i=b-n;i<b;i++){
             t.push(transaction[i])
         }
        return t
     }, 
     filter: function(r){
        return filter(transaction,function(ele,key){
            return ele.type===r
        })
     },
     average:function(r){
         var res=0
        var e= filter(transaction,function(ele,key){
            return ele.type===r && ele.status==='approved'})

        var res=reduce(e,function(result,ele){
         return result+ele.amount
            },0)
       return (res/(e.length))
        }
     };
}
