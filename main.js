var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startclassification(){

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9iquqEt6C/model.json", modelready);
  
}

function modelready() {
    classifier.classify(got_results);
}

function got_results(error, results){

    if(error){
        console.error(error);
    }

    else{

        console.log(results)
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+r);
        console.log("Green "+g);
        console.log("Blue "+b);

        document.getElementById("animal_name").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("animal_voice_detected").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("animal_voice_detected").innerHTML = "Detected Voice Is Of - "+results[0].label;
    
img = document.getElementById("animal_img");

if(results[0].label == "Barking"){
img.src = "dog.gif";
dog = dog+1
document.getElementById("animal_name").innerHTML = "Detected Dog"+dog;
}

 else if(results[0].label == "Meowing"){
    img.src = "cat.gif";
    cat = cat+1
    document.getElementById("animal_name").innerHTML = "Detected Cat"+cat;
    }

   else if(results[0].label == "Roaring"){
        img.src = "lion.gif";
        lion = lion+1
        document.getElementById("animal_name").innerHTML = "Detected Lion"+lion;
        }

      else if(results[0].label == "Mooing"){
            img.src = "cow.gif";
            cow = cow+1
            document.getElementById("animal_name").innerHTML = "Detected Cow"+cow;
            }

            else{
                img.src = "ear.gif";
                background_noise = background_noise+1;
                document.getElementById("animal_name").innerHTML = "Detected Background Noise - "+ background_noise;
            }
    
    
    }}
