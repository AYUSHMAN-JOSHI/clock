let displayTime = () =>{
    let time = new Date();
    let hours = time.getHours(), minutes = time.getMinutes(), seconds = time.getSeconds();
    let session = document.getElementById('session');

    if(hours > 12){
        session.innerHTML = 'PM';
        hours = hours - 12;
    }

    else{
        session.innerHTML = 'AM';
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(hours < 10){
        hours = '0' + hours;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(displayTime, 10);