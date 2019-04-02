
const friends= [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
       
      ]
  },
  {
    "name":"Micheal",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        
      ]
  },
  {
    "name":"Jason",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
       
      ]
  },
  {
    "name":"Milly",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
      
      ]
  },
  {
    "name":"Joey",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
    
  ]}
]
  

$(".submit").on("click", function (event) {
  event.preventDefault();

  // Here we grab the form elements
  var user1Input = {
      question1: $("#question1").val().trim(),
      question2: $("#question2").val().trim(),
      question3: $("#question3").val().trim(),
      question4: $("#question4").val().trim(),
      question5: $("#question5").val().trim(),
      question6: $("#question6").val().trim(),
      question7: $("#question7").val().trim(),
      question8: $("#question8").val().trim(),
      question9: $("#question9").val().trim(),
      question10: $("#question10").val().trim(),
  };

  console.log(user1Input);

  
  $.post("/api/survey", user1Input,
  function () {

      // If a table is available... tell user they are booked.
      

      // Clear the form when submitting
      $("#reserve-name").val("");
      $("#reserve-phone").val("");
      $("#reserve-email").val("");
      $("#reserve-unique-id").val("");

  });

});