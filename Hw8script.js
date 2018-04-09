function getrandomNum() {
    var randomNum;


    
    do
    {
        randomNum = Math.floor(Math.random() * 10);

    }
    while (randomNum === 0 || randomNum >= 4);  
    

    if (randomNum === 1)
    {
        document.getElementById("box1").className = "one";
    }

    else if (randomNum === 2)
    {
        document.getElementById("box1").className = "two";
    }

    else if (randomNum === 3)
    {
        document.getElementById("box1").className = "three";
    }


    

    do
    {
        randomNum = Math.floor(Math.random() * 10);

    }
     while (randomNum === 0 || randomNum >= 4)  
    


    if (randomNum === 1)
    {
        document.getElementById("box2").className = "one";
    }

    else if (randomNum === 2) {
        document.getElementById("box2").className = "two";
    }

    else if (randomNum === 3)
    {
        document.getElementById("box2").className = "three";
    }



    

    do
    {
        randomNum = Math.floor(Math.random() * 10);

    }
    while (randomNum === 0 || randomNum >= 4)  
    


    if (randomNum === 1)
    {
        document.getElementById("box3").className = "one";
    }

    else if (randomNum === 2)
    {
        document.getElementById("box3").className = "two";
    }

    else if (randomNum === 3)
    {
        document.getElementById("box3").className = "three";
    }



    var b1Class = document.getElementById("box1").className;
    var b2Class = document.getElementById("box2").className;
    var b3Class = document.getElementById("box3").className;




    if (b1Class === b2Class && b2Class === b3Class)
    {
        document.getElementById("msg").innerHTML = "So you won...want a cookie?"
    }

    else
    {
        document.getElementById("msg").innerHTML = "Sorry you lost...please enter more money! (sucka)"
    }

}





















