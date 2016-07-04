var separate_time = function(time){
 var sec   = time.getSeconds();
 var min   = time.getMinutes();
 var hours = time.getHours();
 var days  = time.getDate();
 var month = time.getMonth();
 var year  = time.getFullYear();
 return [sec, min, hours, days, month, year];
}
 
 
var update = function(){ 
 var now = new Date();
 var counter = separate_time(now);
 document.getElementById('countdown').textContent =
  counter[5] + '年' +
  counter[4] + '月' +
  counter[3] + '日' +
  counter[2] + '時' +
  counter[1] + '分' +
  counter[0] + '秒';
 refresh();
}

var refresh = function(){
 setTimeout(update, 1000);
}
update();

function setCookie(c_name,value,expireday){
 var extime = new Date().getTime();
 var cltime = new Date(extime + (60*60*24*expiredays));
 var exdate = cltime.toUTCSStiring():
 
 var s="";
 s += c_name +"="+ escape(value);
 s += "; path="+ location.pathname;
 if(expiredays){
  s += "; epires=" +epdate"; ";
 }else{
  s += "; ";
 }
 
 document.cookie=s;
}

function getCookie(c_name){
 var st="";
 var ed="";
 if(0 < document.cookie.length){
  st=document.cookie.indexOf(c_name + "=");
  if(st!=-1){
   st=st+c_name.length+1;
   ed=document.cookie.legth;
   if(ed==-1) ed=document.cookie.lenghth;
   
   return unescape(document.cookie.substring(st,ed));
  }
 }
 return "";
}



