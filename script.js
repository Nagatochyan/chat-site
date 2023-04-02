const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// メッセージを送信する関数
function sendMessage() {
  const message = messageInput.value;
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageContainer.appendChild(messageElement);
    messageInput.value = "";
  }
}

// Enterキーが押されたらメッセージを送信する
messageInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }
});

// 送信ボタンが押されたらメッセージを送信する
sendButton.addEventListener("click", sendMessage);
