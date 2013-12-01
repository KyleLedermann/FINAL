function go_sms(call_sms){
  location.href = "sms:"+call_sms; 
}
   
function go_open(go_page){
   $.mobile.changePage("#" + go_page);
   if(go_page == 'page2')
   	  dispAllData();
}

/* Camera */
 var pictureSource;   // picture source
 var destinationType; // sets the format of returned value
 
/*
var color = '#f2f0f9';  
var line = 1;          
var className = '.board_list tr';
var length = $(className).length;
*/ 

// Wait for device API libraries to load
//
document.addEventListener("deviceready",onDeviceReady,false);

// device APIs are available
function onDeviceReady() {
    //camera
    pictureSource=navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;

    //network
    checkConnection();

    //geo location
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


