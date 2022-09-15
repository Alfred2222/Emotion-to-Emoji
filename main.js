Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach(camera);

function capture_img(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>"
})
}

console.log('ml5 version',ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UwSTlzY65/model.json',modelLoaded)

function modelLoaded(){
    console.log("model loaded")
}

function speak(){
synth=window.speechSynthesis;
speak_data1="The first Prediction is"+prediction_1
speak_data2="the second prediction is"+prediction_2
utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utterthis)

}

function show_result(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResults)
}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results)
document.getElementById("result_emotion_name1").innerHTML=results[0].label
document.getElementById("result_emotion_name2").innerHTML=results[1].label

prediction_1=results[0].label
prediction_2=results[1].label
speak()

if(prediction_1=="Happy"){
    document.getElementById("update_emoji1").innerHTML="&#128512;"
}

if(prediction_1=="sad"){
    document.getElementById("update_emoji1").innerHTML="&#128546;"
}

if(prediction_1=="disappointed"){
    document.getElementById("update_emoji1").innerHTML="&#128532;"
}

if(prediction_1=="blushed"){
    document.getElementById("update_emoji1").innerHTML="&#128522"
}

if(prediction_1=="angry"){
    document.getElementById("update_emoji1").innerHTML="&#128548;"
}

if(prediction_1=="very angry"){
    document.getElementById("update_emoji1").innerHTML="&#128545;"
}


if(prediction_2=="Happy"){
    document.getElementById("update_emoji2").innerHTML="&#128512;"
}

if(prediction_2=="sad"){
    document.getElementById("update_emoji2").innerHTML="&#128546;"
}

if(prediction_2=="disappointed"){
    document.getElementById("update_emoji2").innerHTML="&#128532;"
}

if(prediction_2=="blushed"){
    document.getElementById("update_emoji2").innerHTML="&#128522"
}

if(prediction_2=="angry"){
    document.getElementById("update_emoji2").innerHTML="&#128548;"
}

if(prediction_2=="very angry"){
    document.getElementById("update_emoji2").innerHTML="&#128545;"
}
}
}
