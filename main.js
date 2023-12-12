//Get book elements 

const bookingname = document.getElementById("name");
const bookingemail = document.getElementById("email");
const arrivalDate = document.getElementById("arrivalDate");
const departureDate = document.getElementById("departureDate");
const childBelow5 = document.getElementById("childBelow5");
const childAbove5 = document.getElementById("childAbove5");
const adults = document.getElementById("adults");
const singleRoom = document.getElementById("singleRoom");
const doubleRoom = document.getElementById("doubleRoom");
const tripleRoom = document.getElementById("tripleRoom");
const extraBed = document.getElementById("extraBed");
const dropdownbook = document.getElementById("dropdownbook");
const promocode = document.getElementById("promo");
const bookbtn = document.getElementById("bookBtn");
const bookoutput = document.getElementById("bookoutput");
const loyalty = document.getElementById("loyalty");
const clearbtn = document.getElementById("clearbtn");





//Get adventure declatarions 

const advName = document.getElementById("advName");
const advEmail = document.getElementById("advEmail");
const advDate = document.getElementById("advDate");
const localAdults = document.getElementById("localAdults");
const localChildren = document.getElementById("localChildren");
const foreignAdults = document.getElementById("foreignAdults");
const foreignChildren = document.getElementById("foreignChildren");
const hoursAdv = document.getElementById("hoursAdv");
const guideAdult = document.getElementById("guideAdult");
const guideChild = document.getElementById("guideChild");
const guideBoth = document.getElementById("guideBoth");
const advbtn = document.getElementById("advbtn");
const resetAdv = document.getElementById("resetAdv");
const dropdown = document.getElementById("dropdown");


// Get other elements 

const totalbookadv = document.getElementById("totalbookadv");
const loyalbtn = document.getElementById("loyalbtn");
const favbtn = document.getElementById("favbtn");
const loyaltyOutput = document.getElementById("loyalty");





//event listner 

bookbtn.addEventListener('click',book);
clearbtn.addEventListener('click',resetBook);
advbtn.addEventListener('click',bookAdv);
resetAdv.addEventListener('click',resetAdventure);
loyalbtn.addEventListener('click',checkloyalty);
favbtn.addEventListener('click',addFav);



   
//declarations 

let bookbill = 0;
let perday = 0;
let sroomCost = 25000;
let droomCost = 35000;
let troomcost = 40000;
let nbedcost = 8000;
let cFoodcost = 5000;
let promoValue = "Promo123";
let totalRoomsNo =0;
let printWifi = '';


//declarations adventure

let bookadvbill =0;
let perhour = 0;
let LAC = 5000;
let LCC = 2000;
let FAC = 10000;
let FCC = 5000;
let AGC = 1000;
let CGC = 500;
let view = "Random";

//declarations other 

let loyaltyRoomsPoints = 0; 
let totalBill = 0;



//functions 
//function for promo 
function promoDiscount() {
    
    const promoEntered = promocode.value.trim();

    if (promoEntered == promoValue) {
        promoGiven = 0.05;
    }
    else {
        promoGiven = 0;
    }
}




//function for cuurent booking
function book() {
    var arrival = new Date (document.getElementById("arrivalDate").value);
    var departure = new Date (document.getElementById("departureDate").value);

    if (departure <= arrival)
    {
        alert("Arrival Date cannot be greater than departure date")
    }

    const timeDiff = departure - arrival;
    const time = timeDiff / (1000 * 60 * 60 * 24);
    console.log(time);

    const bookingName = (bookingname.value);
    const bookingEmail = (bookingemail.value);
    var viewSelected = (dropdownbook.value);


    const wirelessFidelityWIFI = document.getElementById("wifi");
    if (wirelessFidelityWIFI.checked) {
        printWifi = "have Wifi";
    }
    else {
        printWifi = "not have Wifi";
    }


    const childUnder5 = parseInt(childBelow5.value) ||0;
    const childOver5 = parseInt(childAbove5.value)||0;
    const adultsBook = parseInt(adults.value)||0;
    const single = parseInt(singleRoom.value)||0;
    const double = parseInt(doubleRoom.value)||0;
    const triple = parseInt(tripleRoom.value)||0;
    const newBed = parseInt(extraBed.value)||0;

    if (bookingName.trim() === '' || bookingEmail.trim()=== '') {
        alert(" Name and Email Addess are mandatory to continue booking")
    }

    promoDiscount();



    totalRoomsNo = single + double + triple;
    perday = single * sroomCost + double * droomCost + triple * troomcost + newBed * nbedcost + childOver5 * cFoodcost;
    bookbill = time * perday * (1- promoGiven);
    console.log(bookbill);

    bookoutput.innerText = `You have succusfully booked ${totalRoomsNo} rooms with a ${viewSelected}, under the reservation of ${bookingName}, your check in time is on ${arrival}. You will futher ${printWifi}, and your total booking bill is Rs.${bookbill}. `; 
    finalOutupt();
}




//function for booking adventure 
function bookAdv() {
    var arrivalAdv = new Date (document.getElementById("advDate").value);

    const ADVname = (advName.value);
    const ADVemail = (advEmail.value);


    const ADVlocalAdults = parseInt(localAdults.value) ||0;
    const ADVlocalChld = parseInt(localChildren.value) ||0;
    const ADVforAdult = parseInt(foreignAdults.value) ||0;
    const ADVforChild = parseInt(foreignChildren.value) ||0;
    const ADVhours = parseInt(hoursAdv.value) ||0;
    const ADVguideAdult = parseInt(guideAdult.value) ||0;
    const ADVguideChild = parseInt(guideChild.value) ||0;


    if (ADVname.trim() === '' || ADVemail.trim()=== '') {
        alert(" Name and Email Addess are mandatory to continue booking")
    }

    var valueSelected = dropdown.value;
    perhour = ADVlocalAdults * LAC + ADVlocalChld * LCC + ADVforAdult * FAC + ADVforChild * FCC + ADVguideAdult * AGC + ADVguideChild * CGC;
    bookadvbill = perhour * ADVhours;
    console.log(bookadvbill);
    adventureoutput.innerText = `You have succesfuuly booked ${valueSelected} for ${ADVhours} hours on ${arrivalAdv}, under the reservation of ${ADVname}. An email with further deatails has been sent to ${ADVemail}. Your total is Rs.${bookadvbill}.`; 



    finalOutupt()
}

//function for loyalty 

function checkloyalty() {
    const single = parseInt(singleRoom.value)||0;
    const double = parseInt(doubleRoom.value)||0;
    const triple = parseInt(tripleRoom.value)||0;
    const loyaltyRooms = single + double + triple;
    if( loyaltyRooms >= 3){
        console.log(loyaltyRooms);
        loyaltyRoomsPoints = 20  * loyaltyRooms;
        loyaltyOutput.innerText = `You are eligible for ${loyaltyRoomsPoints} loyalty points !`
    }
    else {
        console.log(loyaltyRooms);

        loyaltyOutput.innerText = `You are not eligible  for any loyaly points !`
    }
}

//function for total booking cost 

function finalOutupt() {
    totalBill = bookbill + bookadvbill;
    totalbookadv.innerText = `Your total bill is Rs${totalBill}`;
}

//reset functions 
function resetBook(){
    document.getElementById("bookform").reset();
} 

function resetAdventure(){
    document.getElementById("advform").reset();
}

function addFav() {
    let favbooking = {
        "1. Booking Name " : (bookingname.value),
        "2. Booking Email " : (bookingemail.value),
        "3. Single Rooms  " : (singleRoom.value),
        "4. Double Rooms  " : (doubleRoom.value),
        "5. triple Rooms  " : (tripleRoom.value),
        "6. Arrival date  " : (arrivalDate.value),
        "7. Departure Dates  " : (departureDate.value),
        "8. Adults " : (adults.value),
        "9. Children Below 5" : (childBelow5.value),
        "10. Children Above 5" : (childAbove5.value),
        "11. Extra Bed " : (extraBed.value),
        "12. View" : (dropdownbook.value),
        "13. Promo Code" : (promo.value),

        "1. Adventure Name " : (advName.value),
        "2. Adventure Email " : (advEmail.value),
        "3. Local adults  " : (localAdults.value),
        "4. Local children  " : (localChildren.value),
        "5. Foreign children  " : (foreignChildren.value),
        "6. Foreign adults  " : (foreignAdults.value),
        "7. Hours " : (hoursAdv.value),
        "8. Adult Guides" : (guideAdult.value),
        "9. Child Guides" : (guideChild.value),
        "10. Adventure type" : (extraBed.value),
        "11. Adventure Date" : (dropdown.value),
    };

    let favbooking_serial = JSON.stringify(favbooking);
    console.log(favbooking_serial);

    localStorage.setItem("Booking favourties - ", favbooking_serial);
    alert("Current Details have been added to Favourites !");
}


