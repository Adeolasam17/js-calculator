let equal_pressed = 0;

let currentInput = document.querySelector('#currentInput');
let Buttons = document.querySelectorAll('.btn');
let ClearBtn = document.querySelector('#clear');
let EraseBtn = document.querySelector('#erase');
let EvaluateBtn = document.querySelector('#evaluate');


window.onload = () => {
  currentInput.value = '';
};

Buttons.forEach((btns) => {
  btns.addEventListener('click', () => {
    
    if (equal_pressed == 1) {
      currentInput.value = '';
      equal_pressed = 0;
    }
    currentInput.value += btns.value;

  })
});

EvaluateBtn.addEventListener('click', () => {
  equal_pressed = 1;
  
  let curr_val = currentInput.value;
  
  try {
    let solution = eval(curr_val);

    if (Number.isInteger(solution)) {
      currentInput.value = solution;
    } else {
      currentInput.value = solution.toFixed(2);
    }
  } catch (error) {
    alert('Invalid Input');
  }
});

ClearBtn.addEventListener('click', () => {
  currentInput.value = '';
  currentInput.style.color = "white";
});

EraseBtn.addEventListener('click', () => {
  currentInput.value = currentInput.value.substr(0, currentInput.value.length - 1);
});


  // function display() {
  //   currentInput[0] += btns.value;
  // }
  

  // currentInput.textContent = display();
  // console.log(display());

  // console.log(currentInput.value);
  // console.log(typeof currentInput.value);
  // console.log(currentInput.value += btns.value);

// if (btns.classList.contains('num_btn')) {
  //   currentInput.innerHTML = btns.value;
  // }

  // if (btns.classList.contains('fun_btn')) {
  //   currentInput.innerHTML = currentInput.value += btns.value;
  // }
  // if (typeof currentInput.value === undefined) {
  //   currentInput.innerHTML = `0`;
  // }
  
  
  // if (!btns.id.match('erase')) {
  //   realTimeScreenValue.push(btns.value);
  //   currentInput.innerHTML = realTimeScreenValue.join('');
    
  //   if (btns.classList.contains('num_btn')) {
  //     answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
  //   }

  //   if (btns.classList.contains('fun_btn')) {
  //     answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
  //   }
  // }
  
  // if (btns.id.match('erase')) {
  //   realTimeScreenValue.pop();
  //   currentInput.innerHTML = realTimeScreenValue.join("");
  //   answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
  // }

  // if (btns.id.match('evaluate')) {
  //   currentInput.className = 'answerScreen';
  //   answerScreen.className = 'currentInput';
  //   answerScreen.style.color = 'white';
  // }
  
  // if (typeof realTimeScreenValue.join('') === undefined) {
  //   answerScreen.innerHTML = `0`;
  // }
