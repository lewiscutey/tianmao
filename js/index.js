$(function(){

// 侧边导航定位
var floor = $(".first4");
var uls = $("#leftlist");
var listt = $(".listt",uls);
var floorh = [];

for (var i = 0; i < floor.length; i++) {
    floorh.push(floor[i].offsetTop);
}

// 最顶部的盒子出现隐藏
var top = $("#top");
    var leftlist = $("#leftlist");
    var flag = true;
    window.onscroll = function(){
        var stop = scrollTops();
        // 头部开始判断
        if(stop>700){
            if(flag){
                flag = false;
                animate(top,{top:0},500);
                animate(leftlist,{bottom:50},500);
            }
        }else{
            if(!flag){
                flag = true;
                animate(top,{top:-50},500);
                animate(leftlist,{bottom:-350},500);
            }
        }

        for (var i = 0; i < floorh.length; i++) {
            if(floorh[i]<stop+200){
                for (var j = 0; j < floorh.length; j++) {
                    listt[j].style.opacity = 0;
                }
                listt[i].style.opacity = 1;
            }
        }

    };
    window.onscroll();
    for (var i = 0; i < listt.length; i++) {
        listt[i].index = i;
        listt[i].onmouseover = function(){
            for (var j = 0; j < listt.length; j++) {
                listt[j].style.opacity = 0;
            }            
            this.style.opacity = 1;
        }
    }

    var lifts = $(".mui-lift-nav",uls);   //必须换类名，因为原先的点上去是透明的无法识别
    for (var i = 1; i < lifts.length-1; i++) {
        lifts[i].index = i;
        lifts[i].onclick = function(){
            for (var j = 0; j < listt.length; j++) {
                listt[j].style.opacity = 0;
            }
            animate(document.body,{scrollTop:floorh[this.index-1]},300);
            animate(document.documentElement,{scrollTop:floorh[this.index-1]},300);
        }
    }
    //返回顶部按钮
    lifts[lifts.length-1].onclick = function(){
        animate(document.body,{scrollTop:0},100);
        animate(document.documentElement,{scrollTop:0},100);
    }

// nav上的小猫头出现
var nav = $("#nav");
    var navbox = $(".nav_container",nav)[0];
    var lisnavs = $("li",navbox);
    for (var i = 0; i < lisnavs.length; i++) {
        lisnavs[i].onmouseover = function(){
            var maotou = $(".maotou",this)[0];
            animate(maotou,{top:-15},100);
        }
        lisnavs[i].onmouseout = function(){
            var maotou = $(".maotou",this)[0];
            animate(maotou,{top:0},100);
        }
    }

// banner轮播图
var bannerbox = $(".bannerbox")[0];
    var banner = bannerbox.parentNode;
    var divs = getChilds(bannerbox);
    var imgs = $("img",bannerbox);
    var btns = $('.btn',banner)[0];
    var leftbtn = $(".left",banner)[0];
    var rightbtn = $(".right",banner)[0];
    var slider = $(".slidernav",banner)[0];
    var lis = $("li",slider);
    // console.dir(lis);

    btns.style.display="none";
    divs[0].style.opacity=1;

    var index = 0;
    function move(){
        index++;
        if(index==divs.length) index=0;
        for (var i = 0; i < lis.length; i++) {
                lis[i].className="";
                divs[i].style.opacity=0;
            }
        animate(divs[index],{opacity:1},2000);
        lis[index].className="selected";
    }

    var t = setInterval(move,2000);

    banner.onmouseover = function(){
        clearInterval(t);
        btns.style.display="block";
    }
    banner.onmouseout = function(){
        t = setInterval(move,2000);
        btns.style.display="none";
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function(){
            for (var j = 0; j < divs.length; j++) {
                lis[j].className="";
                divs[j].style.opacity=0;
            }
            this.className="selected";
            animate(divs[this.index],{opacity:1},2000);
            index = this.index;
        }
    }

    leftbtn.onclick = function(){
        index--;
        if(index<0) index = divs.length-1;
        for (var i = 0; i < divs.length; i++) {       
            divs[i].style.opacity=0;
            lis[i].className="";
        }
        animate(divs[index],{opacity:1},2000);
        lis[index].style.className="selected";
    }
    rightbtn.onclick = function(){
        move();
    }

// first1五张广告图片透明度变化
var first1 = $("#first1");
    var midbox = $(".mid",first1)[0];
    var imgs = $("img",midbox);
    // console.dir(imgs);
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onmouseover = function(){
            animate(this,{opacity:0.5},200);
        }
        imgs[i].onmouseout = function(){
            animate(this,{opacity:1},200);
        }
    };

// first2小图片遮罩效果
var first2 = $("#first2");
    var midbox = $(".mid",first2)[0];
    var liss = $("li",midbox);
    for (var i = 0; i < liss.length; i++) {
        liss[i].onmouseover = function(){
            var shade = $(".shade",this)[0];
            animate(shade,{opacity:1},200);
        }
        liss[i].onmouseout = function(){
            var shade = $(".shade",this)[0];
            animate(shade,{opacity:0},200);
        }
    };

// first2最右边鼠标移上去的效果
var first2 = $("#first2");
    var right = $(".right",first2)[0];
    var lisright = $("li",right);
    for (var i = 0; i < lisright.length; i++) {
        lisright[i].index = i;
        // console.dir(p);
        lisright[i].onmouseover = function(){  
            var p = $("p",lisright[this.index]);
            var imgs = $(".imgs",lisright[this.index])[0];
            animate(imgs,{opacity:0.8},200);
            for (var j = 0; j < p.length; j++) {
                animate(p[j],{color:"#E34141"},200);
            }
        }
        lisright[i].onmouseout = function(){
            var p = $("p",lisright[this.index]);
            var imgs = $(".imgs",lisright[this.index])[0];
            animate(imgs,{opacity:1},200);
            for (var j = 0; j < p.length; j++) {
                animate(p[j],{color:""},200);
            }
        }
    }

// first3 图片放大效果
var BOX = $("#first3");
    var imgboxx =$(".imgboxx",BOX);
    for (var i = 0; i < imgboxx.length; i++) {
        imgboxx[i].onmouseover = function(){
            var imgs = $("img",this)[0];
            animate(imgs,{width:150,height:150},500);
        }
        imgboxx[i].onmouseout = function(){
            var imgs = $("img",this)[0];
            animate(imgs,{width:130,height:130},500);
        }
    }

// banner左边导航栏
var nav = $("#nav");
var first =$(".first",nav)[0];
var second =$(".second",nav)[0];

var banner = $("#banner");
var list1 = $(".list1",banner)[0];
var list2 = $(".list2",banner)[0];

// 默认显示
second.style.backgroundColor="#3F1919";
var a = $("a",second)[0];
a.style.color="#fff";
list1.style.display = "none";
list2.style.display = "block";

first.onmouseover = function(){
    this.style.backgroundColor="#EDEDED";
    var a = $("a",this)[0];
    a.style.color="#DD2727";
    list1.style.display = "block";
    list2.style.display = "none";
}
first.onmouseout = function(){
    this.style.backgroundColor="";
    var a = $("a",this)[0];
    a.style.color="";
}
second.onmouseover = function(){
    this.style.backgroundColor="#3F1919";
    var a = $("a",this)[0];
    a.style.color="#fff";
    list1.style.display = "none";
    list2.style.display = "block";
}
second.onmouseout = function(){
    this.style.backgroundColor="";
    var a = $("a",this)[0];
    a.style.color="";
}
list1.onmouseover = function(){
    first.style.backgroundColor="#EDEDED";
    var a = $("a",first)[0];
    a.style.color="#DD2727";
}
list2.onmouseover = function(){
    second.style.backgroundColor="#3F1919";
    var a = $("a",second)[0];
    a.style.color="#fff";
}

// banner 左边导航栏  
function listnav(lisnum,hh){
    var bannerboxs = $("#banner");
    var bannernav = $(".banner_container",bannerboxs)[0];
    var list11 = $(".list1",bannernav)[0];
    var lisnavss = $("li",list11);

    for (var i = 0; i < lisnavss.length; i++) {
        lisnavss[i].index = i;
        lisnavss[i].onmouseover = function(){
            var list1rightbox = $(".list1rightbox",lisnavss[this.index])[0];
            list1rightbox.style.display = "block";
            var lisnums = $(lisnum,lisnavss[this.index])[0];
            var photos =$(".photo1",lisnums)[0];
            // photos.style.backgroundImages = "url(img/QQ1.png)";
            // photos.style.backgroundPosition = "0 "+hh;
            var aa = $("a",lisnums);
            var span1 = $("span",lisnums);
            // for (var i = 0; i < aa.length; i++) {
            //     aa[i].style.color="#427DEF";
            // };
            // for (var i = 0; i < span1.length; i++) {
            //     span1[i].style.color="#427DEF";
            // };
        }
        lisnavss[i].onmouseout = function(){
            var list1rightbox = $(".list1rightbox",lisnavss[this.index])[0];
            list1rightbox.style.display = "none";
            var lisnums = $(lisnum,lisnavss[this.index])[0];
            var photos =$(".photo1",lisnums)[0];
            // photos.style.backgroundImage = "url(img/QQ.png)";
            // photos.style.backgroundPosition = "0 "+hh;
            var aa = $("a",lisnums);
            var span1 = $("span",lisnums);
            for (var i = 0; i < aa.length; i++) {
                aa[i].style.color="";
            };
            for (var i = 0; i < span1.length; i++) {
                span1[i].style.color="";
            };
        }
        
    }

}
listnav(".li1","5px");
// listnav(".li2","-25px");
// listnav(".li3","-58px");
// listnav(".li4","-90px");

// 头部的选项卡效果
var head = $("#head");
    var mytaobao = $(".mytaobao",head);
    for (var i = 0; i < mytaobao.length; i++) {
        mytaobao[i].onmouseover = function(){
            var mytaobao1 = $(".mytaobao1",this)[0];
            var aaa = $("a",this);
            for (var j = 0; j < aaa.length; j++) {
                aaa[j].onmouseover = function(){
                    this.style.textDecoration = "underline";
                    this.style.color = "#c40000";
                }
                aaa[j].onmouseout = function(){
                    this.style.textDecoration = "";
                    this.style.color = "";
                }
            }
            this.style.backgroundColor = "#fff";
            mytaobao1.style.display = "block";
        }
        mytaobao[i].onmouseout = function(){
            var mytaobao1 = $(".mytaobao1",this)[0];
            this.style.backgroundColor = "";
            mytaobao1.style.display = "none";
        }
    }
    mytaobao[2].onmouseover = function(){
        var mytaobao3 = $(".mytaobao3",this)[0];
        mytaobao3.style.display = "block";
    }
    mytaobao[2].onmouseout = function(){
        var mytaobao3 = $(".mytaobao3",this)[0];
        mytaobao3.style.display = "none";
    }

    mytaobao[3].onmouseover = function(){
        var mytaobao2 = $(".mytaobao2",this)[0];
        var aaa = $("a",this);
        for (var j = 0; j < aaa.length; j++) {
            aaa[j].onmouseover = function(){
                this.style.textDecoration = "underline";
                this.style.color = "#c40000";
            }
            aaa[j].onmouseout = function(){
                this.style.textDecoration = "";
                this.style.color = "";
            }
        }
        mytaobao2.style.display = "block";
        this.style.backgroundColor = "#fff";
    }

    mytaobao[3].onmouseout = function(){
        var mytaobao2 = $(".mytaobao2",this)[0];
        mytaobao2.style.display = "none";
        this.style.backgroundColor = "";
    }

    mytaobao[4].onmouseover = function(){
        var mytaobao4 = $(".mytaobao4",this)[0];
        mytaobao4.style.display = "block";
        this.style.backgroundColor = "#fff";
    }
    mytaobao[4].onmouseout = function(){
        var mytaobao4 = $(".mytaobao4",this)[0];
        mytaobao4.style.display = "none";
        this.style.backgroundColor = "";
    }

// 右边导航效果
var rightlist = $("#rightlist");
    var rr = $(".rr",rightlist);

    for (var i = 0; i < rr.length; i++) {
        rr[i].onmouseover = function(){
            var rrbox = $(".rrbox",this)[0];
            rrbox.style.display = "block";
            animate(rrbox,{right:35},200);
        }
        rr[i].onmouseout = function(){
            var rrbox = $(".rrbox",this)[0];
            animate(rrbox,{right:70},200,function(){
                rrbox.style.display = "none";
            });   
        }
    };
    var rr9 = $(".rr9",rightlist)[0];
    rr9.onmouseover = function(){
        var rrbox1 = $(".rrbox1",this)[0];
        rrbox1.style.display = "block";
    }
    rr9.onmouseout= function(){
        var rrbox1 = $(".rrbox1",this)[0];
        rrbox1.style.display = "none";
    }











});