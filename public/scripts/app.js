/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  $("#navButton").on("click", function(){
    $(".new-tweet").slideToggle({
      
    })
    $(".newTweetArea").focus();
  })

  $('.new-tweet').hide();


$(function(){  
const $form = $('form');
$form.on('submit', (event) => {
  event.preventDefault();
  console.log('Tweet submitting...');
  $('#error140').slideUp()
  $('#error0').slideUp()
  if($('.newTweetArea')[0].value.length > 140){
    $('#error140').slideDown()
    $(".newTweetArea").focus()
  } else if ($('.newTweetArea')[0].value.length === 0 || $('.newTweetArea')[0].value === "" || $('.newTweetArea')[0].value === undefined){
    $('#error0').slideDown()
    $(".newTweetArea").focus()
  } else {
  $.post('/tweets', $form.serialize())
  .then(function(res){
    loadTweets();
    $(".newTweetArea").focus().val("") 
  });
  }
});
});

const loadTweets = function(data) {
    $.ajax('/tweets',  { method: 'GET' })
    .then(function (res){
    renderTweets(res)
  });
  };

const data = [
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
$('.bodyTweets').empty()  
for(let tweet of tweets){
  let output = createTweetElement(tweet);
  $(`.bodyTweets`).prepend(output);
}
}

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


const createTweetElement = function(tweet) {
  let newDate = Date.now() - tweet.created_at
  let finalDate = newDate/1000/60/60/24
  let totalDate = Math.round(finalDate)
  
const $tweets = (
`<article class=tweet>
  <header>
    <span id="test"><img src=${tweet.user.avatars}>${tweet.user.name}</span>
    <span class="userName">${tweet.user.handle}</span>
  </header>
<div class="tweetBody">
${escape(tweet.content.text)}</div>
  <footer>
    <span>${totalDate} days ago</span>
    <div class="emojis"><span><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span></div>
  </footer>
</article>`);

return $tweets;
}

loadTweets()


renderTweets(data);
});









  