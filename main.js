//https://teachablemachine.withgoogle.com/models/x9wYWomIh/

Webcam.set({
    width:350,
    height:400,
image_format:"png",
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach(camera)
function takepicture(){
 Webcam.snap(function(data_uri){
document.getElementById("image").innerHTML="<img id='img' src="+data_uri+">"  
})
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x9wYWomIh/model.json",modelLoaded)
function modelLoaded(){
    console.log("model Loaded")
}
function identifyimage(){
    image=document.getElementById("img")
    classifier.classify(image,gotResult)
}
function gotResult(error,results){
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("object").innerHTML=results[0].label
        document.getElementById("acurracy").innerHTML=results[0].confidence.toFixed(2)
    }
}
