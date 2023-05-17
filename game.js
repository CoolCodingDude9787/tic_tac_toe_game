function checkAll(){

    if (checkRow1()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = 'We have a winner! The winner is...';
      let winner = marker
      return;
    } else if (checkRow2()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!";
      let winner = marker 
      return;
    } else if (checkRow3()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!"; 
      let winner = marker
      return;
    } else if (checkColumn1()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!"; 
      let winner = marker
      return;
    } else if (checkColumn2()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!";
      let winner = marker 
      return;
    } else if (checkColumn3()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!";
      let winner = marker 
      return;
    } else if (checkDiagnal1()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!"; 
      let winner = marker
      return;
    } else if (checkDiagnal2()){
      winningBox.classList.remove("hidden");
      winningBox.textContent = "We have a winner!"; 
      let winner = marker
      return;
    }
  
  
    checkRow1()
    checkRow2()
    checkRow3()
    checkColumn1()
    checkColumn2()
    checkColumn3()
    checkDiagnal1()
    checkDiagnal2()
  
  }

  function reset() {
 
    box1.textContent = "🖥️";
    box2.textContent = "🖥️";
    box3.textContent = "🖥️";
    box4.textContent = "🖥️";
    box5.textContent = "🖥️";
    box6.textContent = "🖥️";
    box7.textContent = "🖥️";
    box8.textContent = "🖥️";
    box9.textContent = "🖥️";
    winningBox.classList.toggle("hidden")
    }

function checkRow1(){
 
    if (box1.textContent ==="🥚" && box2.textContent ==="🥚" && box3.textContent ==="🥚"){
      return true 
    }else if (box1.textContent ==="🥐" && box2.textContent ==="🥐" && box3.textContent ==="🥐"){
      return true
    } else {
      return false
    }
  }


  function checkRow2(){
 
    if (box4.textContent ==="🥚" && box5.textContent ==="🥚" && box6.textContent ==="🥚"){
      return true 
    }else if (box4.textContent ==="🥐" && box5.textContent ==="🥐" && box6.textContent ==="🥐"){
      return true
    } else {
      return false
    }
   
   
   }
   
   function checkRow3(){
    
    if (box7.textContent ==="🥚" && box8.textContent ==="🥚" && box9.textContent ==="🥚"){
      return true 
    }else if (box7.textContent ==="🥐" && box8.textContent ==="🥐" && box9.textContent ==="🥐"){
      return true
    } else {
      return false
    }
   }

   function checkColumn1(){
    if (box1.textContent ==="🥚" && box4.textContent ==="🥚" && box7.textContent ==="🥚"){
     return true 
   }else if (box1.textContent ==="🥐" && box4.textContent ==="🥐" && box7.textContent ==="🥐"){
     return true
   } else {
     return false
   }
  }
    
  function checkColumn2(){
  
    if (box2.textContent ==="🥚" && box5.textContent ==="🥚" && box8.textContent ==="🥚"){
     return true 
   }else if (box2.textContent ==="🥐" && box5.textContent ==="🥐" && box8.textContent ==="🥐"){
     return true
   } else {
     return false
   }
  }
  
  function checkColumn3(){
    if (box3.textContent ==="🥚" && box6.textContent ==="🥚" && box9.textContent ==="🥚"){
     return true 
   }else if (box3.textContent ==="🥐" && box6.textContent ==="🥐" && box9.textContent ==="🥐"){
     return true
   } else {
     return false
   }
  }

  

function checkDiagnal1(){
    if (box1.textContent ==="🥚" && box5.textContent ==="🥚" && box9.textContent ==="🥚"){
     return true 
   }else if (box1.textContent ==="🥐" && box5.textContent ==="🥐" && box9.textContent ==="🥐"){
     return true
   } else {
     return false
   }
  }
  
  
  function checkDiagnal2(){
    if (box7.textContent ==="🥚" && box5.textContent ==="🥚" && box3.textContent ==="🥚"){
     return true 
   }else if (box7.textContent ==="🥐" && box5.textContent ==="🥐" && box3.textContent ==="🥐"){
     return true
   } else {
     return false
   }
  }