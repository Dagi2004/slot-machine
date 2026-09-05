
// amount of player 
let playerStartingAmount=500

let minimumBet = 5 ;

// credit is initally equal to starting amount
let credit = playerStartingAmount;

let numberOfReel = 3 // total number of reels 


// Users start certain amount of money 
 // which is basically positive number(money)

 // there are two wager 
 // minimum - 5
 // maxmimum - 50 
 // bet is immeidaitwly deducted from their balance before the spin

 // three reels with five symbols to spin
  // randomized(equal chance of getting all the symbols)

// winner is selected based on the all the matches
// should update the total he gets
// each symbols has different payout multiplier 
// but for now lets consider having the same multiplier


// the game continues as long as they have balance remaining in their account

let ElementToFactorConverter = {
     "🍒" : 10 , 
      "🍒" : 10 , 
       "🍇" : 20 , 
        "⭐" : 25, 
         "7️⃣" : 20 , 
         "🍌" : 30
} ; 
   

// select all the reels
const reel = document.querySelectorAll(".reel")

// total credit ( inital deposit + winning)
let totalCredit = document.querySelector("#credit")

// spin btn 
const spinBtn= document.querySelector("#spin").addEventListener("click",spinReel)



// starting Balance
const startingAmount = document.querySelector("#current").innerText = playerStartingAmount

// event listner for betting five
const betFivebtn = document.querySelector("#bet-5").addEventListener("click", betFive)

// betFive.disabled = false

const betFiftybtn = document.querySelector("#bet-50").addEventListener("click", betFifty)

const reelBox = document.querySelectorAll(".reel-box")

// get random symbols from the symbols array
// reels are selected querySelecttorAll that means they retunrn nodeList
// access the values using the index
function spinReel(){

    if(credit>=minimumBet){
   let reelOne = getRandomReels()
   let reelTwo = getRandomReels()
   let reelThree = getRandomReels()

   let reelArray=[]

   // get each indiviual symbol and attach it in the 
   reel[0].innerText = reelOne
   reel[1].innerText = reelTwo
   reel[2].innerText = reelThree


    reelArray.push(reelOne,reelTwo,reelThree);

    console.log(reelArray)


    // used Every Method to check if elements match the firstElement of array 
    const checkIfAllTheElementMatches = reelArray.every(elem=>elem===reelArray[0]) 


    // condition to winner amount calculation
    if(checkIfAllTheElementMatches){

        // add a winner Ui 
        reelBox.forEach((rel)=>{
               rel.classList.add("winner")
         // remove the new Winner Ui after 3 sec
            setTimeout(()=>{
                rel.classList.remove("winner")
            },3000)
        })
     



        // get the keys /elemeents of the reel
        const elementFromReel=Object.keys(ElementToFactorConverter)

        // get the value from the object
            const multiplier = ElementToFactorConverter[reelArray[0]];

            credit=credit + (multiplier*numberOfReel); 
            

        if(elementFromReel.includes("🍒")){
            totalCredit.innerText = credit ; 
        }
         else if(elementFromReel.includes("🍋")){
            totalCredit.innerText = credit ;     
        }
         else if (elementFromReel.includes("🍇")){
            totalCredit.innerText = credit ; 
        }
         else if (elementFromReel.includes("⭐")){
            totalCredit.innerText = credit ;    
            
        }
         else  {
            totalCredit.innerText = credit ;
        }
    }
   
    }

    else if(credit<minimumBet || credit>0){
        alert("Insufficient Balance to continue")

    
    }


    else{
        
      alert("Game Over")
       
    }

}

// fuction to get Random Reels
function getRandomReels(){
    // contains the reels symbols
let symbols = [
    "🍒",
     "🍋", 
     "🍇", 
     "⭐", 
     "7️⃣"
    ]

     return symbols[Math.floor(Math.random()*symbols.length)]
}


// before spin it should deduct bet from the total

function betFive(){
 credit-=minimumBet;
 totalCredit.innerText= credit
} 

function betFifty(){
 credit-=50;
 totalCredit.innerText=credit
 console.log("hey")
}  

