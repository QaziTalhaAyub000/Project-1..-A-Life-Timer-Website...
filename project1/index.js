let isDOBopen = false; 
let dob;

const settingIconEl = document.getElementById("settingIcon");
const settingEl     = document.getElementById("DOBsetting" );
const maintextEl    = document.getElementById("maintext"   );
const majortextEl   = document.getElementById("majortext"  );
const dobButtonEl   = document.getElementById("dobButton"  );
const dobInputEl    = document.getElementById("dobInput"   );
  
const yearEl      = document.getElementById("year"    );
const monthEl    = document.getElementById("month"  );
const dayEl      = document.getElementById("day"    );
const hourEl     = document.getElementById("hour"  );
const minuteEl   = document.getElementById("minute" );
const secondEl   = document.getElementById("second" );

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`
};
     


const toggleSetting = () => {
    if(isDOBopen){
        settingEl.classList.add("hide");    

    } else {
        settingEl.classList.remove("hide");
    }
    isDOBopen = !isDOBopen;   
    console.log("Toggle",isDOBopen);
};

const updateAge = () => {
    const currentDate = new Date();

    const dateDiff = currentDate - dob;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) ;
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) %12 );
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30 ;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60 )) % 24 ;
    const minute = Math.floor(dateDiff / (1000 * 60 )) % 60 ;
    const second = Math.floor(dateDiff / 1000 ) % 60 ;
   
    
    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);


};

const setDOBhandler = () => {
    const dateString = dobInputEl.value;
    dob = dateString ? new Date(dateString) : null ;

    if(dob){
        maintextEl.classList.add("hide");
        majortextEl.classList.remove("hide");

        setInterval(() =>updateAge(),1000);
    } else {
        majortextEl.classList.add("hide");
        maintextEl.classList.remove("hide");

    }
};
setDOBhandler();



settingIconEl.addEventListener("click", toggleSetting);
dobButtonEl.addEventListener("click", setDOBhandler);
