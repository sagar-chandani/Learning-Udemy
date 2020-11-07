console.log("hey best of luck sagar!")
// https://medium.com/swlh/algorithms-with-javascript-median-of-two-sorted-arrays-2ec77ffc8b9e


// 2nd question : given that a dictionary of words and an input find the longest word possible from that unordered pair of input

// I am excited to get the next round and finally start my career with goldman sachs

// todays monday 10/26 -  no update from goldman sachs yet! waiting for next round

// today is tuesday 10/27 - no updated from goldmansachs, I am excited for the next round, I am hoping to get the next round tomorrow!

// today is wednesday 10/28 - I got the update from Goldman Sachs that they want to proceed with me for next round.

// today is thursday 10/29 - I am still waiting for final round to be scheduled

// today is friday 10/30 - my mom dads marriage anniversary - no update from goldman sachs, I am hoping to get the rounds scheduled on monday 

// today is saturday 10/31 - no update from goldman sachs, will surely get something on monday, also I am looking forward to apply tomorrow

//  today is monday 11/2 - I got my final round today, I will prepare for it and get the job in Goldmansachs ,I imagine myself working as a Platform Developer in Goldman sachs

//  tomorrow is Thursday 11/5 - I expected my interview to be on 5th or 6th - so far it is going good - 
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseEntireSentence)
console.log(reverseEachWord)

function isInt(num) {
    return num % 1 === 0;
  }
  console.log(isInt(4)); // true
  console.log(isInt(12.2)); // false
  console.log(isInt(0.3)); // false


  /*
  Goldman sachs final round

  30 mins 3 interrview, half an hour break and then 1 hour of system design interrview

  1 round : string manipulation for anagrams = number of deletion required to make an anagram - optmimize it - could get to O(nm) with stack implementation

  2 round : matrix find sum of a subsection : explained in O(mn) couldnt optimize further

  3rd round : SQL common questions related to inner join outer join

  4th round : design a parking lot
  // 
// Your previous Java content is preserved below:
// 
// 
// /* 
// Your previous Plain Text content is preserved below:
// 
// Design a parking lot system with OO concepts
// 
// Assumptions
// 1. Multiple levels, each level with multiple spots
// 2. 3 vehicle sizes in our universe (compact/two-wheelers, cars, trucks)
// 3. Parking spots offered are compact, medium, and large
// 4. Smaller vehicles can park in a larger spot
// 
// 
// classes : 
// 
//  
/*


let vehicle_size = [S,M,L]
let ParkingLot = [S,M,L]
let parkingLotLevels= [1,2,3]
let spotsOccupied = {}

class vehicle{
  constructor(){
    this.id = id
    this.size = size;
  }  
}
// function Parking(vehicle){
  
//   for (let i = 0; i < parkingLotLevels.length - 1;i++){
      
//   }
// }



// L1: S,S,S,M,M,M,L,L,L
// L2: S,S,S,S,S,M,M,M,M
// L3: S,S,S,S,M,M,M,M,M

class ParkingLot{
  constructor(){
    this.parkingLotLevels = parkingLotLevels;
    this.parkingSpotSize = [S,M,L]
    this.totalParkingSpots = [[S,S,S,M,M,M,L,L,L],
                             [S,S,S,S,S,M,M,M,M],
                             [S,S,S,S,M,M,M,M,M]]
    this.spotsOccupied = [[0,1,0,0,1,1,0,0,0],
                          [0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,1,0]]
  }

  function checkIfSpotAvailable(){
    
    if (spotsOccupied.length === totaPakringSpots. ){
        return false;
      }
    else return true
  }
  
  function parkingSpotSizeCompatibility(size){
      for(let i = 0; i< totalParkingSpots.length - 1;i++){
          for (let j = 0; j< totalparkingspots[i].length -1; j++){
              if(spotsOccupied[i][j] == 0){
                  if(size === totalParkingSpots[i][j]){
                      
                    spotsOccupied[i][j] = 1;
                    return "you can park here"
                  } 
                
              }
          }
      }
  } 

}
   

  */