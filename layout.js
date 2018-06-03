//the function inside ready is called a callback function
//the callback function is invoked or called when the meathod that gives it is finished
//in this case, when the document is ready
$(document).ready(function(){
    console.log(document);

    $(".button").on("click", function(event){
        $(".quiz-div").empty(); 
        $(".quiz-div").css("height", "1075px");
        $(".quiz-div").append('<img id="title" src="https://fontmeme.com/permalink/180529/6fbfbac27e1a30de9e0540996112fed0.png"/>');  
        $("#title").css({
            "position": "relative",
            "bottom": "70px",
            "padding-left": "27%"        
        });        
    });

    

    $(".button").on("click", function(event){
        $(".quiz-div").append('<img id="goku" src="https://venue-forum-prod.s3-us-west-2.amazonaws.com/_imported_profiles/_1364927_goku1-150x1501.jpg"/>');
        $("#goku").css({
            "position": "relative",
            "right" : "813px"    
        });
    
        $(".quiz-div").append('<img id="ssgohan" src="https://i.pinimg.com/564x/e6/a9/22/e6a922140fcf5dd69101db3b857cc449--goku-super-super-saiyan.jpg"/>');
        $("#ssgohan").css({
            "position": "relative",
            "left" : "64px"    
        });

        $(".quiz-div").append('<img id="scoutervegeta" src="https://artprepare.com/wp-content/uploads/2017/07/dragon-ball-z-kai-01-150x150.jpg"/>');
        $("#scoutervegeta").css({
            "position": "relative",
                
        });

        $(".quiz-div").append('<img id="trunksgoten" src="https://artprepare.com/wp-content/uploads/2017/07/dragon-ball-z-goten-and-trunks-01-150x150.jpg"/>');
        $("#trunksgoten").css({
            "position": "relative",
            "top" : "153px",  
            "right" : "150px" 
        });

        $(".quiz-div").append('<img id="vegeta" src="https://artprepare.com/wp-content/uploads/2017/07/dragon-ball-z-vegeta-fabric-poster-01-150x150.jpg"/>');
        $("#vegeta").css({
            "position": "relative",
            "left" : "727px", 
            
        });

        $(".quiz-div").append('<img id="kingkai" src="http://nailshops.info/wp-content/uploads/2018/05/dragon-ball-z-tattoo-designs-lovely-pin-by-wc2a2nia-vasconcelos-on-dragon-ball-z-pinterest-of-dragon-ball-z-tattoo-designs-150x150.jpg"/>');
        $("#kingkai").css({
            "position": "relative",
            "left" : "577px", 
            "top": "155px"
        });

        $(".quiz-div").append('<img id="saiyans" src="http://tattyfraney.com/wp-content/uploads/2017/06/impressive-dragon-ball-z-poster-and-incredible-ideas-of-jul152666-150x150.jpg"/>');
        $("#saiyans").css({
            "position": "relative",
            "right" : "600px", 
            "top": "307px"
        });
        
        $(".quiz-div").append('<img id="manycharacters" src="http://www.thesolesaver.com/wp-content/uploads/2017/06/dragonball-z-online-features-150x150.png"/>');
        $("#manycharacters").css({
            "position": "relative",
            "right" : "750px", 
            "top": "461px"
        });

        $(".quiz-div").append('<img id="broly" src="https://www.hdwall.xyz/wp-content/uploads/2018/04/hdwall.xyz-Broly-Dragon-Ball-Z-Artwork-4K995093627-150x150.jpg"/>');
        $("#broly").css({
            "position": "relative",
            "left" : "127px", 
            "top": "310px"
        });

        $(".quiz-div").append('<img id="nameksaga" src="http://tattyfraney.com/wp-content/uploads/2017/05/marvelous-dragon-ball-z-posters-7-150x150.jpg"/>');
        $("#nameksaga").css({
            "position": "relative",
            "left" : "", 
            "top": "462px"
        });
    
        $(".quiz-div").append('<img id="zarbon" src="https://78.media.tumblr.com/52f32440428fa2e4a786e523b241b6e1/tumblr_oqb0w9rZk51uuj1vto6_250.png"/>');
        $("#zarbon").css({
            "position": "relative",
            "right" : "150px", 
            "top": "616px"
        });
        
        $(".quiz-div").append('<img id="raditz" src="https://amazingpict.com/wp-content/uploads/2015/04/dragon-ball-z-episodes-150x150.jpg"/>');
        $("#raditz").css({
            "position": "relative",
            "left" : "727px", 
            "top": "463px"
        });

        $(".quiz-div").append('<img id="frieza" src="https://78.media.tumblr.com/ffb6dc53b25d72c540ac839d9ed7548a/tumblr_oqb0w9rZk51uuj1vto2_250.png"/>');
        $("#frieza").css({
            "position": "relative",
            "left" : "577px", 
            "top": "310px"
        });

        $(".quiz-div").append('<img id="yamcha" src="https://78.media.tumblr.com/d0943071fa3f8f8c57eb295921394749/tumblr_oqb0w9rZk51uuj1vto1_250.png"/>');
        $("#yamcha").css({
            "position": "relative",
            "left" : "427px", 
            "top": "616px"
        });

    
    });


        var total = 6;
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

    

    $(".button").on("click", function(event){
        $(".quiz-div").append('<span class="questions"></span>');    
        $(".questions").append('<form id="quiz" name="quizForm"></form>');
        $("#quiz").css({
            "text-align": "center",
            "color" : "#f85b1a",
            "position" : "relative",
            "bottom" : "335px"
            
        });

        //display timer in html
    
        $("#quiz").append('<div id ="show-number">show-number</div>'); 
        
        //start timer number

        var number = 180; 
        var intervalId;

        //create a run function

        function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);    
        }

        //create a decrement function that decreases the seconds by 1
        function decrement() {
            number--;

            //show the number on the page
            $("#show-number").html("<h2>" + number + "</h2>")

            //condition for when timer reaches 0
            if(number === 0) {
                stop();
                alert("Time is up! Click submit now!")
            }


        }

        function stop(){
            clearInterval(intervalId);
        }

        run();
        
        //adding all of the images around the questions form

        $("#quiz").append('<h2>What is the Saiyan name given to Goku?</h2>');
        $("#quiz").append('<input id="multiplechoice1" type="radio" name="question1" value="Turles">Turles');
        $("#quiz").append('<input id="multiplechoice2" type="radio" name="question1" value="Kakarot">Kakarot');
        $("#quiz").append('<input id="multiplechoice3" type="radio" name="question1" value="Goku">Goku');
        $("#quiz").append('<input id="multiplechoice4" type="radio" name="question1" value="Bardock">Bardock');

        $("#quiz").append('<br><br>')
        $("#quiz").append('<br><br>')

        $("#quiz").append('<h2>When Goku fought Nappa, what was his power level according to Vegeta?</h2>');
        $("#quiz").append('<input id="multiplechoice1" type="radio" name="question2" value="Over 7,000">Over 7,000');
        $("#quiz").append('<input id="multiplechoice2" type="radio" name="question2" value="Over 8,000">Over 8,000');
        $("#quiz").append('<input id="multiplechoice3" type="radio" name="question2" value="Over 9,000">Over 9,000');
        $("#quiz").append('<input id="multiplechoice4" type="radio" name="question2" value="Over 10,000">Over 10,000');

        $("#quiz").append('<br><br>')
        $("#quiz").append('<br><br>')

        $("#quiz").append('<h2>What is the name of the Highschool that Gohan attends during the Buu Saga?</h2>');
        $("#quiz").append('<input id="multiplechoice1" type="radio" name="question3" value="Orange Star Highschool">Orange Star Highschool');
        $("#quiz").append('<input id="multiplechoice2" type="radio" name="question3" value="Orange Ball Highschool">Orange Ball Highschool');
        $("#quiz").append('<input id="multiplechoice3" type="radio" name="question3" value="West City Highschool">West City Highschool');
        $("#quiz").append('<input id="multiplechoice4" type="radio" name="question3" value="East City Highschool">East City Highschool');

        $("#quiz").append('<br><br>')
        $("#quiz").append('<br><br>')

        $("#quiz").append('<h2>Majin Boo became Fat Boo by absorbing which Kai?</h2>');
        $("#quiz").append('<input id="multiplechoice1" type="radio" name="question4" value="West Supreme Kai">West Supreme Kai');
        $("#quiz").append('<input id="multiplechoice2" type="radio" name="question4" value="North Supreme Kai">North Supreme Kai');
        $("#quiz").append('<input id="multiplechoice3" type="radio" name="question4" value="Grand Supreme Kai">Grand Supreme Kai');
        $("#quiz").append('<input id="multiplechoice4" type="radio" name="question4" value="South Supreme Kai">South Supreme Kai');

        $("#quiz").append('<br><br>')
        $("#quiz").append('<br><br>')

        $("#quiz").append('<h2>What maximum gravity did Vegeta train under during the 3 year pre-android saga?</h2>');
        $("#quiz").append('<input id="multiplechoice1" type="radio" name="question5" value="450g">450g');
        $("#quiz").append('<input id="multiplechoice2" type="radio" name="question5" value="300g">300g');
        $("#quiz").append('<input id="multiplechoice3" type="radio" name="question5" value="400g">400g');
        $("#quiz").append('<input id="multiplechoice4" type="radio" name="question5" value="410g">410g');

        $("#quiz").append('<br><br>')
        $("#quiz").append('<br><br>')

        $("#quiz").append('<h2>What is the only move, technique, or fighting form that Goku learned himself?</h2>');
        $("#quiz").append('<input id="multiplechoice1" type="radio" name="question6" value="Instant Transmission">Instant Transmission');
        $("#quiz").append('<input id="multiplechoice2" type="radio" name="question6" value="Kamehameha">Kamehameha');
        $("#quiz").append('<input id="multiplechoice3" type="radio" name="question6" value="Super Saiyan">Super Saiyan');
        $("#quiz").append('<input id="multiplechoice4" type="radio" name="question6" value="Spirit Bomb">Spirit Bomb');

        
    });
    
    $(".button").on("click", function(event){
        $("#quiz").append('<div class="submit-button">Submit</div>'); 
        $(".submit-button").css({
            "text-align": "center",
            "color" : "#f85b1a",
            "margin-top": "50px",
            "font-size": "20px",
            "border": "4px solid #f85b1a",
            "border-radius": "25px",
            "padding": "10px",
            "margin-left": "510px",
            "margin-right": "520px" 
            
        }); 


    $(".submit-button").on("click", function(event){
        
        
        
        //now we use the html form that was created and appended record the value for the users answer the user selects.

        var question1 = document.forms['quizForm']['question1'].value;
        var question2 = document.forms['quizForm']['question2'].value;
        var question3 = document.forms['quizForm']['question3'].value;
        var question4 = document.forms['quizForm']['question4'].value;
        var question5 = document.forms['quizForm']['question5'].value;
        var question6 = document.forms['quizForm']['question6'].value;

        //now we check and make sure that all the questions are answered and if they're not we tally an unanswered.

        for(var i = 1; i <= total; i++) {

            if(eval('question' + i) === null || eval('question' + i) == '') {
            unanswered++;
            }
        }

        

        //now make an array of the right answers and check them with the users recorded answer value

        var answers=["Kakarot", "Over 9,000", "Orange Star Highschool", "Grand Supreme Kai", "450g", "Super Saiyan"];

        //create a loop that checks every answer recorded in the form against the index of the array above(make sure to subtract 1 from the variable i that you set as 1 because index starts at 0 not 1)

        for(var i = 1; i <= total; i++) {
            
            if(eval('question' + i) == answers[i - 1]) {
                correct++;
            }
    
            else if(eval('question' + i) !== answers[i - 1] && (eval('question' + i) !== null || eval('question' + i) !== '') )  {
                incorrect++;
            }
        }

        

    });


    $(".submit-button").on("click", function(event){
            console.log("submit-button") 
            $(".quiz-div").empty(); 
        $(".quiz-div").css("height", "650px");
        $(".quiz-div").append('<img id="title" src="https://fontmeme.com/permalink/180529/6fbfbac27e1a30de9e0540996112fed0.png"/>');  
        $("#title").css({
            "position": "relative",
            "top": "25px",
            "padding-left": "27%"        
        });

        $(".quiz-div").append('<div class="results"></div>'); 
        $(".results").css({
            "text-align": "center",
            "color" : "#f85b1a", 
            "padding-top": "80px"              
        });

        $(".results").append('<h2 id="congrats">Congratulations on completing the quiz! Your results are below.</h2>');
        $(".results").append('<h2 id="correct">Correct Answers:</h2>');
        $(".results").append('<h2 id="incorrect">Incorrect Answers:</h2>');
        $(".results").append('<h2 id="unanswered">Unanswered:</h2>');

        $("#correct").html("Correct Answers: " + correct);
        $("#incorrect").html("Incorrect Answers: " + incorrect);
        $("#unanswered").html("Unanswered: " + unanswered);

        $(".quiz-div").append('<img id="dragonball" src="http://www.remyfioretti.com/images/full/shenron-banner.jpg"/>');
        $("#dragonball").css({
            "display": "block",
            "margin-left": "auto",
            "margin-right": "auto",
            "height": "300px"


        });
        
    });







    });
    


    

    





});

//empty the divs that you want to put your questions into
//append the new html into that div


//for submit, same as above just add incorrect and correct and score


 
