function uploadPhoto(imageURI) {
//alert(imageURI.substr(imageURI.lastIndexOf('/') + 1));
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";

    var params = {};
    params.value1 = document.getElementById("txtEventName").value;
    params.value2 = imageURI.substr(imageURI.lastIndexOf('/') + 1) + ".jpg";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI("http://mirannara.dothome.co.kr/A-team/upload.php"), win, fail, options);
}

function win(r) {
    //alert("upload successful" +  r.response);
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("Upload error image to server" + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
