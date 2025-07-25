let stadium = document.createElement('div');
stadium.className = 'stadium';
stadium.style.cssText = `
  width: 800px;
  height: 500px;
  background-color: green;
  position: relative;
  margin: 50px auto;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;


let ball = document.createElement('div');
ball.classList.add('ball');
ball.style.cssText = `
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
`;


stadium.append(ball);


document.body.append(stadium);

stadium.addEventListener('click', function (e) {
    ball.style.left = e.offsetX + 'px';
    ball.style.top = e.offsetY + 'px';
  });
  