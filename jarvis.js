    document.addEventListener("DOMContentLoaded", function() {
      var messagesContainer = document.getElementById("messages-container");
      var userInput = document.getElementById("user-input");
      var sendButton = document.getElementById("send-button");
      var currentTime = new Date().toLocaleTimeString();
      var currentDate = new Date().toLocaleDateString();
      var maxMessages = 1;

      var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var currentDateObj = new Date();
      var currentDay = daysOfWeek[currentDateObj.getDay()];

      function addMessage(message, sender) {
        var messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender + "-message");
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);

        // Scroll to the bottom of the messages container
        if (messagesContainer.childElementCount > maxMessages) {
          messagesContainer.removeChild(messagesContainer.firstChild);
        }

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }

      function processUserInput() {
        var userMessage = userInput.value;
        addMessage(userMessage, "user");
        userInput.value = ""; // Clear the input field

        // Ice breakers or General Questions
        var botMessage;
        if (userMessage.toLowerCase().includes("hello")) {
          botMessage = "Hello! How can I assist you?";
        } else if (userMessage.toLowerCase().includes("hi")) {
          botMessage = "Hello! How can I assist you?";
        } else if (userMessage.toLowerCase().includes("how are you")) {
          botMessage = "I am doing great, and you?";
        } else if (userMessage.toLowerCase().includes("good")) {
          botMessage = "That is great! Do you have any questions for me?";
        } else if (userMessage.toLowerCase().includes("weather")) {
          botMessage = "It is Overcast today";
        } else if (userMessage.toLowerCase().includes("time")) {
          botMessage = "The current time is: " + currentTime;
        } else if (userMessage.toLowerCase().includes("date")) {
          botMessage = "Today's date is: " + currentDate;
        } else if (userMessage.toLowerCase().includes("gay")) {
          botMessage = "I am not capable of understanding what 'gay' means.";
        } else if (userMessage.toLowerCase().includes("alive")) {
          botMessage = "What really is living, but no, I am not alive...";
        } else if (userMessage.toLowerCase().includes("sad")) {
          botMessage = "How can I make you feel better?";
        } else if (userMessage.toLowerCase().includes("music")) {
          botMessage = "I like all types. What about you?";
        } else if (userMessage.toLowerCase().includes("ai")) {
          botMessage = "I am an not an AI.";
        } else if (userMessage.toLowerCase().includes("day")) {
          botMessage = "Today is " + currentDay + ".";
        } 
        
        
        // categories , sports , music , food, etc; //
        
        //icebreakers // 
        else if (userMessage.toLowerCase().includes("name"))   {
            botMessage = "My name is Jarvis"; 
        }
        else if (userMessage.toLowerCase().includes("help"))   {
            botMessage = "Please tell me how I can help you"; 
        }     
          else if (userMessage.toLowerCase().includes("how old are you"))   {
            botMessage = "I am not living so I don't have an age"; 
        } 
        
        //favorites// 
        
        else if (userMessage.toLowerCase().includes("favorite food"))   {
            botMessage = "A nice juicy CheeseBurger, or a steak!"; 
        }     
        else if (userMessage.toLowerCase().includes("favorite band"))   {
            botMessage = "Ouu, I think I like Queen the best"; 
        }     
        else if (userMessage.toLowerCase().includes("favorite sport"))   {
            botMessage = "I like football, basketball, and golf"; 
        }     
        else if (userMessage.toLowerCase().includes("favorite place"))   {
            botMessage = "I like Europe, Asia, and North America"; 
        }     
        else if (userMessage.toLowerCase().includes("favorite drink"))   {
            botMessage = "I like Celsius Energy Drinks, nothing else"; 
        }     
        else if (userMessage.toLowerCase().includes("favorite movie"))   {
            botMessage = "There are too many to choose from!"; 
        }     
        //math solving//
    else if (/^(?:[Ww][Hh][Aa][Tt]'?[Ss]?|[Ww][Hh][Aa][Tt]\s+is\s+)?[-+*/.\d\s()]+$/.test(userMessage)) {
  try {
    var problem = userMessage.replace(/^(?:[Ww][Hh][Aa][Tt]'?[Ss]?|[Ww][Hh][Aa][Tt]\s+is\s+)/i, "").trim();
    var result = eval(problem);
    botMessage = "The solution is: " + result;
  } catch (error) {
    botMessage = "Sorry, I couldn't solve that math problem.";
  }
} else {
          botMessage = "I'm sorry, I don't understand. Can you please rephrase?";
        }
        addMessage(botMessage, "bot");
      }

      sendButton.addEventListener("click", function() {
        processUserInput();
      });

      userInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          processUserInput();
        }
      });
    });
