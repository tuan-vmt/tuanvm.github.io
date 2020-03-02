document.addEventListener("DOMContentLoaded",function(){
    var food_0=document.getElementsByClassName("food_0");
    var food=document.getElementsByClassName("food");
    var xanh=document.getElementsByClassName("xanh");
    var food_1=document.getElementsByClassName("food_1");
    var food_5=document.getElementsByClassName("food_5");
    var food_2=document.getElementsByClassName("food_2");
    var food_4=document.getElementsByClassName("food_4");
    var xanh1=document.getElementsByClassName("xanh1");
    var xoay=document.getElementsByClassName("xoay");
    food_5[0].onclick=function(){
     food_2[0].classList.toggle('xuathien1');
 }
    food_0[0].onclick=function(){
        food[0].classList.toggle('xuathien');
    }
     food_1[0].onmouseenter=function(){
         xanh[0].classList.add("xlc");
     }
     food_1[0].onmouseleave=function(){
         xanh[0].classList.add("xlc1");
         setTimeout(function(){
             xanh[0].classList.remove("xlc");
             xanh[0].classList.remove("xlc1");    
         },100)
    }
    food_1[1].onmouseenter=function(){
         xanh[1].classList.add("xlc");
     }
     food_1[1].onmouseleave=function(){
         xanh[1].classList.add("xlc1");
         setTimeout(function(){
             xanh[1].classList.remove("xlc");
             xanh[1].classList.remove("xlc1");    
         },100)
    }
    food_1[2].onmouseenter=function(){
         xanh[2].classList.add("xlc");
     }
     food_1[2].onmouseleave=function(){
         xanh[2].classList.add("xlc1");
         setTimeout(function(){
             xanh[2].classList.remove("xlc");
             xanh[2].classList.remove("xlc1");    
         },100)
    }
    food_1[2].onmouseenter=function(){
         xanh[2].classList.add("xlc");
     }
     food_1[2].onmouseleave=function(){
         xanh[2].classList.add("xlc1");
         setTimeout(function(){
             xanh[2].classList.remove("xlc");
             xanh[2].classList.remove("xlc1");    
         },100)
    }
    food_1[3].onmouseenter=function(){
         xanh[3].classList.add("xlc");
     }
     food_1[3].onmouseleave=function(){
         xanh[3].classList.add("xlc1");
         setTimeout(function(){
             xanh[3].classList.remove("xlc");
             xanh[3].classList.remove("xlc1");    
         },100)
    }
 food_1[4].onmouseenter=function(){
         xanh[4].classList.add("xlc");
     }
     food_1[4].onmouseleave=function(){
         xanh[4].classList.add("xlc1");
         setTimeout(function(){
             xanh[4].classList.remove("xlc");
             xanh[4].classList.remove("xlc1");    
         },100)
    }
    food_1[5].onmouseenter=function(){
     xanh[5].classList.add("xlc");
 }
 food_1[5].onmouseleave=function(){
     xanh[5].classList.add("xlc1");
     setTimeout(function(){
         xanh[5].classList.remove("xlc");
         xanh[5].classList.remove("xlc1");    
     },100)
 }
 food_4[0].onmouseenter=function(){
     xanh1[0].classList.add("xlc2");
 }
 food_4[0].onmouseleave=function(){
     xanh1[0].classList.add("xlc3");
     setTimeout(function(){
         xanh1[0].classList.remove("xlc2");
         xanh1[0].classList.remove("xlc3");    
     },100)
 }
 food_4[1].onmouseenter=function(){
     xanh1[1].classList.add("xlc2");
 }
 food_4[1].onmouseleave=function(){
     xanh1[1].classList.add("xlc3");
     setTimeout(function(){
         xanh1[1].classList.remove("xlc2");
         xanh1[1].classList.remove("xlc3");    
     },100)
 }      
 food_4[2].onmouseenter=function(){
     xanh1[2].classList.add("xlc2");
 }
 food_4[2].onmouseleave=function(){
     xanh1[2].classList.add("xlc3");
     setTimeout(function(){
         xanh1[2].classList.remove("xlc2");
         xanh1[2].classList.remove("xlc3");    
     },100)
 }      
 food_4[4].onmouseenter=function(){
     xanh1[4].classList.add("xlc2");
 }
 food_4[4].onmouseleave=function(){
     xanh1[4].classList.add("xlc3");
     setTimeout(function(){
         xanh1[4].classList.remove("xlc2");
         xanh1[4].classList.remove("xlc3");    
     },100)
 }      
 food_4[5].onmouseenter=function(){
     xanh1[5].classList.add("xlc2");
 }
 food_4[5].onmouseleave=function(){
     xanh1[5].classList.add("xlc3");
     setTimeout(function(){
         xanh1[5].classList.remove("xlc2");
         xanh1[5].classList.remove("xlc3");    
     },100)
 }      
 food_4[3].onmouseenter=function(){
     xanh1[3].classList.add("xlc2");
 }
 food_4[3].onmouseleave=function(){
     xanh1[3].classList.add("xlc3");
     setTimeout(function(){
         xanh1[3].classList.remove("xlc2");
         xanh1[3].classList.remove("xlc3");    
     },100)
 }
 var btn=document.getElementsByClassName("btn");
 console.log(btn[2]);
 function validateForm()  {
    var u = document.getElementById("name").value;
    var p = document.getElementById("email").value;
    var m = document.getElementById("password").value;
    var n = document.getElementById("password-v2").value;
    if(u== "") {
        alert("Nhập họ và tên ");
        return false;
    }
    if(p == "") {
        alert("Nhập email ");
        return false;
    }
    if((p.indexOf("@gmail.com")!=p.length-10)||p.length<16||p.length>=40){
        alert("Kiểm tra lại email");
        return false;
    }    
    if(m==""){
        alert("Nhập mật khẩu");
        return false;
    }
    if(m.length<8){
        alert("Mật khẩu tối thiểu 8 ký tự");
        return false;
    }
    if(n==""){
        alert("Nhập lại mật khẩu");
        return false;
    }
    if(n!=m){
        alert("Mật khẩu không khớp hãy nhập lại");
    }
    else{
        alert("Đăng ký thành công");
    }
    return true;
}
    btn[2].onclick=function(){
        validateForm();
    }
    jQuery(document).ready(function($){
        var pos=$(".header1").position();
        $(window).scroll(function(){
            var posScroll=$(document).scrollTop();
            if(parseInt(posScroll)>parseInt(pos.top)){
                $(".header1").addClass("fixed");
                $('.logo1 img').attr("src","https://i.ibb.co/G0m3WNt/logothatfruit.png");
                $('.cart2').addClass("xhcart");
            }
            else{
                $(".header1").removeClass("fixed");
                $('.logo1 img').attr("src","");
                $('.cart2').removeClass("xhcart");
            }
        });
    });
    $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
        var sum1=0,sum2=0;
        for(i=0;i<a.length;i++){
            var x=a[i].image;
            var c=parseFloat(a[i].price);
            sum=a[i].price*a[i].quantity;
            sum1=sum1+sum;
            sum2=sum2+parseInt(a[i].quantity);   
        }
        if(sum2>0){sum1=sum1+50000;}
        $(".count2").text(sum2+" sản phẩm");  
        $("#count").text(sum2);
        $("#sumMoney").text(sum1+" đ"); 
        $("#total").text(sum1+" đ"); 
    });
},false) 