$(document).ready(function() {
  $('.newTweetArea').keyup('keyup' , function() {
    const text = $(this).val();
    const remainCharacters = 140 - text.length
    const characterUpdate = $(this).siblings('#counter').text(remainCharacters)
    

    if(remainCharacters < 0){
      document.getElementById('counter').style.color = 'red' ;
    } 
  
  })
});