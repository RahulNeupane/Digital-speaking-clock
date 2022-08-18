let session = document.getElementById('session');

function displayTime(){
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    
    if(hrs>=12){
        hrs = hrs - 12;
        hrs = 0 +''+ hrs;
        session.innerHTML = "PM"
    }
    else{
        session.innerHTML = "AM"
    }
    if(min<10){
        min =  0 +''+ min;
    }
    if(sec<10){
        sec =  0 +''+ sec;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;    
    
}

setInterval(displayTime,10);




window.addEventListener('load',speakingClock);


function speakingClock(){
    const sound = new Date();
    let am = sound.getHours();

    if(am >= 12){
        am = am - 12;
        session.innerHTML = "PM"
    }
    else{
        session.innerHTML = "AM"
    }
    let msg = "The time is " + am + ' ' + sound.getMinutes()  + ' ' + session.innerHTML;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1; 
    speech.rate = 0.6; 
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    // let utterance = new SpeechSynthesisUtterance(msg);
    // speechSynthesis.speak(utterance)
}