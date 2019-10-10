//verifies that the number of characters of the tweet are within their paramaters

$(document).ready(function() {
  $('.newTweetArea').keyup('keyup' , function() {
    const text = $(this).val();
    const remainCharacters = 140 - text.length
    $(this).siblings('#counter').text(remainCharacters)
    
    if(remainCharacters >= 0){
      document.getElementById('counter').style.color = 'black' ;
    }

    if(remainCharacters < 0){
      document.getElementById('counter').style.color = 'red' ;
    } 
    
  
  })
});