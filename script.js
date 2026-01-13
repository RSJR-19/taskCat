const loadingScreen = document.getElementById("loading");
const MainScreen = document.getElementById("main-stage");
const renamePopUpScreen = document.getElementById("renamePopUpScreen");
const statusBox = document.getElementById("statusBox");
const oldUserScreen = document.getElementById("oldUserScreen");
const firstTimeScreen = document.getElementById("firstTimeScreen");
const youReceivedText = document.getElementById("youReceivedText");
const catTypeText = document.getElementById("catTypeText");
const box = document.getElementById("box");
const cat = document.getElementById("cat");
const renameName = document.getElementById("renameName");
let catName;
const renameInput = document.getElementById("renameInput");
const renameConfirmBtn = document.getElementById("renameConfirmBtn");
const statusBoxNameH1 = document.getElementById("statusBoxNameH1");
const hungerBarContent = document.getElementById("hungerBarContent");
const happinessBarContent = document.getElementById("happinessBarContent");
const hungerBarPoints = document.getElementById("hungerBarPoints");

const foodSprite = document.getElementById('foodSprite');

const bottomAccessBar = document.getElementById("bottomAccessBar");

const itemsBtn = document.getElementById("items");
const storeBtn = document.getElementById("store");
const tasksBtn = document.getElementById("tasks");

const itemsPopUpWrapper = document.getElementById("itemsPopUpWrapper");
const storePopUpWrapper = document.getElementById("storePopUpWrapper");
const tasksPopUpWrapper = document.getElementById("tasksPopUpWrapper");

const tutorialPopUpWrapper = document.getElementById("tutorialPopUpWrapper");
const tutorialPopUp = document.getElementById("tutorialPopUp");
const tutorialText = document.getElementById("tutorialText");
const tapToContinue = document.getElementById("tapToContinue");

const itemsFoodMain = document.getElementById('itemsFoodMain');
const itemsToysMain = document.getElementById('itemsToysMain');
const itemsDesignMain = document.getElementById('itemsDesignMain');
const itemsFoodBtn = document.getElementById('itemsFoodBtn');
const itemsToysBtn = document.getElementById('itemsToysBtn');
const itemsDesignBtn = document.getElementById('itemsDesignBtn');
const exitPopUpBtn = document.getElementById('exitPopUpBtn');

const storeFoodMain = document.getElementById('storeFoodMain');
const storeToysMain = document.getElementById('storeToysMain');
const storeDesignMain = document.getElementById('storeDesignMain');
const storeFoodBtn = document.getElementById('storeFoodBtn');
const storeToysBtn = document.getElementById('storeToysBtn');
const storeDesignBtn = document.getElementById('storeDesignBtn');
let foodInStockScreen = document.getElementById('foodInStock');
const foodEmptyScreen = document.getElementById('foodEmpty');

const taskTitleInput = document.getElementById('taskTitleInput');
const taskTitleInputSpan = document.getElementById('taskTitleInputSpan');

let addedHunger = 0;

let tutorialMode;

let createFoodItem;
let createFoodItemPic;
let createFoodItemDetails;
let createFoodItemFeed;
let createFoodItemFeedBtn;
let createFoodTitle;
let createFoodDescript;
let createFoodStock;

let currentTutorialText = 0;
let foodInventory = JSON.parse(localStorage.getItem("foodInventory"))||[];
let foodTitle;
let foodDescription;
let selectedFood;

let taskTitle;

const STATES = {
    LOADING: "loadingScreen",
    MAIN: "MainScreen",
};

const checkFoodType = (foodClassType) =>{
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

const displayFoodStock =()=>{
  foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
  foodInStockScreen.remove();
  let createInStockScreen = document.createElement('div');
  createInStockScreen.id = 'foodInStockScreen';
  createInStockScreen.className = 'stock-screen';
  itemsFoodMain.appendChild(createInStockScreen);
  foodInventory.forEach(availableItem =>{
    foodInStockScreen = document.getElementById('foodInStockScreen');
    if (availableItem.foodQuantity > 0){
      console.log('show')
      createFoodItem = document.createElement("div");
      createFoodItem.className = "food-item";
      foodInStockScreen.appendChild(createFoodItem);
      
      createFoodItemPic = document.createElement('div');
      createFoodItemPic.className = 'food-item-pic';
      createFoodItem.appendChild(createFoodItemPic);
      
      createFoodItemDetails = document.createElement('div');
      createFoodItemDetails.className = 'food-item-details';
      createFoodItem.appendChild(createFoodItemDetails);
      
      createFoodItemFeed = document.createElement('div');
      createFoodItemFeed.className = 'food-item-feed';
      createFoodItem.appendChild(createFoodItemFeed);
      
      createFoodItemFeedBtn = document.createElement('button');
      createFoodItemFeedBtn.className = 'food-item-feed-btn';
      createFoodItemFeedBtn.textContent = 'Feed';
      createFoodItemFeedBtn.addEventListener('click', ()=> feedFood(availableItem.foodClass));
      createFoodItemFeed.appendChild(createFoodItemFeedBtn);
      
      createFoodTitle = document.createElement('h1');
      createFoodDescript = document.createElement('p');
      createFoodTitle.className = 'food-title';
      createFoodDescript.className = 'food-descript';
      checkFoodType(availableItem.foodClass);
      createFoodTitle.textContent = foodTitle;
      createFoodDescript.textContent = foodDescription;
      createFoodItemDetails.appendChild(createFoodTitle);
      createFoodItemDetails.appendChild(createFoodDescript);
      
      createFoodStock = document.createElement('p');
      createFoodStock.className = 'food-stock';
      createFoodStock.textContent = `Stock left: ${availableItem.foodQuantity}`;
      createFoodItemDetails.appendChild(createFoodStock);
    }
    
  })
  
  
}

const checkIfFirstTime = () => {
    if (localStorage.getItem("firstTimeUsing") === null) {
      tutorialMode = true;
        localStorage.setItem("lastHungerAmount", 50); //lowHealth
        localStorage.setItem("lastHungerTimeCheck", Date.now()); //remove later//
        
        localStorage.setItem("foodInventory", JSON.stringify([
          {foodClass: 1, foodQuantity: 0},
          {foodClass:2, foodQuantity: 0},
          {foodClass : 3, foodQuantity : 1},
          {foodClass: 4, foodQuantity : 0}
          ]));
        foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
        
        firstTimeScreen.style.display = "flex";
        oldUserScreen.style.display = "none";
    }
    else {
        oldUserScreen.style.display = "flex";
        firstTimeScreen.style.display = "none";
    }
};

const clearWrappers = () => {
    [itemsPopUpWrapper, storePopUpWrapper, tasksPopUpWrapper, itemsDesignMain, itemsToysMain, itemsFoodMain, storeToysMain, storeDesignMain, storeFoodMain].forEach(
        (wrapper) => (wrapper.style.display = "none")
    );
};

const disablePointerEvents = (toDisable) => {
    toDisable.forEach((element) => (element.style.pointerEvents = "none"));
};

const enablePointerEvents = (toEnable) =>{
  toEnable.forEach((element)=> (element.style.pointerEvents = 'auto'));
}

const randomizeCatType = () => {
    const catTypes = ["wawu", "mimi", "mekus", "kuchi", "nano"];
    const catRandomizer = catTypes[Math.floor(Math.random() * catTypes.length)];

    youReceivedText.innerHTML = `You Received, <br/> ${catRandomizer}!`;
    catTypeText.innerHTML = catRandomizer;
    renameName.innerHTML = catRandomizer;
    catName = catRandomizer;
};

const displayRenamePopUp = () => {
    renamePopUpScreen.style.display = "flex";
    youReceivedText.style.display = "none";
};

const displayStatusBox = () => {
    statusBox.style.display = "flex";
    const catSavedName = JSON.parse(localStorage.getItem("catSavedName"));
    displayHunger();
    statusBoxNameH1.innerHTML = catSavedName;
};

const displayTutorial = () => {
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
            disablePointerEvents([tutorialPopUp, tutorialPopUpWrapper,storeBtn, itemsDesignBtn, itemsToysBtn, storeToysMain, storeDesignMain, exitPopUpBtn]); // add tasks button later//
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
        disablePointerEvents([exitPopUpBtn]);
        enablePointerEvents([tutorialPopUp, tutorialPopUpWrapper]);
        currentTutorialText = 14;
        break;
        
      case 14:
        message = 'Directions sa tasks';
        break;
    }
    
    tutorialText.innerHTML = message;
};

let initialTop;

function feedFoodAnimation(){
  foodSprite.style.top = `${initialTop}%`;
  
  if (initialTop === 50){
    foodSprite.classList.add('shrink');
    return
  }
  
  initialTop -= 1;
  requestAnimationFrame(feedFoodAnimation);
}

foodSprite.addEventListener('transitionend', ()=>{
  let hungerAmount = Number(localStorage.getItem('lastHungerAmount'));
  foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
  
  foodInventory[selectedFood].foodQuantity =- 1;
  localStorage.setItem('foodInventory', JSON.stringify(foodInventory));
  
  hungerAmount += addedHunger;
  localStorage.setItem('lastHungerAmount', hungerAmount);
  displayHunger();
  
  if (tutorialMode){
    displayTutorial();
  }
})

const feedFood =(food)=>{
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
    addedHunger = 15;
    selectedFood = 1;
      break;
    case 3:
   foodSprite.style.backgroundColor = 'orange';
   addedHunger = 30;
   selectedFood = 2;
      break;
    case 4:
   foodSprite.style.backgroundColor = 'blue';
   addedHunger = 1000;
   selectedFood = 3;
      break;
  }
  itemsPopUpWrapper.style.display = 'none';
  bottomAccessBar.style.display = 'none';
  foodSprite.style.display = 'flex';
}

foodSprite.addEventListener('click', ()=>{
  initialTop = 80; //to be changed soon
  requestAnimationFrame(feedFoodAnimation);
  
  if(tutorialMode){
    tutorialPopUpWrapper.style.display = 'none';
  }
})

const computeHunger = () => {
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

function displayHunger() {
    let hungerAmount = Number(localStorage.getItem("lastHungerAmount"));
    hungerBarContent.style.width = `${hungerAmount}%`;
    hungerBarPoints.innerHTML = `${hungerAmount}/100`;
}

window.addEventListener("load", () => {
  localStorage.clear();
    checkIfFirstTime();
    //remove later: //
    cat.style.display = "none";
    renamePopUpScreen.style.display = "none";
    statusBox.style.display = "none";
    bottomAccessBar.style.display = "none";
    tutorialPopUpWrapper.style.display = "none";
    foodInStockScreen.style.display = "none";
    foodEmptyScreen.style.display = 'none';
    foodSprite.style.display = 'none';
    clearWrappers();

    //for testing and reset//

    //localStorage.setItem('lastHungerAmount', 100);
    //localStorage.setItem('lastHungerTimeCheck',Date.now());

    //remove later://
});

box.addEventListener("click", () => {
    randomizeCatType();
    setTimeout(() => displayRenamePopUp(), 100); //remove later for testing only//
    youReceivedText.style.opacity = 1;
    box.style.display = "none";
    cat.style.display = "flex";
});

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

renameInput.addEventListener('blur', ()=>{
  if(renameInput.value.length === 0){
    renameName.innerHTML = catName;
  }
})

renameInput.addEventListener('keydown', (event) => {
  if (event.key === "Backspace" && renameInput.value.length === 0){
    renameName.innerHTML = "";
  }
})

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

    displayTutorial(currentTutorialText);
});

itemsBtn.addEventListener("click", () => {
    itemsPopUpWrapper.style.display = "flex";
    openSelectionMain(itemsFoodMain);
    
    if (tutorialMode){
    tutorialPopUpWrapper.style.zIndex = 99;
    displayTutorial();
    }
});

storeBtn.addEventListener("click", () => {
    storePopUpWrapper.style.display = "flex";
    openSelectionMain(storeFoodMain);
    
    if(tutorialMode){
      displayTutorial();
    }
    
});

tasksBtn.addEventListener("click", () => {
    tasksPopUpWrapper.style.display = "flex";
    if (tutorialMode){
      displayTutorial();
    }
});

taskTitleInput.addEventListener('input', ()=>{
  if(taskTitleInput.value.length > 30){
    taskTitleInput.value = (taskTitleInput.value).slice(0, 30);
  }
  taskTitleInputSpan.innerHTML = taskTitleInput.value;
})

taskTitleInput.addEventListener('blur', ()=>{
  if(taskTitleInput.value.trim().length > 0){
    taskTitle = taskTitleInput.value;
  }
  else{
    taskTitle = "";
    taskTitleInputSpan.innerHTML = 'Please Enter Task Title';
    taskTitleInputSpan.style.color = 'red';
  }
  
  taskTitleInput.style.border = "2px black solid";
})

taskTitleInput.addEventListener('focus', ()=>{
  taskTitleInputSpan.style.color = 'black';
  if(taskTitleInput.value.length === 0){
  taskTitleInputSpan.innerHTML = '';
  taskTitleInput.style.border = "4px black solid";
  }
})

taskTitleInput.addEventListener('keydown', (event)=>{
  if(event.key === "Enter"){
    if(taskTitleInput.value.trim().length > 0){
      taskTitle = taskTitleInput.value;
    }
    else{
      taskTitle = "";
    }
    taskTitleInput.blur();
  }
})

tutorialPopUp.addEventListener("click", () => {
    displayTutorial();
});

//onclick events//
const exitPopUp =(popup)=>{
  popup.style.display = "none";
  if (tutorialMode){
    displayTutorial();
  }
}

const openSelectionMain =(activeScreen)=>{
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

