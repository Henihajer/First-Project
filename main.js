$('header').css({ 'border-top': '4px solid #648880','border-bottom': '4px solid #648880','float': 'left','font-size': '48px', 'text-transform': 'uppercase'})
$( 'aside' ).css({ 'background': "SkyBlue",'height':100,'vertical-align':'middle'});
$( '.baniere' ).css({ 'padding-left': '34px','padding-right': '74px','text-align': 'center', 'text-transform': 'uppercase','height':'1200px' ,'width':'100px','float':'right','border-bottom': '4px solid #648880','font-size': '17px'  });
$( '.baniere1' ).css({'padding-top': '34px','background':'lightblue' , 'border-top': '4px solid grey','border-bottom': '4px solid grey','height':'80px','width':140 ,'margin-left':0});
$('body').css({'background-image': 'url(img/fond.jpg','height':700})
$('.section').css({'background': '#6794E0','height':'900px' ,'width':'1300px','margin-top':40,'margin-left':100})
$('.p1').css({ 'font-size': '28px', 'display': 'block','align-content': 'center','margin-top':0,'float':'left'})
$('.p0').css({ 'font-size': '68px','padding-top': '10px','padding-left': '80px','float':'left'})
$('.p2').css({ 'font-size': '28px', 'display': 'block','align-content': 'center','margin-top':0,'padding-top': '80px','float':'left'})
$('.p3').css({ 'font-size': '28px', 'display': 'flex','align-content': 'center','margin-top':0,'float':'left'})
$('.p4').css({ 'font-size': '28px', 'display': 'block','align-content': 'center','margin-top':0,'float':'left'})
$('.r').css({ 'font-size': '28px', 'display': 'flex','align-content': 'left','margin-top':60,'margin-left':0,'float':'right'})
$('.r2').css({ 'font-size': '28px', 'display': 'flex','align-content': 'left','margin-top':60,'margin-left':0,'float':'right'})
$('.r3').css({ 'font-size': '28px', 'display': 'flex','align-content': 'left','margin-top':60,'margin-left':0,'float':'right'})
$('.r1').css({ 'font-size': '28px', 'display': 'flex','align-content': 'left','margin-top':60,'margin-left':0,'float':'right'})


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

var lCompte=[{num:1,name: 'ahmed',balance:1000},{num:2,name: 'sonia',balance:1500},{num:3,name: 'mariem',balance:1500}]



$("#extrait").click(function() {
$('.p0').css({'visibility': 'hidden'})
$('.p1').css({'visibility': 'hidden'})
$('.p2').css({'visibility': 'hidden'})
$('.p3').css({'visibility': 'hidden'})
$('.p4').css({'visibility': 'visible'})
$('.r').html(affiche(lCompte))
});


$(('#creer')).click(function() {
var m=0    
var n=($('.name1').val())
var ncc=parseInt($('.numcompte').val())
var m=parseInt($('.montant').val())
var cr=createCompte(ncc,n,m)
for (var i=0;i<lCompte.length;i++){
    if (ncc===lCompte[i].num){
       return alert('Numéro de compte existant')
        m=1
    }}
 var j=lCompte.length++
 lCompte[j++]=cr
 $('.r1').text(affiche(lCompte))
   

});

$(('#val1')).click(function() {

var md=parseInt(($('.mdepose').val()))
var ncc1=parseInt(($('.numc').val()))
var mr=parseInt($('.mretire').val())
for(var i=0; i<lCompte.length;i++){
    if(lCompte[i].num===ncc1){
        var r1=makeAt(lCompte[i].balance)
        if (mr>lCompte[i].balance){
            alert('solde insuffisant')
        }
        r1.withdraw(mr)
        r1.deposit(md)
        lCompte[i].balance=r1.reste()
        
    }
}
$('.r2').text(affiche(lCompte))
});

$(('#val2')).click(function() {
var cRe=parseInt(($('.numtc1').val()))
var cDe=parseInt(($('.numtc2').val()))
var mt=parseInt(($('.mt').val()))
for(var i=0; i<lCompte.length;i++){
     for(var j=0; j<lCompte.length;j++){
    if(lCompte[i].num===cRe){
        var r1=makeAt(lCompte[i].balance)
       if(lCompte[j].num===cDe){
        var r2=makeAt(lCompte[j].balance)
        if (lCompte[i].balance<mt ){
           return  alert('solde insuffisant') 
        }
        else{
        r1.withdraw(mt)
        r2.deposit(mt)
        lCompte[i].balance=r1.reste()
        lCompte[j].balance=r2.reste()
       
    }}
}}}
$('.r3').text(affiche(lCompte))
});



function createCompte(num,name, balance) {
  return {
    num:num,
    name: name,
    balance: balance,
  };
}
function affiche(compte){
    var res=""
    for (var i in compte){
        res=res+' \n'+compte[i].num+'-'+compte[i].name+'-'+compte[i].balance+ '----'+'\n'
    }
    return res 
}

function makeAt(initial) {
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


     reste: function(){
        return balance
     }, 
 
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