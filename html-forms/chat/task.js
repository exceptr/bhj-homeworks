const widgetSide = document.querySelector('.chat-widget__side-text');
const widgetChat = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatContainer = document.querySelector('.chat-widget__messages-container');

function addActiveClassWidget() {
    widgetChat.classList.toggle('chat-widget_active');
}

widgetSide.addEventListener('click', addActiveClassWidget);
chatInput.addEventListener('keydown', sendMessage);

const robot = [
  "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
  "До свидания!",
  "Никого нет дома",
  "Кто здесь?",
  "Где ваша совесть?",
  "Мы ничего не будем вам продавать!",
  "Не пишите нам больше!",
  "Нет уж",
  "Белым по зеленому же написано..",
  "Откуда такая агрессия?"
  ]

function sendMessage(e) {
    if (e.key === 'Enter' && chatInput.value != '') {
        let time = new Date().toLocaleTimeString().slice(0, -3);
        messages.innerHTML+=`
        <div class="message message_client">
          <div class="message__time">${time}</div>
      <div class="message__text">${chatInput.value}</div>
        </div>
      `;
        messages.innerHTML+=`
          <div class="message">
            <div class="message__time">${time}</div>
        <div class="message__text">${robot[Math.floor(Math.random() * robot.length)]}</div>
          </div>
        `;
        chatInput.value = "";
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}