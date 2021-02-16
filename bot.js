function answerQuery(query) {
  query = query.toLowerCase();
  if (query.indexOf("football") != -1 || query.indexOf("sports") != -1 || query.indexOf("stadium") != -1)
    return "I do not care too much about sports, I'm locked inside a data center.";
  return "Sorry Dave, I cannot do that."

  
}


function handleSayClick() {
  // We first get the 'message' that the user entered and 'conversation' element
  // which we are using for showing all the conversation history
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  
  // Get answer for the given query and show the query & answer
  var answer = answerQuery(message)
  conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
}


document.getElementById("sayit").onclick = handleSayClick;