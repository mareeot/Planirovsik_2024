

document.addEventListener("DOMContentLoaded", function() {
    var messageContainer = document.getElementById("message-container");
    var messageInput = document.getElementById("message-input");
    var sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function() {
      var message = messageInput.value;
      if (message !== "") {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
  
        var avatarElement = document.createElement("div");
        avatarElement.classList.add("avatar");
        var avatarImg = document.createElement("img");
        avatarImg.src = "https://masterpiecer-images.s3.yandex.net/7d2dc8c65f6c11eea5286a0259d7362a:upscaled";
        avatarElement.appendChild(avatarImg);
  
        var messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
  
        var messageInfo = document.createElement("div");
        messageInfo.classList.add("message-info");
        var sender = document.createElement("span");
        sender.classList.add("sender");
        sender.innerText = "Виктория Марченко";
        var timestamp = document.createElement("span");
        timestamp.classList.add("timestamp");
        var date = new Date();
        timestamp.innerText = date.toLocaleString("ru-RU");
  
        var messageText = document.createElement("span");
        messageText.classList.add("message-text");
        messageText.innerText = message;
  
        messageInfo.appendChild(sender);
        messageInfo.appendChild(timestamp);
        messageContent.appendChild(messageInfo);
        messageContent.appendChild(messageText);
  
        messageElement.appendChild(avatarElement);
        messageElement.appendChild(messageContent);
  
        messageContainer.appendChild(messageElement);
  
        messageInput.value = "";
      }
    });
  });




// Закрытие и открытие чата

var avatar = document.getElementById("avatarrr2");
var modal = document.getElementById("modal__chat");
var close = document.getElementById("krestt");
var closee = document.getElementById("krestt2");
var ModalZadach = document.getElementById("modal__zadach");
var OpenModalZad = document.getElementById("listBtn");
var closeZad = document.getElementById("crest__zad");

avatar.addEventListener("click", function() {
  modal.style.display = "flex";
});

close.addEventListener("click", function() {
  modal.style.display = "none";
});
closee.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

OpenModalZad.addEventListener('click', function(){
    ModalZadach.style.display = 'flex';
})

closeZad.addEventListener('click', function(){
  ModalZadach.style.display = 'none';
})




var First = document.getElementById("fir__zap");
var Second = document.getElementById("sec__zap");
var OpenNapomin = document.getElementById("napominanie");
var Napomin = document.getElementById("modal__napom");
var CloseNapomin = document.getElementById("svern__napom");

Second.addEventListener('click', function(){
  First.style.border = 'none';
  Second.style.borderBottom = '4px solid rgb(0, 140, 255)';
})
First.addEventListener('click', function(){
  First.style.borderBottom = '4px solid rgb(0, 140, 255)';
  Second.style.borderBottom = 'none';
})

OpenNapomin.addEventListener('click', function(){
  Napomin.style.display = 'initial';
})

CloseNapomin.addEventListener('click', function(){
  Napomin.style.display = 'none';
})




// const products = [
//   { name: 'что-то сдлать', pice: '14:00 - 17:00'},
//   { name: 'что-то сдлать', pice: '10:00 - 12:00'},
//   { name: 'что-то сдлать', pice: '12:00 - 13:00'},
//   { name: 'что-то сдлать', pice: '10:00 - 12:00'},
//   { name: 'что-то сдлать', pice: '14:00 - 17:00'},
// ];

// const  column1 = document.getElementById('column1');
// const  column2 = document.getElementById('column2');
// const  column3 = document.getElementById('column3');
// const  column4 = document.getElementById('column4');
// const  column5 = document.getElementById('column5');

// products.forEach((product, index)=>{
//   const li = document.createElement('h3');
//   li.textContent = product.name + ' ' + product.pice;
  
//   if(index % 5 === 0) {
//     column1.appendChild(li);
//   } else if (index % 5 ===1){
//     column2.appendChild(li);
//   }else if (index % 5 ===2){
//     column3.appendChild(li);
//   }else if (index % 5 ===3){
//     column4.appendChild(li);
//   }else{
//     column5.appendChild(li);
//   }
// });


// const vipad = document.getElementById('vipad_list')
// const vipad_list = document.querySelector('.drugie__tabl')

// vipad.addEventListener('click', function(){
//   vipad_list.style.display = vipad_list.style.display === 'flex' ? 'none' : 'flex';
// })


// script.js

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const taskFilter = document.getElementById('taskFilter');
  const assigneeFilter = document.getElementById('assigneeFilter');
  const startTimeFilter = document.getElementById('startTimeFilter');
  const tasks = document.querySelectorAll('.task');

  function filterTasks() {
      const taskFilterValue = taskFilter.value.toLowerCase();
      const assigneeFilterValue = assigneeFilter.value;
      const startTimeValue = startTimeFilter.value;

      tasks.forEach(task => {
          const taskName = task.getAttribute('data-name').toLowerCase();
          const assigneeName = task.getAttribute('data-assignee');
          const taskStartTime = task.getAttribute('data-start-time');

          const matchesName = taskName.includes(taskFilterValue);
          const matchesAssignee = assigneeFilterValue === '' || assigneeFilterValue === assigneeName;
          const matchesStartTime = startTimeValue === '' || taskStartTime >= startTimeValue;

          if (matchesName && matchesAssignee && matchesStartTime) {
              task.style.display = 'block';
          } else {
              task.style.display = 'none';
          }
      });
  }

  taskFilter.addEventListener('input', filterTasks);
  assigneeFilter.addEventListener('change', filterTasks);
  startTimeFilter.addEventListener('change', filterTasks);
});