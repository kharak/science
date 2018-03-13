/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
var navi=true;
var quizJson;
var questionNo=0;
var pixaImgUrl="https://pixabay.com/api/?key=7478283-f650c3f567f6b144653996ed8&safesearch=true&q=";
//var user = JSON.parse('{{ data | tojson}}');
  
 //var grade=user.grade;

 console.log(grade);
loadQuiz();



function openNav() {

  if(navi){
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    navi=false;
     }

     else

   {
     document.getElementById("sidenav").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
     navi=true;
   }

}

$('.options').css('background-color','grey').hover(
    function(){
        $(this).css('background-color','yellow');
    },
    function(){
        $(this).css('background-color','grey');
    });




function loadQuiz(){
 
      
      quizUrl="https://science4kids.herokuapp.com/exams/JSON";
      loadJson(quizUrl,loadQuizData);
}

$("img").click(function(){

  alert( "Dude again called." );
})

function loadJson(mUrl,cFunction){
  $.ajax({

    url:mUrl,
    //data: myData,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(html) {      
      
     //console.log(html[0][0].question);
      //$("#que").text(html[0][0].question);
      
      cFunction(html);

     },
    error: function() { alert('Failed!'); },
    //beforeSend: setHeader
});
}

function loadQuizData(jsonData){
  quizJson=jsonData
  console.log(jsonData[grade][questionNo].search);
  setQuesAndAns()
  var search=quizJson[grade][questionNo].search;
  var url=pixaImgUrl.concat(search);
  console.log(url);
  loadJson(url,loadImage);
  

}

function loadImage(jsonData){
 //console.log(jsonData);
  var imgUrl = jsonData["hits"][0]["webformatURL"];
  console.log(imgUrl);
  //setImage(imgUrl);
  //$("#search-image").attr('src',imgUrl);
  document.getElementById("displayimg").src=imgUrl;
  
}

function setQuesAndAns(){
  $("#que").text(quizJson[grade][questionNo].question);
  $("#o1").text(quizJson[grade][questionNo].option1);
  $("#o2").text(quizJson[grade][questionNo].option2);
  $("#o3").text(quizJson[grade][questionNo].option3);
  $("#o4").text(quizJson[grade][questionNo].option4);

}

//Handling when user click options by comparing right answer

$(".options").click(function(){
  var userOption=document.getElementById(this.id);
  var userAnswer=userOption.innerText.toUpperCase().trim();

  if(userAnswer==quizJson[grade][questionNo].answer.toUpperCase().trim())
  {
    userOption.style.background="green";
  }
  else
  {
    userOption.style.background="red";
  }

  setTimeout(function(){
    questionNo++;
    loadQuizData(quizJson);
    userOption.style.background="lightgrey";

  },2000)

  

  console.log(questionNo);
  console.log(userAnswer);


})


