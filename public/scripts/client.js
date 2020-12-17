
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Fake data taken from initial-tweets.json
 const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },

    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" 
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
] 

$("#tweetForm").on('submit', (function(event) {

    event.preventDefault(); 
  
    const form = $(this);
    const url = "http://localhost:8080/tweets";
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), 
        success: function(data){
            console.log("succes");
        }
      })
      .then((data) => {
        $.each(data, (index, tweet) => {
            $('#tweet').append(createTweetElement(tweet));
        });  
       })
      .catch((err) => {console.log(err)
        });
 
}));

//const renderTweets = (showArr) => {
const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    //$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
    $.each(data, (index, tweet) => {
        $('#tweet').append(createTweetElement(tweet));
    });  
}    

const createTweetElement = function(tweet) {

    console.log(tweet);
    let $tweet = `<article class="article"><header class='tweet-header'>
                    <div><img src=${tweet.user.avatars}>
                    <div>${tweet.user.avatars}</div>
                 </header>
                 <div class='tweet-body'>${tweet.content.text}</div>
                 <footer class='tweet-footer'>
                    <div>${tweet.created_at}</div>
                    <div><img src='/images/retweet-solid.resized.svg' class='floatRight'> </div>
                 </footer></article>`;
    /* Your code for creating the tweet element */
    // ...
    console.log($tweet)
    return $tweet;
  }

//Fetching tweets with Ajax
$(document).ready(function() { 
    function loadTweets(){ 
   $.ajax({ 
     type: 'GET', 
     url: 'http://localhost:8080/tweets', 
     data:{}, 
     dataType: 'json',
     success: function (data) { 
         $.each(data, function(index, element) {
             console.log(element);
             /*$('body').append($('<div>', {
                 text: element.name
             }));*/
             renderTweets(element)
         });
     }
   })
    }
    loadTweets()
    //renderTweets(data);

});


  /*$(document).ready(function() {
    renderTweets(data);
  
  });*/
