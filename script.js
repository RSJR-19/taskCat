
//user related screens
const loadingScreen = document.getElementById("loading");
const MainScreen = document.getElementById("main-stage");
const oldUserScreen = document.getElementById("oldUserScreen");
const firstTimeScreen = document.getElementById("firstTimeScreen");

//A. UI Components:
//STATUS BOX//
const statusBox = document.getElementById("statusBox");
const statusBoxNameH1 = document.getElementById("statusBoxNameH1");
const hungerBarContent = document.getElementById("hungerBarContent");
const hungerBarPoints = document.getElementById("hungerBarPoints");

//COIN BOX//
const coinBox = document.getElementById('coinBox');
const coinAmountP = document.getElementById('coinAmountP');
const storeCoinBox = document.getElementById('storeCoinBox');
const storeCoinAmountP = document.getElementById('storeCoinAmountP');


let coinAmount;

//BOTTOM ACCESS BAR//
const bottomAccessBar = document.getElementById("bottomAccessBar");
const itemsBtn = document.getElementById("items");
const storeBtn = document.getElementById("store");
const tasksBtn = document.getElementById("tasks");


// END -- UI COMPONENTS /

//characters/ objects //
const box = document.getElementById("box");
const cat = document.getElementById("cat");
const foodSprite = document.getElementById('foodSprite');


//Rename PopUp screen related//
const renamePopUpScreen = document.getElementById("renamePopUpScreen");
const youReceivedText = document.getElementById("youReceivedText");
const catTypeText = document.getElementById("catTypeText");
const renameName = document.getElementById("renameName");
const renameInput = document.getElementById("renameInput");
const renameConfirmBtn = document.getElementById("renameConfirmBtn");

let catName;

//Screen Related Wrapper//
const itemsPopUpWrapper = document.getElementById("itemsPopUpWrapper");
const storePopUpWrapper = document.getElementById("storePopUpWrapper");
const tasksPopUpWrapper = document.getElementById("tasksPopUpWrapper");

const exitPopUpBtn = document.getElementById('exitPopUpBtn');

//Main Screen inside wrapper//
//Items Screen//
const itemsFoodMain = document.getElementById('itemsFoodMain');
const itemsToysMain = document.getElementById('itemsToysMain');
const itemsDesignMain = document.getElementById('itemsDesignMain');
const itemsFoodBtn = document.getElementById('itemsFoodBtn');
const itemsToysBtn = document.getElementById('itemsToysBtn');
const itemsDesignBtn = document.getElementById('itemsDesignBtn');

//ITEMS -- FOOD //
const cheapFoodWrapper = document.getElementById('cheapFoodWrapper');
const normalFoodWrapper = document.getElementById('normalFoodWrapper');
const goodFoodWrapper = document.getElementById('goodFoodWrapper');
const feastFoodWrapper = document.getElementById('feastFoodWrapper');
const specialFoodWrapper = document.getElementById('specialFoodWrapper');
const stockCheap = document.getElementById('stockCheap');
const stockNormal = document.getElementById('stockNormal');
const stockGood = document.getElementById('stockGood');
const stockFeast = document.getElementById('stockFeast');
const stockSpecial = document.getElementById('stockSpecial');
let foodInStockScreen = document.getElementById('foodInStock');
const foodEmptyScreen = document.getElementById('foodEmpty');

//Store Screen//
const storeFoodMain = document.getElementById('storeFoodMain');
const storeToysMain = document.getElementById('storeToysMain');
const storeDesignMain = document.getElementById('storeDesignMain');
const storeFoodBtn = document.getElementById('storeFoodBtn');
const storeToysBtn = document.getElementById('storeToysBtn');
const storeDesignBtn = document.getElementById('storeDesignBtn');

const buyPopUpWrapper = document.getElementById('buyPopUpWrapper');
const buyItemP = document.getElementById('buyItemP');
const buyItemPrice = document.getElementById('buyItemPrice');
const buyItemAmount = document.getElementById('buyItemAmount');
const addAmountBtn = document.getElementById('addAmount');
const minusAmountBtn = document.getElementById('minusAmount');
const buyItemTotal = document.getElementById('buyItemTotal')
const buyCancelBtn = document.getElementById('buyCancelBtn');
const buyConfirmBtn = document.getElementById('buyConfirmBtn');


//Task Screen//
const taskTitleInput = document.getElementById('taskTitleInput');
const nextTaskTitleBtn = document.getElementById('nextTaskTitleBtn');
const taskTitleWrapper = document.getElementById('taskTitleWrapper');
const timeSetWrapper = document.getElementById('timeSetWrapper');
const taskTitleText = document.getElementById('taskTitleText');
const timeChoiceWrapper = document.getElementById('timeChoiceWrapper');
const timeChoice10 = document.getElementById('timeChoice10');
const timeChoice25 = document.getElementById('timeChoice25');
const timeChoice50 = document.getElementById('timeChoice50');
const timeChoiceCustom = document.getElementById('timeChoiceCustom');
const timeCustomInput = document.getElementById('timeCustomInput');
const customTimeH1 = document.getElementById('customTimeH1');
const startTaskBtn = document.getElementById('startTaskBtn');
const ongoingTaskScreen = document.getElementById('ongoingTaskScreen');
const countDownP = document.getElementById('countDownP');
const taskTitleOngoing = document.getElementById('taskTitleOngoing');
const ongoingTaskTimerWrapper = document.getElementById('ongoingTaskTimerWrapper');
const taskTimerP = document.getElementById('taskTimerP');
const taskDoneBtn = document.getElementById('taskDoneBtn');
const finishedTaskPopUpWrapper = document.getElementById('finishedTaskPopUpWrapper');
const finishedTaskPopUp = document.getElementById('finishedTaskPopUp');
const finishedText = document.getElementById('finishedText');
const durationP = document.getElementById('durationP');
const multiplierP = document.getElementById('multiplierP');
const finishedTotal = document.getElementById('finishedTotal');

let taskTitle;
let customTime;

//Tutorial Related//
const tutorialPopUpWrapper = document.getElementById("tutorialPopUpWrapper");
const tutorialPopUp = document.getElementById("tutorialPopUp");
const tutorialText = document.getElementById("tutorialText");
const tapToContinue = document.getElementById("tapToContinue");
const tutorialCustomP = document.getElementById('tutorialCustomP');

let tutorialMode;
let currentTutorialText = 0;

//Responsive Attempts//
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

timeChoiceWrapper.style.height = `${windowHeight > windowWidth ? 80 : 60}%`;

//State or measurement related values //
let addedHunger = 0;
let foodTitle;
let foodDescription;
let selectedFood;
let miliseconds;
let currentTimer;
let initialTop;
let timerContinuation = false;
let taskDuration;
let countdown;

//Interval values//
let counterInterval;
let countDownTimerInterval;

//LOCAL STORAGE ACCESS//
let foodInventory = JSON.parse(localStorage.getItem("foodInventory"))||[];
let taskTimerDuration;


//HAPPENS UPON DURING WEBSITE RELOAD//
window.addEventListener("load", () => {
  localStorage.clear() //delete later
    checkIfFirstTime();
    clearWrappers();

});

function checkIfFirstTime (){

    if (localStorage.getItem("firstTimeUsing") === null) {
      tutorialMode = true;
        localStorage.setItem("coinAmount", 4) // 4 may be changed later
        localStorage.setItem("lastHungerAmount", 50); //lowHealth
        localStorage.setItem("lastHungerTimeCheck", Date.now()); //remove later//
        
        localStorage.setItem("foodInventory", JSON.stringify([
          {foodClass: 1, foodQuantity: 0},
          {foodClass:2, foodQuantity: 0},
          {foodClass : 3, foodQuantity : 0},
          {foodClass: 4, foodQuantity : 0},
          {foodClass: 5, foodQuantity: 1}
          ]));
        foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
        
        firstTimeScreen.style.display = "flex";
        oldUserScreen.style.display = "none";

        if(localStorage.getItem('taskTimerDuration') !== null){
          taskTimerDuration = Number(localStorage.getItem('taskTimerDuration'));
          taskTitle = JSON.parse(localStorage.getItem('savedTaskTitle'));
          miliseconds = Math.max(taskTimerDuration - Date.now(), 0);
          timerContinuation = true;
          taskTitleOngoing.innerHTML = taskTitle;
          ongoingTaskTimerWrapper.style.display = 'flex';
          countDownTimer();
          countDownTimerInterval = setInterval(()=>{countDownTimer()}, 1000);
          
        }
    }
    else {
        oldUserScreen.style.display = "flex";
        firstTimeScreen.style.display = "none";
    }
};

//STATE SPECIFIC//
//RENAMING CAT AND RANDOMIZER//
function randomizeCatType (){
    const catTypes = ["wawu", "mimi", "mekus", "kuchi", "nano"];
    const catRandomizer = catTypes[Math.floor(Math.random() * catTypes.length)];

    youReceivedText.innerHTML = `You Received, <br/> ${catRandomizer}!`;
    catTypeText.innerHTML = catRandomizer;
    renameName.innerHTML = catRandomizer;
    catName = catRandomizer;
};

//Feeding Cat: FOOD SELECTION//


//FEEDING CAT FOOD ANIMATION//
function feedFoodAnimation(){
  foodSprite.style.top = `${initialTop}%`;
  
  if (initialTop === 50){
    foodSprite.classList.add('shrink');
    return
  }
  
  initialTop -= 1;
  requestAnimationFrame(feedFoodAnimation);
}


//Setting up selected Time//
function selectedTime(time){
  [timeChoice10, timeChoice25, timeChoice50, timeChoiceCustom].forEach(choice =>{
    choice.style.backgroundColor = 'transparent';
  })
  switch(time){
    case 1:
      timeChoice10.style.backgroundColor = 'orange';
      customTime = 10;
      break;
    case 2:
      timeChoice25.style.backgroundColor = 'orange';
      customTime = 25;
      break;
    case 3:
      timeChoice50.style.backgroundColor = 'orange';
      customTime = 50;
      break;
    case 4:
      if(customTime > 0 && timeCustomInput.value > 0){
        timeChoiceCustom.style.backgroundColor = 'orange';
        customTime = Number(timeCustomInput.value.slice(0,2));
      }
      else{
        customTime = "";
      }
      break;
    case 5:
      customTime = "";
      timeCustomInput.value = "";
      customTimeH1.innerHTML = '00';
      break;
  }
  checkCustomTime();
}

//Short Countdown Screen //
function countDownTimer(){
  countdown = 2;
  if(timerContinuation){
    startTimerCountdown();
    return
  }
  countDownP.style.display = 'flex';
  countDownP.innerHTML = '3'
  counterInterval = setInterval(()=>{
    if(countdown === 0){
      countDownP.innerHTML = 'START'
      setTimeout(()=>{
        countDownP.style.display = 'none';
        ongoingTaskTimerWrapper.style.display = 'flex';
        taskTitleOngoing.innerHTML = taskTitle;
        miliseconds = !tutorialMode ? customTime * 60 * 1000 : 10000;
        localStorage.setItem('taskDuration', JSON.stringify(customTime));
        localStorage.setItem('savedTaskTitle', JSON.stringify(taskTitle));
        localStorage.setItem('taskTimerDuration', JSON.stringify(Date.now() + miliseconds));
        startTimerCountdown();
        countDownTimerInterval = setInterval(()=>{startTimerCountdown()} , 1000)
      },750);
      clearInterval(counterInterval);
      return
    }
    countDownP.innerHTML = countdown;
    countdown--
  }, 750);
}

function startTimerCountdown(){
  if(miliseconds < 0){
    currentTimer = '00:00';
    clearInterval(countDownTimerInterval);
    displayFinishedTaskPopUp();

    return
  }
  let minutes = Math.floor(miliseconds / 1000 / 60);
  let seconds = Math.floor((miliseconds / 1000) % 60);
  currentTimer = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2, '0')}`;
  displayTimerCountdown();
}

function displayFinishedTaskPopUp(){
    finishedTaskPopUpWrapper.style.display = 'flex';
    finishedText.style.display = 'flex';

  if(tutorialMode){
    displayTutorial();
  }

}


//DIsplay Food stock//
function displayFoodStock (){
  [cheapFoodWrapper, normalFoodWrapper, goodFoodWrapper, feastFoodWrapper].forEach(wrapper => wrapper.style.display = 'none');
  foodInventory = JSON.parse(localStorage.getItem('foodInventory'));

  for(let x = 0; x <= (foodInventory.length) -1; x++){
    if (foodInventory[x].foodQuantity > 0){
      displayFoodWrapper(x, foodInventory[x].foodQuantity)
    }

  }};

function displayFoodWrapper(num, stock){
  switch(num){
    case 0:
      cheapFoodWrapper.style.display = 'flex';
      stockCheap.innerHTML = `Stock: ${stock}`;
      break
    case 1:
      normalFoodWrapper.style.display = 'flex';
      stockNormal.innerHTML = `Stock: ${stock}`;
      break
    case 2:
      goodFoodWrapper.style.display = 'flex';
      stockGood.innerHTML = `Stock: ${stock}`;
      break
    case 3:
      feastFoodWrapper.style.display = 'flex';
      stockFeast.innerHTML = `Stock: ${stock}`;
      break

  }
}


//TUTORIAL//
function displayTutorial (){

    tutorialPopUpWrapper.style.display = "flex";
    let message;
    switch (currentTutorialText) {
        case 0:
            message = "Your cat seems hungry";
            currentTutorialText = 1;
            break;

        case 1:
            message = "Tap the items button";
            currentTutorialText = 2;
            tapToContinue.style.opacity = 0;
            bottomAccessBar.style.display = "flex";
            disablePointerEvents([tutorialPopUp, tutorialPopUpWrapper, itemsDesignBtn, itemsToysBtn, storeToysMain, storeDesignMain,tasksBtn, exitPopUpBtn]); //add storeBtn later
            break;

        case 2:
           message = "Tap the feed button";
            tutorialPopUpWrapper.style.alignItems = 'center';
            tutorialPopUpWrapper.style.pointerEvents = 'none';
            currentTutorialText = 3;
            break;
        
        case 3:
          message = "Tap the food";
          tutorialPopUpWrapper.style.alignItems = 'flex-start';
          currentTutorialText = 4;
          break;
        
        case 4:
          message = "The cat seems still hungry...";
          tapToContinue.style.opacity = 1;
          currentTutorialText = 5;
          enablePointerEvents([tutorialPopUp, tutorialPopUpWrapper]);
          break;
          
        case 5:
          message = "Since we don't no longer have food, we have to buy";
          foodSprite.style.display = 'none';
          bottomAccessBar.style.display = 'flex';
          itemsPopUpWrapper.style.display = 'flex';
          openSelectionMain(itemsFoodMain);
          currentTutorialText = 6;
          break;
        
        case 6:
          message = "tap the exit button to close the items";
          tutorialPopUpWrapper.style.alignItems = 'center';
          tapToContinue.style.opacity = 0;
          disablePointerEvents([itemsBtn, tutorialPopUp, tutorialPopUpWrapper]);
          enablePointerEvents([exitPopUpBtn]);
          currentTutorialText = 7;
          break;
          
        case 7:
          message = 'Now, tap the store button';
          enablePointerEvents([storeBtn]);
          disablePointerEvents([exitPopUpBtn]);
          currentTutorialText = 8;
          break;
          
        case 8:
         message = "Here in store, we can buy food and other things";
         tutorialPopUpWrapper.style.pointerEvents = 'auto';
         tutorialPopUpWrapper.style.alignItems = 'flex-start';
         disablePointerEvents([exitPopUpBtn, storeFoodBtn, storeToysBtn, storeDesignBtn]);
         enablePointerEvents([tutorialPopUp, tutorialPopUpWrapper]);
         tapToContinue.style.opacity = 1;
         currentTutorialText = 9;
         break;
         
      case 9:
        message = "To buy, you need coins, currently you don't have enough coins to afford any food";
        currentTutorialText = 10;
        break;
        
      case 10:
        message = 'To earn coins, you must set up a task ';
        tutorialPopUpWrapper.style.alignItems = 'center';
        currentTutorialText = 11;
        break;
      
      case 11:
        message = 'tap the exit button to close the store';
        tapToContinue.style.opacity = 0;
        enablePointerEvents([exitPopUpBtn]);
        disablePointerEvents([tutorialPopUp, tutorialPopUpWrapper]);
        currentTutorialText = 12;
        break;
        
      case 12:
        message = 'tap the task button';
        disablePointerEvents([itemsBtn, storeBtn]);
        enablePointerEvents([tasksBtn]);
        currentTutorialText = 13;
        break;
      
      case 13:
        message = 'Here, we set up timer for tasks we need to accomplish in REAL LIFE';
        tapToContinue.style.opacity = 1;
        tutorialPopUpWrapper.style.alignItems = 'flex-start';
        disablePointerEvents([exitPopUpBtn, taskTitleInput, nextTaskTitleBtn]);
        enablePointerEvents([tutorialPopUp, tutorialPopUpWrapper]);
        nextTaskTitleBtn.style.backgroundColor = 'yellow';
        currentTutorialText = 14;
        break;
        
      case 14:
        message = 'The task title for this tutorial phase is already set for you, click the next button';
        tapToContinue.style.opacity = 0;
        disablePointerEvents([tutorialPopUp, tutorialPopUpWrapper])
        enablePointerEvents([nextTaskTitleBtn]);
        taskTitle = taskTitleInput.value;
        currentTutorialText = 15;
        break;

      case 15:
        message = 'For this tutorial, a sample task would be just 10 seconds long, but later on tasks needs to be 5 minutes in minimum.';
        tapToContinue.style.opacity = 1;
        enablePointerEvents([tutorialPopUp, tutorialPopUpWrapper])
        disablePointerEvents([timeChoice10, timeChoice25, timeChoice50, timeChoiceCustom,timeCustomInput, startTaskBtn, exitPopUpBtn]);
        tutorialCustomP.innerHTML = 'SECONDS';
        customTime = 10;
        currentTutorialText = 16;
      break;

      case 16:
        message = 'Since time and task title are all set, you can now click start task';
        tapToContinue.style.opacity = 0;
        startTaskBtn.style.backgroundColor = 'yellow';
        disablePointerEvents([tutorialPopUp, tutorialPopUpWrapper])
        enablePointerEvents([startTaskBtn])
        currentTutorialText = 17;

      break

      case 17:
        message = 'Wait until the task are finished'
        enablePointerEvents([tutorialPopUp, tutorialPopUpWrapper]);
        currentTutorialText = 18;

      break;

      case 18:
        message = 'Now, time to collect coin rewards!'
        disablePointerEvents([tutorialPopUp, tutorialPopUpWrapper])
        currentTutorialText = 19;
        break;

      case 19:
        message = 'We now have enough coins to buy food, click home'
        enablePointerEvents([taskDoneBtn]);
        currentTutorialText = 20;
        break;

      case 20:
        message = 'Open store again';
        enablePointerEvents([storeBtn]);
        break;

    }
    
    tutorialText.innerHTML = message;
    
};


//TOOLS / CONTROL //
function clearWrappers(){
    [itemsPopUpWrapper, storePopUpWrapper, tasksPopUpWrapper, itemsDesignMain, itemsToysMain, itemsFoodMain, storeToysMain, storeDesignMain, storeFoodMain].forEach(
        (wrapper) => (wrapper.style.display = "none")
    );
}

function enablePointerEvents (toEnable){
  toEnable.forEach((element)=> (element.style.pointerEvents = 'auto'));
}

function disablePointerEvents(toDisable){
    toDisable.forEach((element) => (element.style.pointerEvents = "none"));
}

function displayRenamePopUp (){
    renamePopUpScreen.style.display = "flex";
    youReceivedText.style.display = "none";
};

function displayStatusBox (){
    statusBox.style.display = "flex";
    const catSavedName = JSON.parse(localStorage.getItem("catSavedName"));
    displayHunger();
    statusBoxNameH1.innerHTML = catSavedName;
};

function displayCoinBox(){
  coinBox.style.display = 'flex';
  coinAmount = Number(localStorage.getItem('coinAmount'))
  coinAmountP.innerHTML = coinAmount;
  

}

function displayStoreCoinBox(){
  storeCoinBox.style.display = 'flex';
  coinAmount = Number(localStorage.getItem('coinAmount'));
  storeCoinAmountP.innerHTML = coinAmount;
}

function checkCustomTime(){
  if(customTime >= 5 && customTime <= 90 ){
    startTaskBtn.style.backgroundColor = 'yellow';
    enablePointerEvents([startTaskBtn]);
  }
  else{
    startTaskBtn.style.backgroundColor = 'transparent';
    disablePointerEvents([startTaskBtn]);
  }
}

function displayTimerCountdown(){
  taskTimerP.innerHTML = currentTimer;
  miliseconds -= 1000; // CHNAGE TO 1000 LATER
}

function displayHunger() {
    let hungerAmount = Number(localStorage.getItem("lastHungerAmount"));
    hungerBarContent.style.width = `${hungerAmount}%`;
    hungerBarPoints.innerHTML = `${hungerAmount}/100`;
}

function computeHunger(){
    let hungerAmount = Number(localStorage.getItem("lastHungerAmount"));
    let lastHungerTimeCheck = Number(localStorage.getItem("lastHungerTimeCheck"));

    let elapsedTime = Date.now() - lastHungerTimeCheck;
    let hungerLoss = Math.floor(elapsedTime / 300000);

    if (hungerLoss > 0) {
        hungerAmount = Math.max(0, hungerAmount - hungerLoss);

        lastHungerTimeCheck += hungerLoss * 300000;

        localStorage.setItem("lastHungerAmount", hungerAmount);
        localStorage.setItem("lastHungerTimeCheck", lastHungerTimeCheck);
    }

    displayHunger();
};

function checkFoodType (foodClassType){
  switch(foodClassType){
    case 1:
      foodTitle = "Cheap Food";
      foodDescription = "Cheap food low price";
      break
    case 2:
      foodTitle = "Normal Food";
      foodDescription = "Normal food normal price";
      break
    case 3:
      foodTitle = "Good Food";
      foodDescription = "Good food mild price";
      break
    case 4:
      foodTitle = "Feast";
      foodDescription = "feast high price";
      break
}}

//HIDE FINISHED SCREEN//
function hideFinishedTaskScreen(){
  finishedTaskPopUpWrapper.style.display = 'none';
  finishedTaskPopUp.style.display = 'none';
  ongoingTaskTimerWrapper.style.display = 'none';
  ongoingTaskScreen.style.display = 'none';
  finishedText.style.display = 'none';
  timerContinuation = false;
  countdown = 2;
  localStorage.removeItem('customTime');
  localStorage.removeItem('taskTitle');
  localStorage.removeItem('taskTimerDuration');
  exitPopUp(tasksPopUpWrapper);
  displayHunger();
  displayCoinBox();

}


//EVENT LISTENERS//
//A. BOX//
box.addEventListener("click", () => {
    randomizeCatType();
    setTimeout(() => displayRenamePopUp(), 100); //remove later for testing only//
    youReceivedText.style.opacity = 1;
    box.style.display = "none";
    cat.style.display = "flex";
});

//B. CAT//

//C. RENAME INPUT//
renameInput.addEventListener("input", () => {
    renameName.innerHTML = renameInput.value;
    
    if (renameInput.value.length <= 0){
      renameName.innerHTML = catName;
    }

    if (renameInput.value.length > 10) {
        renameName.innerHTML = renameInput.value.slice(0, 10);
    }
});

renameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if(renameInput.value.trim().length === 0){
        renameName.innerHTML = catName;
      }
        renameInput.blur();
        
    }
});

renameInput.addEventListener('keydown', (event) => {
  if (event.key === "Backspace" && renameInput.value.length === 0){
    renameName.innerHTML = "";
  }
})

renameInput.addEventListener('blur', ()=>{
  if(renameInput.value.length === 0){
    renameName.innerHTML = catName;
  }
})

//D. RENAME CONFIRM BUTTON//
renameConfirmBtn.addEventListener("click", () => {
    if (renameInput.value.trim().length === 0) {
        localStorage.setItem("catSavedName", JSON.stringify(catName));
    } else {
        catName = renameInput.value;
        localStorage.setItem("catSavedName", JSON.stringify(catName));
    }

    renamePopUpScreen.style.display = "none";
    catTypeText.innerHTML = catName;
    displayStatusBox();
    displayCoinBox();

    displayTutorial(currentTutorialText);
});

//E. ITEMS BUTTON//
itemsBtn.addEventListener("click", () => {
    itemsPopUpWrapper.style.display = "flex";
    openSelectionMain(itemsFoodMain);
    
    if (tutorialMode){
    tutorialPopUpWrapper.style.zIndex = 99;
    displayTutorial();
    }
});

//F. STORE BUTTON //
storeBtn.addEventListener("click", () => {
    storePopUpWrapper.style.display = "flex";
    coinBox.style.display = 'none';
    openSelectionMain(storeFoodMain);
    
    if(tutorialMode){
      displayTutorial();
    }
    
});

//F. TASKS BUTTON//
tasksBtn.addEventListener("click", () => {
    tasksPopUpWrapper.style.display = "flex";
    if (tutorialMode){
      displayTutorial();
      taskTitleInput.value = "Testing Task Number 1"
      disablePointerEvents([taskTitleInput])
    }
});

//G. TUTORIAL POPUP//
tutorialPopUp.addEventListener("click", () => {
    displayTutorial();
});

//H. FOOD SPRITE//
foodSprite.addEventListener('click', ()=>{
  initialTop = 80; //to be changed soon
  requestAnimationFrame(feedFoodAnimation);
  
  if(tutorialMode){
    tutorialPopUpWrapper.style.display = 'none';
  }
})

//I. Task Title Input//
taskTitleInput.addEventListener('input', ()=>{
  if (taskTitleInput.value.length > 35){
    taskTitleInput.blur()
    taskTitleInput.value = taskTitleInput.value.trim(0, 35);
  }
  if (taskTitleInput.value.length <= 0){
    nextTaskTitleBtn.style.backgroundColor = 'white';
    nextTaskTitleBtn.style.pointerEvents = 'none';
  }
  else{
    nextTaskTitleBtn.style.backgroundColor = 'yellow';
    nextTaskTitleBtn.style.pointerEvents = 'auto';
    taskTitle = taskTitleInput.value;
  }
})

taskTitleInput.addEventListener('keydown', (event)=>{
  if (event.key === 'Enter'){
    taskTitleInput.blur();
  }
});

taskTitleInput.addEventListener('blur', ()=>{
  if(taskTitleInput.value.length > 0){
     taskTitle = taskTitleInput.value;
     nextTaskTitleBtn.style.pointerEvents = 'auto';
     nextTaskTitleBtn.style.backgroundColor = 'yellow';
  }
  else{
    nextTaskTitleBtn.style.pointerEvents = 'none';
    nextTaskTitleBtn.style.backgroundColor = 'white';
  }
})

//J. Task Title Text//
taskTitleText.addEventListener('click', ()=>{
  taskTitleWrapper.classList.remove('hide');
  timeSetWrapper.classList.remove('show');
  taskTitleInput.focus();
  selectedTime(5);
})

//K. Next Part Task Button //
nextTaskTitleBtn.addEventListener('click', ()=>{
  taskTitleInput.blur();
  taskTitleWrapper.classList.add('hide');
  timeSetWrapper.classList.add('show');
  taskTitleText.innerHTML = taskTitle;
  if(tutorialMode){
    displayTutorial();
    customTimeH1.innerHTML = "10";
    timeChoiceCustom.style.backgroundColor = 'orange';
  }
})

//L. Time Custom Input//
timeCustomInput.addEventListener('input', ()=>{
  if(Number(timeCustomInput) === NaN){
    timeCustomInput.value = "";
    timeCustomInput.blur();
    alert('enter valid numbers only // change to tutorial popup laterr')
  }
  if(timeCustomInput.value.length > 2){
    timeCustomInput.value = timeCustomInput.value.slice(0,2);
    timeCustomInput.blur();
  }
  if(Number(timeCustomInput.value) >= 5 && Number(timeCustomInput.value) <= 90 ){
    timeChoiceCustom.style.backgroundColor = 'orange';
    customTime = Number(timeCustomInput.value); 
  }
  else{
    timeChoiceCustom.style.backgroundColor = 'transparent';
    customTime = Number(timeCustomInput.value);
    checkCustomTime();
  }
  customTimeH1.innerHTML = timeCustomInput.value.padStart(2, "0");
  checkCustomTime();
});

timeCustomInput.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    timeCustomInput.blur();
  }
});

timeCustomInput.addEventListener('blur', ()=>{
  if (Number(timeCustomInput.value) < 5 && Number(timeCustomInput.value) !== 0 ){
    alert('time cannot be less than 5 // upgrade to tu popup later')
    timeCustomInput.value = "";
    customTimeH1.innerHTML = "00";
    customTime = "";
  }
  if (Number(timeCustomInput.value) > 90){
    alert('time cannot be more than 90 // upgrade to popup later');
    timeCustomInput.value = "";
    customTimeH1.innerHTML = "00";
    customTime = "";
}
  switch (Number(timeCustomInput.value)){
    case 10:
      selectedTime(1);
      timeCustomInput.value = "";
      customTimeH1.innerHTML = "00";
      customTime = 10;
      timeChoiceCustom.style.backgroundColor = 'transparent';
      break
    case 25:
      selectedTime(2);
      timeCustomInput.value = "";
      customTimeH1.innerHTML = "00";
      customTime = 25;
      timeChoiceCustom.style.backgroundColor = 'transparent';
      break
    case 50:
      selectedTime(3);
      timeCustomInput.value = "";
      customTimeH1.innerHTML = "00";
      customTime = 50;
      timeChoiceCustom.style.backgroundColor = 'transparent';
      break
    default:
      customTime = timeCustomInput.value.slice(0,2);
  }
  checkCustomTime()
});

//M. Start Task Button//
startTaskBtn.addEventListener('click', ()=>{
  if (tutorialMode){
    displayTutorial();
  }
  if(customTime > 0 && taskTitle !== null){
    ongoingTaskScreen.style.display = 'flex';
    countDownTimer();
  }
})

//N. FOOD SPRITE//
foodSprite.addEventListener('transitionend', ()=>{
  let hungerAmount = Number(localStorage.getItem('lastHungerAmount'));
  foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
  
  foodInventory[selectedFood].foodQuantity -=  1;
  localStorage.setItem('foodInventory', JSON.stringify(foodInventory));
  
  hungerAmount += addedHunger;
  localStorage.setItem('lastHungerAmount', hungerAmount);
  displayHunger();
  
  if (tutorialMode){
    displayTutorial();
  }
})


//P. Task Done Button//
taskDoneBtn.addEventListener('click', ()=>{
  if(tutorialMode){
    localStorage.setItem('coinAmount', 5);
  }
  hideFinishedTaskScreen();
})

//J. FINISHED POPUp TASK//
finishedTaskPopUpWrapper.addEventListener('click',()=>{
  taskDuration = JSON.parse(localStorage.getItem('taskDuration'));
  finishedTaskPopUp.style.display = 'flex';
  taskDoneBtn.style.display = 'flex';
  if (tutorialMode){
    displayTutorial();
    durationP.innerHTML = `Task Duration: 10 secs`;
  finishedTotal.innerHTML = `Total Coins Earned: 1`;
    return
  }
  durationP.innerHTML = `Task Duration: ${Number(taskDuration)} mins`;
  finishedTotal.innerHTML = `Total Coins Earned: ${Number(taskDuration)}`;
})

let totalCost;

function displayTotalCost(){
  totalCost = productPrice * productAmount;
  buyItemTotal.innerHTML = `TOTAL: ${totalCost}`;
  
}

//ONCLICK EVENTS//
function exitPopUp(popup){
  popup.style.display = "none";
  if (tutorialMode){
    displayTutorial();
    
  }
  switch(popup){
    case tasksPopUpWrapper:
      taskTitle = "";
      customTime = "";
      taskTitleInput.value = "";
      timeCustomInput.value = "";
      taskTitleText.innerHTML = "";
      customTimeH1.innerHTML = "00";
      [timeChoice10, timeChoice25, timeChoice50, timeChoiceCustom].forEach(choice =>{
    choice.style.backgroundColor = 'transparent'})
    nextTaskTitleBtn.style.backgroundColor = 'transparent';
    startTaskBtn.style.backgroundColor = 'transparent';
    taskTitleWrapper.classList.remove('hide');
    timeSetWrapper.classList.remove('show');
    break;

    case storePopUpWrapper:
    displayCoinBox();
    break;

  }
  
}

function openSelectionMain(activeScreen){
  [itemsFoodMain, itemsToysMain, itemsDesignMain, storeFoodMain, storeDesignMain, storeToysMain].forEach(screen => screen.style.display = 'none');
  activeScreen.style.display = "flex";
  
  switch(activeScreen){
    case itemsFoodMain:
      foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
      if (foodInventory.some(item => item.foodQuantity > 0)){
        foodEmptyScreen.style.display = "none";
        foodInStockScreen.style.display = 'flex';
        displayFoodStock();
        
        
      }
      else{
        foodEmptyScreen.style.display = "flex";
        foodInStockScreen.style.display = 'none';
        
      }
      break
  }
}

function feedFood (food){
  if(tutorialMode){
    tutorialPopUpWrapper.style.display = 'none';
    displayTutorial();
  }
  switch (food){
    case 1:
    foodSprite.style.backgroundColor = 'red';
    addedHunger = 10;
    selectedFood = 0;
      break;
    case 2:
    foodSprite.style.backgroundColor = 'green';
    addedHunger = 35;
    selectedFood = 1;
      break;
    case 3:
   foodSprite.style.backgroundColor = 'orange';
   addedHunger = 55;
   selectedFood = 2;
      break;
    case 4:
   foodSprite.style.backgroundColor = 'blue';
   addedHunger = 1000;
   selectedFood = 3;
      break;

    case 5:
      foodSprite.style.backgroundColor = 'pink';
      addedHunger = 30;
      selectedFood = 4;
      break;

  }
  itemsPopUpWrapper.style.display = 'none';
  bottomAccessBar.style.display = 'none';
  foodSprite.style.display = 'flex';
}

let productName;
let productPrice;


function displayBuyPopUp(number){
  buyPopUpWrapper.style.display = 'flex';
  productAmount = 1;
  switch(number){
    case 1:
      productName = 'Cheap Food';
      productPrice = 5
      selectedFood = 0
      break;

    case 2:
      productName = 'Normal Food';
      productPrice = 15;
      selectedFood = 1
      break;

    case 3:
      productName = 'Good Food';
      productPrice = 30;
      selectedFood = 2
      break;
    
    case 4:
      productName = 'Feast Food';
      productPrice = 60;
      selectedFood = 3;
      break;

  }
  buyItemP.innerHTML = `Buy ${productName}?`;
  buyItemPrice.innerHTML = `Price: ${productPrice}`
  buyItemAmount.innerHTML = `Amount: ${productAmount}`;
  displayStoreCoinBox();
  displayTotalCost();
}

function controlAmount(control){
  productAmount = Math.max(1, productAmount += control);
  displayBuyPopUp();
}


function exitBuy(){
  buyPopUpWrapper.style.display = 'none';
  productAmount = 1;
}

function confirmBuy(){
  coinAmount = Number(localStorage.getItem('coinAmount'));
  if(coinAmount >= totalCost){
    foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
    foodInventory[selectedFood].foodQuantity += productAmount;
    localStorage.setItem('foodInventory', JSON.stringify(foodInventory));
    coinAmount -= totalCost
    localStorage.setItem('coinAmount', coinAmount);
    exitBuy();
  }
  else{
    alert('Insufficient coins // TURN TO TUTORIAL DISPLAY LATER')
  }

}







































