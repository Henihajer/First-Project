$('header').css({ 'border-top': '4px solid #648880','border-bottom': '4px solid #648880','float': 'left','font-size': '48px', 'text-transform': 'uppercase'})
$( "aside" ).css({ 'background': "#67b11c",'height':30,'vertical-align':'middle', });
$( ".baniere" ).css({ 'background': "SkyBlue",'padding-left': '34px','text-align': 'center', 'text-transform': 'uppercase','height':'100px' ,'width':'100px','float':'right','border-bottom': '4px solid #648880','font-size': '17px'  });
$('body').css({'background-image': 'url(img/fond.jpg','height':700})
$('.section').css({'background': 'lightcoral','height':'600px' ,'width':'1300px','margin-top':40,'margin-left':100})
$('.p1').css({ 'font-size': '28px', 'display': 'flex','align-content': 'center','margin-top':30})
$('.p0').css({ 'font-size': '68px','padding-top': '150px','padding-left': '10px'})
$('.p2').css({ 'font-size': '28px', 'display': 'flex','align-content': 'center','margin-top':0})
$('.p3').css({ 'font-size': '28px', 'display': 'flex','align-content': 'center','margin-top':0})
$('.p4').css({ 'font-size': '28px', 'display': 'flex','align-content': 'center','margin-top':0})

$('.p0').css({'visibility': 'visible'})
$('.p1').css({'visibility': 'hidden'})
$('.p2').css({'visibility': 'hidden'})
$('.p3').css({'visibility': 'hidden'})
$('.p4').css({'visibility': 'hidden'})



$("#home").click(function() {

$('.p0').css({'visibility': 'visible'})
$('.p1').css({'visibility': 'hidden'})
$('.p2').css({'visibility': 'hidden'})
$('.p3').css({'visibility': 'hidden'})
$('.p4').css({'visibility': 'hidden'})
});

$("#creation").click(function() {
$('.p0').css({'visibility': 'hidden'})
$('.p1').css({'visibility': 'visible'})
$('.p2').css({'visibility': 'hidden'})
$('.p3').css({'visibility': 'hidden'})
$('.p4').css({'visibility': 'hidden'})
});

$("#operation").click(function() {
$('.p0').css({'visibility': 'hidden'})
$('.p1').css({'visibility': 'hidden'})
$('.p2').css({'visibility': 'visible'})
$('.p3').css({'visibility': 'hidden'})
$('.p4').css({'visibility': 'hidden'})
});

$("#virement").click(function() {
$('.p0').css({'visibility': 'hidden'})
$('.p1').css({'visibility': 'hidden'})
$('.p2').css({'visibility': 'hidden'})
$('.p3').css({'visibility': 'visible'})
$('.p4').css({'visibility': 'hidden'})
});

$("#extrait").click(function() {
$('.p0').css({'visibility': 'hidden'})
$('.p1').css({'visibility': 'hidden'})
$('.p2').css({'visibility': 'hidden'})
$('.p3').css({'visibility': 'hidden'})
$('.p4').css({'visibility': 'visible'})
});


$(('#creer')).click(function() {
alert($('.name1').val())
});

function makeAccount1(initial,num1,name1) {
     var balance = initial;
     var num=num1;
     var name=name1;
    var transaction=[]
    function makeAcoount(num,name,balance,date) 
       {
       return {
        num: num,
        name: name,
        balance: balance,
        date:date
         };
       }
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
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }