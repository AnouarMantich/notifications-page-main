const markAsReaded=document.querySelector('.mark-as-readed');
const notifications=document.querySelectorAll('.notification');
const notificationNumber=document.querySelector('.notifications-number');
// console.log('ok');

markAsReaded.addEventListener('click',function(){
    notifications.forEach(function(notification){
     if(notification.classList.contains('unreaded')){
        notification.classList.remove('unreaded');
        notification.querySelector('.star').style.display='none';
     }
    })
    notificationNumber.textContent='0'
})