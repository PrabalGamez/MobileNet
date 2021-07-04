Webcam.set({
    width: 300,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});

Web = document.getElementById("result");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        Web.innerHTML = "<img id='snapshot' src=" + data_uri + ">"
    });
}

console.log("ML5 version:", ml5.version);

classifier = ml5.imageClassifier('MobileNet', Model_Loaded);

function Model_Loaded(){
    console.log("Model Loaded :)");
}



function check(){
    IMG = document.getElementById("snapshot");
    classifier.classify(IMG, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_name").innerHTML=result[0].label;
    }
}
