// Init
var myElements = document.getElementsByClassName("background-image");

if ((window.innerWidth / window.innerHeight) < 1.778){
    for(var counter = 0; counter < myElements.length; counter++){
        myElements[counter].style.height = "100%";
        myElements[counter].style.width = "unset";
    }
}

else if ((window.innerWidth / window.innerHeight) > 1.778){
    for(var counter = 0; counter < myElements.length; counter++){
        myElements[counter].style.height = "unset";
        myElements[counter].style.width = "100%";
    }
}

var myElements2 = document.getElementsByClassName("background-image2");

if ((window.innerWidth / window.innerHeight) < 1.778){
    for(var counter = 0; counter < myElements2.length; counter++){
        myElements2[counter].style.height = "100%";
        myElements2[counter].style.width = "unset";
    }
}

else if ((window.innerWidth / window.innerHeight) > 1.778){
    for(var counter = 0; counter < myElements2.length; counter++){
        myElements2[counter].style.height = "unset";
        myElements2[counter].style.width = "100%";
    }
}

window.addEventListener('resize', function(){
    var myElements = document.getElementsByClassName("background-image");

    if ((window.innerWidth / window.innerHeight) < 1.778){
        for(var counter = 0; counter < myElements.length; counter++){
            myElements[counter].style.height = "100%";
            myElements[counter].style.width = "unset";
        }
    }

    else if ((window.innerWidth / window.innerHeight) > 1.778){
        for(var counter = 0; counter < myElements.length; counter++){
            myElements[counter].style.height = "unset";
            myElements[counter].style.width = "100%";
        }
    }

    var myElements2 = document.getElementsByClassName("background-image2");

    if ((window.innerWidth / window.innerHeight) < 1.778){
        for(var counter = 0; counter < myElements2.length; counter++){
            myElements2[counter].style.height = "100%";
            myElements2[counter].style.width = "unset";
        }
    }

    else if ((window.innerWidth / window.innerHeight) > 1.778){
        for(var counter = 0; counter < myElements2.length; counter++){
            myElements2[counter].style.height = "unset";
            myElements2[counter].style.width = "100%";
        }
    }
});