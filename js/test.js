// let json = require('/Users/barre/Documents/MeuProjetos/HTML/time-tracking-dashboard-main/data.json');

// json.forEach(function (data) {
//     console.log(data.timeframes.daily)
// })
// FINAL
let timeWork = document.querySelector('#time-work')
let tWork = document.querySelector('#t-work')
let timePlay = document.querySelector('#time-play')
let tPlay = document.querySelector('#t-play')
let timeStudy = document.querySelector('#time-study')
let tStudy = document.querySelector('#t-study')
let timeExercise = document.querySelector('#time-exercise')
let tExercise = document.querySelector('#t-exercise')
let timeSocial = document.querySelector('#time-social')
let tSocial = document.querySelector('#t-social')
let timeSelf = document.querySelector('#time-self-care')
let tSelf = document.querySelector('#t-self-care')
// console.log(horario.textContent)
async function daily(){
  try{
    const res = await fetch('../data.json')
    data = await res.json();
    // console.log(data)
   
   timeWork.textContent = data[0].timeframes.daily.current + "hrs";
   tWork.textContent = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";
   
   timePlay.textContent = data[1].timeframes.daily.current + "hrs";
   tPlay.textContent = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

   timeStudy.textContent = data[2].timeframes.daily.current + "hrs";
   tStudy.textContent = "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

   timeExercise.textContent = data[3].timeframes.daily.current + "hrs";
   tExercise.textContent = "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

   timeSocial.textContent = data[4].timeframes.daily.current + "hrs";
   tSocial.textContent = "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

   timeSelf.textContent = data[5].timeframes.daily.current + "hrs";
   tSelf.textContent = "Yesterday - " + data[5].timeframes.daily.previous + "hrs"; 
  //  console.log( data[1].timeframes.daily.current);
  }catch(err){
    console.log(err)
  }
}

async function weekly(){
  try{
    const res = await fetch('../data.json')
    data = await res.json();
    // console.log(data)
   
   timeWork.textContent = data[0].timeframes.weekly.current + "hrs";
   tWork.textContent = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
   
   timePlay.textContent = data[1].timeframes.weekly.current + "hrs";
   tPlay.textContent = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";

   timeStudy.textContent = data[2].timeframes.weekly.current + "hrs";
   tStudy.textContent = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

   timeExercise.textContent = data[3].timeframes.weekly.current + "hrs";
   tExercise.textContent = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

   timeSocial.textContent = data[4].timeframes.weekly.current + "hrs";
   tSocial.textContent = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

   timeSelf.textContent = data[5].timeframes.weekly.current + "hrs";
   tSelf.textContent = "Last Week - " + data[5].timeframes.weekly.previous + "hrs"; 
  //  console.log( data[1].timeframes.daily.current);
  }catch(err){
    console.log(err)
  }
}

async function monthly(){
  try{
    const res = await fetch('../data.json')
    data = await res.json();
    // console.log(data)
   
   timeWork.textContent = data[0].timeframes.monthly.current + "hrs";
   tWork.textContent = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";
   
   timePlay.textContent = data[1].timeframes.monthly.current + "hrs";
   tPlay.textContent = "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

   timeStudy.textContent = data[2].timeframes.monthly.current + "hrs";
   tStudy.textContent = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

   timeExercise.textContent = data[3].timeframes.monthly.current + "hrs";
   tExercise.textContent = "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

   timeSocial.textContent = data[4].timeframes.monthly.current + "hrs";
   tSocial.textContent = "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

   timeSelf.textContent = data[5].timeframes.monthly.current + "hrs";
   tSelf.textContent = "Last Month - " + data[5].timeframes.monthly.previous + "hrs"; 
  //  console.log( data[1].timeframes.daily.current);
  }catch(err){
    console.log(err)
  }
}


