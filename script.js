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

const storeFoodMain = document.getElementById('storeFoodMain');
const storeToysMain = document.getElementById('storeToysMain');
const storeDesignMain = document.getElementById('storeDesignMain');
const storeFoodBtn = document.getElementById('storeFoodBtn');
const storeToysBtn = document.getElementById('storeToysBtn');
const storeDesignBtn = document.getElementById('storeDesignBtn');
const foodInStockScreen = document.getElementById('foodInStock');
const foodEmptyScreen = document.getElementById('foodEmpty');

let currentTutorialText = 0;
let foodInventory = JSON.parse(localStorage.getItem("foodInventory"))||[];
let foodTitle;
let foodDescription;


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
  foodInventory.forEach(availableItem =>{
    let createFoodItem = document.createElement("div");
    createFoodItem.className = "food-item";
    foodInStockScreen.appendChild(createFoodItem);
    
    let createFoodItemPic = document.createElement('div');
    createFoodItemPic.className = 'food-item-pic';
    createFoodItem.appendChild(createFoodItemPic);
    
    let createFoodItemDetails = document.createElement('div');
    createFoodItemDetails.className = 'food-item-details';
    createFoodItem.appendChild(createFoodItemDetails);
    
    let createFoodItemFeed = document.createElement('div');
    createFoodItemFeed.className = 'food-item-feed';
    createFoodItem.appendChild(createFoodItemFeed);
    
    let createFoodTitle = document.createElement('h1');
    let createFoodDescript = document.createElement('p');
    createFoodTitle.className = 'food-title';
    createFoodDescript.className = 'food-descript';
    checkFoodType(availableItem.foodClass);
    createFoodTitle.textContent = foodTitle;
    createFoodDescript.textContent = foodDescription;
    createFoodItemDetails.appendChild(createFoodTitle);
    createFoodItemDetails.appendChild(createFoodDescript);
    
    let createFoodStock = document.createElement('p');
    createFoodStock.className = 'food-stock';
    createFoodStock.textContent = `Stock left: ${availableItem.foodQuantity}`;
    createFoodItemDetails.appendChild(createFoodStock);
  })

  
}

const checkIfFirstTime = () => {
    if (localStorage.getItem("firstTimeUsing") === null) {
        localStorage.setItem("firstTimeUsing", "true");

        localStorage.setItem("lastHungerAmount", 50); //lowHealth
        localStorage.setItem("lastHungerTimeCheck", Date.now()); //remove later//
        
        localStorage.setItem("foodInventory", JSON.stringify([{foodClass : 3, foodQuantity : 1}]));
        foodInventory = JSON.parse(localStorage.getItem('foodInventory'));
        console.log(foodInventory)
        
        
    }
    const isFirstTime = localStorage.getItem("firstTimeUsing") === "true";

    if (isFirstTime) {
        firstTimeScreen.style.display = "flex";
        oldUserScreen.style.display = "none";
    } else {
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
            disablePointerEvents([tutorialPopUp, storeBtn, tasksBtn, itemsDesignBtn, itemsToysBtn, storeToysMain, storeDesignMain]);
            break;

        case 2:
            message = "oi oi oi";
            break;
    }
    tutorialText.innerHTML = message;
};

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
        renameInput.blur();
    }
});

renameConfirmBtn.addEventListener("click", () => {
    if (!renameInput.value) {
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
});
storeBtn.addEventListener("click", () => {
    storePopUpWrapper.style.display = "flex";
    openSelectionMain(storeFoodMain);
});
tasksBtn.addEventListener("click", () => {
    tasksPopUpWrapper.style.display = "flex";
});
tutorialPopUp.addEventListener("click", () => {
    displayTutorial();
});

//onclick events//
const exitPopUp =(popup)=>{
  popup.style.display = "none";
}

const openSelectionMain =(activeScreen)=>{
  [itemsFoodMain, itemsToysMain, itemsDesignMain, storeFoodMain, storeDesignMain, storeToysMain].forEach(screen => screen.style.display = 'none');
  activeScreen.style.display = "flex";
  
  switch(activeScreen){
    case itemsFoodMain:
      if (foodInventory.length > 0){
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

