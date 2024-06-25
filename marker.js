status="";

function preload(){
    img=loadImage("download (5).jpg");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    objectDetector=ml5.objectDetection(img, modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

}

function modelLoaded(){
    status="true";
    console.log("Model is Loaded");
    objectDetector.detect(img, gotResult);
    
    
}
function gotResult(error, results){
    if(error){
        console.log(error)

    }
    console.log(results)
}