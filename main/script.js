const button = document.getElementById('button');

    function moveButtonAway(event) {
      const buttonRect = button.getBoundingClientRect();
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;

      const distX = event.clientX - buttonX;
      const distY = event.clientY - buttonY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < 100) {
        const moveX = (distX / distance) * 50; 
        const moveY = (distY / distance) * 50;

        button.style.left = button.offsetLeft - moveX + 'px';
        button.style.top = button.offsetTop - moveY + 'px';
      }
    }

    document.addEventListener('mousemove', moveButtonAway);

document.getElementById('second').addEventListener('click',function(){
    alert("no one loves you 😂😂",true);
})






