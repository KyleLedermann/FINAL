/* 

Date : 2013-10-31
Creater : Jimin
Description : This is javascript to Add Event.

*/

//validation check
function addEvent() {

    
    var txtEvent = document.getElementById("txtEventName");
    var txtRegister = document.getElementById("txtRegister");
    var txtStartDate = document.getElementById("txtStartDate");
    var txtEndDate = document.getElementById("txtEndDate");
    var txtLocation = document.getElementById("txtLocation");
    var txtDescription = document.getElementById("txtDescription");
    var txtPassword = document.getElementById("txtPassword");
    var image = document.getElementById('largeImage').src;
    image = image.substr(image.lastIndexOf('/') + 1);
    //alert(image);

    if (txtEvent.value == "") {
        alert("plz enter EventName");
        return false;
    }
    else if (txtRegister.value == "") {
        alert("plz enter RegisterName");
        return false;
    }
    else if (txtStartDate.value == "") {
        alert("plz enter StartDate");
        return false;
    }
    else if (txtEndDate.value == "") {
        alert("plz enter EndDate");
        return false;
    }
    else if (txtLocation.value == "") {
        alert("plz enter Location");
        return false;
    }
    else if (txtDescription.value == "") {
        alert("plz enter Description");
        return false;
    }
    else if (txtPassword.value == "") {
        alert("plz enter Password");
        return false;
    }
    else if (image == "page3") {
        alert("plz attach Image");
        return false;
    }
    else {
        uploadPhoto(document.getElementById('largeImage').src);
        inData();
        
        //go_open('page2');
        
    }
}
//Save data to the server 
function inData() {

    var Event = document.getElementById("txtEventName");
    var Register = document.getElementById("txtRegister");    
    var Mobile = document.getElementById("txtMobile");
    var StartDate = document.getElementById("txtStartDate");
    var EndDate = document.getElementById("txtEndDate");
    var Location = document.getElementById("txtLocation");
    var Description = document.getElementById("txtDescription");
    var Password = document.getElementById("txtPassword");
    var Image = document.getElementById('largeImage').src ;

    //Image = Event + "_" + Image.substr(Image.lastIndexOf('/') + 1);
    Image = Image.substr(Image.lastIndexOf('/') + 1) +'.jpg';

    var pageMethod = "http://mirannara.dothome.co.kr/A-team/insert.php?Event='" + Event.value + "'"
        + "&Register='" + Register.value + "'"
        + "&Mobile='" + Mobile.value + "'"
        + "&StartDate='" + StartDate.value + "'"
        + "&EndDate='" + EndDate.value + "'"
        + "&Location='" + Location.value + "'"
        + "&Description='" + Description.value + "'"
        + "&Password='" + Password.value + "'"
        + "&Image='" + Image + "'";

        $.ajax({type: "GET", url:pageMethod, timeout: 5000, dataType:"json",
        success:function(data) {
            if (data.myJson == "err"){
                alert("failed");
                return false;
            } else {
                alert("saved:");
                return true;
            }
        },   
        error: function (xhr, status, error) {
            if (status == "timeout") {
                alert("failed due to timeout");
            } else {
                alert("saved::");
                //alert(xhr + " " + status + " " + error + "plz Check wifi-connection");
            }
        } 
    });
    //dispAllData();
    //go_open("page2");
}


function dispAllData() {

   
    var list = document.getElementById("EventList");

    var pageMethod = "http://mirannara.dothome.co.kr/A-team/list.php";

    $.ajax({
        type: "GET", url: pageMethod, timeout: 5000, dataType: "json",
        success: function (data) {
            if (data.myJson == "err") {
                alert("failed");
                return false;
            } else {
                var itemsu = data.myJson.length;
                var ss = "";
                ss += "<table><tr><th>Event</th><th>Date</th></tr>";

                for (var c = 0; c < itemsu; c++) {
                    ss += "<tr><td width='60%' bgcolor='white'><a href='#' onclick='dispEventData(" + data.myJson[c].id + ")'>&nbsp;"
                       + data.myJson[c].EventName + "</a></td><td align='center'>" + data.myJson[c].RegDate + "</td></tr>";                   
                }
                ss += "</table>";
                list.innerHTML = ss;
            }
        },
        error: function (xhr, status, error) {
            if (status == "timeout") {
                alert("failed due to timeout");
            } else {
                alert(xhr + " " + status + " " + error + "failed calling server");
            }
        }
    });



}




