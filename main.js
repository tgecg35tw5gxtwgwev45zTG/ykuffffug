var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHtml = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie"){
        console.log("take my selfie ---")
    }

         speak();
}
function speak(){
 var synth = window.speechSynthesis;

 speak_data = "Ok. Taking your selfie in 6 second. Say cheese.";

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);
 Webcam.attach(camera);

 setTimeout(function(){
     take_snapshot();
     save();
 }, 6000);
 var synth = window.speechSynthesis;

 speak_data = "Thankyou";

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}
