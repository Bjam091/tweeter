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
  if($('.newTweetArea')[0].value.length > 140){
    alert("Your tweet is too big there!")
  } else if ($('.newTweetArea')[0].value.length === 0 || $('.newTweetArea')[0].value === "" || $('.newTweetArea')[0].value === undefined){
    alert("Your tweet has no content")
  } else {
  $.post('/tweets', $form.serialize())
  .then(function(res){
    loadTweets();
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
  // {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png"
  //     ,
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // },
  // {
  //   "user": {
  //     "name": "Descartes",
  //     "avatars": "https://i.imgur.com/nlhLi3I.png",
  //     "handle": "@rd" },
  //   "content": {
  //     "text": "Je pense , donc je suis"
  //   },
  //   "created_at": 1461113959088
  // }
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

// const timeStamp = function(str) {
// let newDate = Date.now() - tweet.created_at
// let finalDate = newDate/1000/60/60/24
// return
// }




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
    <span><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
  </footer>
</article>`);

return $tweets;
}

loadTweets()


renderTweets(data);
});









  