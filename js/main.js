// creating a total score variable to hold all of the points that will be displayed to the user
let totalScore = 0;
// creating an event listener that is using ONCLICK. That means, when the html code with id='submit' is CLICKED,
// which happens to be a button, then this function I am creating here will be activates
document.getElementById('submit').onclick = function() {

    // creating a varible called radios1. Inside of this variable I am using the DOCUMENT JS command which means that
    // I am targetting this html document. Then, the html that I want to retrieve is going to GETTHEELEMENTBYNAME and the html
    // code name='questionONE'. This means I now have the html code and can directly manipualte and interact with the HTML line
    // --> <input type="radio" id="r1" name="questionONE" value="0" checked="checked"> Not at all <br> ... Now, as there are
    // MULTIPLE of these, then radios1 becomes --> NodeList(4) [input#r1, input#r2, input#r3, input#r3].. and each of these
    // contain the html <input type="radio" id="r2" name="questionONE" value="0"> ... BUT!! the id= changes for each one.
    var radios1 = document.getElementsByName('questionONE');


    // as radios1 is a NODELIST, then I am interating over it. So, each element in that list has direct access to the html
    // with the element name='questionONE', but, depending on what I have checked will be change. because currently the id='r1' has
    // checked='checked' by default, BUT, this changes depending on what the user has selected. So, id='r3' might become checked instead
    // on the default id='r1' I created. 
    for (var radio1 of radios1) {

        // IF IT IS TRUE, that the html that I am currently iterating over has the CHECKED proerty, then execute this code
        if (radio1.checked) {

            //converting the string value that is stored in each input type radio to a number
            totalScore += Number(radio1.value);

            console.log(radio1) // prints .. <input type="radio" id="r3" name="rate" value="2" checked="checked">
            console.log(radio1.name); // this would print "rate"
            console.log(radio1.type); // this would print 'radio'
            break
        }
    }

    var radios2 = document.getElementsByName('questionTWO');
    for (var radio2 of radios2) {
        if (radio2.checked) { 
            totalScore += Number(radio2.value);
        }
    }

    var radios3 = document.getElementsByName('questionTHREE');
    for (var radio3 of radios3) {
        if (radio3.checked) {
            
            totalScore += Number(radio3.value);

        }
    }

    var radios4 = document.getElementsByName('questionFOUR');
    for (var radio4 of radios4) {
        if (radio4.checked) {
            
            totalScore += Number(radio4.value);

        }
    }

    var radios5 = document.getElementsByName('questionFIVE');
    for (var radio5 of radios5) {
        if (radio5.checked) {
            
            totalScore += Number(radio5.value);

        }
    }

    var radios6 = document.getElementsByName('questionSIX');
    for (var radio6 of radios6) {
        if (radio6.checked) {
            
            totalScore += Number(radio6.value);

        }
    }

    var radios7 = document.getElementsByName('questionSEVEN');
    for (var radio7 of radios7) {
        if (radio7.checked) {
            
            totalScore += Number(radio7.value);

        }
    }
    
    let htmlForScore = "<p> Your score is : " + totalScore + "<br>"; 

    if(totalScore <= 4  ){
        document.getElementById('show-user-score').innerHTML = htmlForScore + " Minimal anxiety </p> <br>";
    } else if (totalScore >= 5 && totalScore <= 9){
        document.getElementById('show-user-score').innerHTML = htmlForScore + " Mild anxiety </p> <br>";
    } else if (totalScore >= 10 && totalScore <= 14){
        document.getElementById('show-user-score').innerHTML = htmlForScore + " Moderate anxiety </p> <br>";
    } else{
        document.getElementById('show-user-score').innerHTML = htmlForScore + " Severe anxiety </p> <br>";
    }

//resetting the total score so if the user submits again, it won't add onto that  
totalScore = 0;
}

