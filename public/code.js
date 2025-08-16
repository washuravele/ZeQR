setTimeout(function(){
 $(".qrCode").attr("src","images/Logo.png");
 alert("Time-Run-Out");
},11000);


$(".gen").click(function(){
   alert("QR-Code Created");
});
