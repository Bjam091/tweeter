/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

function createTweetElement(tweetData){
  return `<article class=tweet>
  <header>
    <span id="test"><img src=${tweetData.user.avatars}>${tweetData.user.name}</span>
    <span class="userName">${tweetData.user.handle}</span>
  </header>
<div class="tweetBody">
${tweetData.content.text}</div>
  <footer>
    <span>${tweetData.created_at}</span>
    <span><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
  </footer>
</article>`
}

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.bodyTweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc

});