
  	$('#contact-form').submit(function(e){
    e.preventDefault();
    
    $('#result').html("Thankyou! Your order has been successfully Submitted. We will contact you soon!");

   var data = {
   	"firstName" : $('input[name="firstName"]').val(),
   	"lName" : $('input[name="lastName"]').val(),
   	"email" : $('input[name="email"]').val(),
   	"company" : $('input[name="company"]').val(),
   	 "budget" :  $('input[name="budget"]').val(),
   	 "pType" : document.querySelector('form select').value,
   	 "msg" : document.querySelector('form textarea').value
   };

   $.ajax({
     type: 'post',
     datatype: 'jsonp',
     data: JSON.stringify(data),
     contentType: 'application/json',
     url: '/contact', //node.js server is running
     success: function(data) {}
});
});