// Hiệu ứng cho phần header
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
 $(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 180){
        $('.header1').css("top","-10px");
        $('.header1').css("position","fixed");
        $('.header1').css("z-index","200");
        }
        if($(window).scrollTop() <= 180){
            $('.header1').css("position","unset");
        }
    });
  //   Hết thanh cuộn chuột
  $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
      var sum1=0,sum2=0;
      for(i=0;i<a.length;i++){
          var x=a[i].image;
          var c=parseFloat(a[i].price);
          sum=a[i].price*a[i].quantity;
          sum1=sum1+sum;
          sum2=sum2+parseInt(a[i].quantity);
          $("#tb-cart").append('<tr class="fadel"><td><button class="del" onclick="removeitem('+a[i].id+')"><i class="fas fa-times click-remove-pr"></i></button></td><td><div class="pic"><img  src='+x+'></td></div><td>'+a[i].name+'</td><td class="tien1">'+a[i].price+'đ</td><td><div class="cidoa"><button class="fas fa-arrow-alt-circle-down click-increase giam1" onclick="giam('+a[i].id+')"></button><input type="text" class="ip-cart" name="'+a[i].quantity+'" value="'+a[i].quantity+'" placeholder="1" onchange="change('+a[i].id+')"><button onclick="tang('+a[i].id+')" class="fas fa-arrow-alt-circle-up abc"></button></div></td><td class="tien">'+sum+'đ</td></tr>');
      }
      if(sum2>0){sum1=sum1+50000;}
      $(".giam1").click(function(){
        var x=parseInt($(this).closest("tr").find(".ip-cart").val());
        if(x>=1){
        $(this).closest("tr").find(".ip-cart").val(x-1);
        var y=parseInt($(this).closest("tr").find(".tien1").text());
        $(this).closest("tr").find(".tien").text((x-1)*y+"đ");
        $(".count2").text(parseInt($(".count2").text())-1+" sản phẩm"); 
        if(parseInt($(".count2").text())<=0){
            $("#sumMoney").text(0+" đ");    
        }
        else{$("#sumMoney").text(parseInt($("#sumMoney").text())-y+" đ");}
        }
        if(x==1){
            $(this).closest("tr").remove(); 
        }
    });
    $(".abc").click(function(){
        var x=parseInt($(this).closest("tr").find(".ip-cart").val());
        $(this).closest("tr").find(".ip-cart").val(x+1);
        var y=parseInt($(this).closest("tr").find(".tien1").text());
        $(this).closest("tr").find(".tien").text((x+1)*y+"đ");
        $("#sumMoney").text(parseInt($("#sumMoney").text())+y+" đ");
        $(".count2").text(parseInt($(".count2").text())+1+" sản phẩm"); 
    });
    $(".del").click(function(){
        $(this).closest("tr").remove();
        var x=parseInt($(this).closest("tr").find(".tien1").text());
        var y=parseInt($(this).closest("tr").find(".ip-cart").val());
        $(".count2").text(parseInt($(".count2").text())-y+" sản phẩm"); 
        if(parseInt($(".count2").text())<=0){
            $("#sumMoney").text(0+" đ");    
        }
        else{$("#sumMoney").text(parseInt($("#sumMoney").text())-x*y+" đ");}
});
      $(".count2").text(sum2+" sản phẩm");   
      $("#sumMoney").text(sum1+" đ"); 
      $("#total").text(sum1+" đ"); 
      $("#count").text(sum2);
  });
  $("#submit-cart").click(function(){
    $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
        var d = new Date();
        var h=Math.floor(Math.random()*9000 ) + 1000;
        var t="27M"+h;
        for(var i=0;i<a.length;i++){
            $.post("http://5d971a739937f40014b686ce.mockapi.io/api/GD",
            {
                img:a[i].image,
                sumM:parseInt(a[i].price)*parseInt(a[i].quantity),
                time:d,
                Ma:t
             })
            $.ajax({
                url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+a[i].id,
                method:'DELETE'
            })    
        }
    });
  });
});
},false)
function removeitem(id){
    $.ajax({
        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+id,
        method:'DELETE'
    })
        }  
        function tang(id){
            $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+id, function (a){
                var p=parseInt(a.quantity);
                p=p+1;
                $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+id,
                        method:'PUT',
                        data: {
                            quantity:p
                        }
                    })
}); 
        }
        function giam(id){
            $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+id, function (a){
                var i1;
                var p=parseInt(a.quantity);
                if(p>0){p=p-1;}
                $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+id,
                        method:'PUT',
                        data: {
                            quantity:p
                        }
                    })
                if(p==0){
                    $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+id,
                        method:'DELETE'
                })
                }       
}); 
        };
        function change(id){
            var x=document.getElementsByClassName("tien1");
            var y=document.getElementsByClassName("ip-cart");
            var z=document.getElementsByClassName("tien");
            $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function (a){
                var i1,t1=0;
                for(var i=0;i<a.length;i++){
                    if(a[i].id==id){
                        i1=i;
                    }
                }
                var u=String(y[i1].value);
                for(var i=0;i<u.length;i++){
                    if(u[i]!='-'&&u[i]!='0'&&u[i]!='1'&&u[i]!='2'&&u[i]!='3'&&u[i]!='4'&&u[i]!='5'&&u[i]!='6'&&u[i]!='7'&&u[i]!='8'&&u[i]!='9'){
                        t1=1;
                        break;    
                    }
                }
                if(t1==1){
                    u="100";
                    y[i1].value=u;
                }
                if(parseInt(u)<0){
                    alert("Số lượng sản phẩm phải lớn hơn 0!");
                    u="0";
                    y[i1].value=u;
                }
                var u1=parseInt(u);
                z[i1].innerHTML=u*parseInt(x[i1].innerHTML)+"đ";
                if(u1>=100){
                    alert("Mua ít thôi BÉO lắm rồi bạn ơi");
                }
                $(".count2").text(parseInt($(".count2").text())-parseInt(y[i1].name)+parseInt(u1)+" sản phẩm");
                $("#sumMoney").text(parseInt($("#sumMoney").text())+(parseInt(u1)-parseInt(y[i1].name))*parseInt(x[i1].innerHTML)+" đ");
                $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+a[i1].id,
                        method:'PUT',
                        data: {
                            quantity:u1
                        }
                    })
                y[i1].name=u1;  
}); 
        }  
              

