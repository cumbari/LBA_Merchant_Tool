
var service;
var target_id;
var rt_time;
var detection_mode;
var sequence_id;
var message={};


function getTD(){
device="rd";
service="payment";
// use SharedId if it exist, if not use storeId if it exists
// if either exists set shareId to 0

target_id="d76d54db2c04778a012c0477ef910029";
var uuid=UUID.genV4();
rt_time=0.4;
detection_mode="button";
sequence_id=1;
message={ 
"card": [{"cardId" : "visa"}, {"cardId" : "mc"}],
"target_id"  : "d76d54db2c04778a012c0477ef910029",
};

var card=message.card[0].cardId;
var card1=message.card[1].cardId;
document.getElementById('res1').innerHTML="<p>Sending.. " +  "</br>" + "Card: </br>" + card + " , " + card1;

getLocation();
}

function getLocation() {
// Get location no more than 1 minutes old. 60000 ms = 1 minutes.
        navigator.geolocation.getCurrentPosition(getTarget, showError, {enableHighAccuracy:true,maximumAge:60000,timeout:0});
}

function showError(error) {
       alert(error.code + ' ' + error.message);
}

function getTarget(position)
{
var mylat=position.coords.latitude;
var mylong=position.coords.longitude;
var myaccuracy=position.coords.accuracy;

xmlhttp=new XMLHttpRequest();
var url="rd_dps.php";
url=url+"?long=";
url=url+mylong;
url=url+"&lat="+ mylat;
url=url+"&acc="+ myaccuracy + "&service=" + service + "&device=" + device + "&target_id=" + target_id + "&rt_time=" + rt_time + "&detection_mode=" + detection_mode + "&sequence_id=" + sequence_id;
xmlhttp.open("POST",url,false);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(JSON.stringify(message));

xmlhttp=new XMLHttpRequest();
var url="rd_respons.php";
url=url+"?target_id=" + "d76d54db2c04778a012c0477ef910029";
xmlhttp.open("GET",url,false);
//setTimeout("xmlhttp.send()", 5000);
xmlhttp.send();

//document.getElementById('res2').innerHTML=xmlhttp.responseText;
var respons=JSON.parse(xmlhttp.responseText);
var service=respons.service;
var url=respons.url;
var posID=respons.posID;
var method=respons.method;
var merchant=respons.merchant;
var amount=respons.amount;
var accepturl="dps_pay/js/rd.js";
var orderid=respons.orderid;
var currency=respons.currency;
var test=respons.test;
var lang=respons.lang;
var md5key=respons.md5key;

//xmlhttp=new XMLHttpRequest();
//xmlhttp.open("POST",url,false);
//var parameters="merchant="+merchant+"&amount="+amount+"&accepturl="+accepturl+"&orderid="+orderid+"&currency="+currency+"&test="+test+"&lang="+lang+"&md5key="+md5key;
//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//xmlhttp.send(parameters);
//document.getElementById('res2').innerHTML=xmlhttp.responseText;
window.location.assign(url);
}
