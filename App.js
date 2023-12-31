function open(){
    window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
    // Get the current URL
    const currentURL = window.location.href;

    // Navigate to a different URL
    window.location.assign("index.html");

    // Reload the current page
    window.location.reload();

    // Replace the current page with a new URL
    window.location.replace("index.html");

    });
    
  

}

open();

var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to my website'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'How can I help?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'What are your opening hours?',
        value: 'hours'
      },
      {
        text: 'What do you do?',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'That’s a good one! This is a website, it’s always open.';
  }
  else if (res.value === "do") {
    message = 'I’m a product-focused Scrum master<br><br>I also have a keen interest in chatbots and web analytics';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Cool!',
        value: 'cool'
      }
    ]
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'I know! Thanks.'
  });
});


