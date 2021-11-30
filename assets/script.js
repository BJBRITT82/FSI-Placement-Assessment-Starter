// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Brandon Britt" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let totalCookies=gb+cc+sugar
//Buttons
const gbUp = document.querySelector('#add-gb')
const gbDown = document.querySelector('#minus-gb')
const ccUp = document.querySelector('#add-cc')
const ccDown = document.querySelector('#minus-cc')
const sugarUp = document.querySelector('#add-sugar')
const sugarDown = document.querySelector('#minus-sugar')
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//update quantity functions

function gbUpdate(gbQuantity){
    let qty_gb = document.querySelector('#qty-gb')
    qty_gb.innerHTML=gbQuantity
}
function ccUpdate(ccQuantity){
    let qty_cc = document.querySelector('#qty-cc')
    qty_cc.innerHTML=ccQuantity
}
function sugarUpdate(sugarQuantity){
    let qty_sugar = document.querySelector('#qty-sugar')
    qty_sugar.innerHTML=sugarQuantity
}
function totalUpdate(totalQuantity){
    let qty_total = document.querySelector('#qty-total')
    qty_total.innerHTML=totalQuantity
}

// Event listener for clicks on the "+" button for Gingerbread cookies
gbUp.addEventListener('click', function() {
    gb++
    totalCookies++
    gbUpdate(`${gb}`)
    totalUpdate(`${totalCookies}`)
})

gbDown.addEventListener('click', function() {
    if(gb>0){
    gb--
    totalCookies--
    }
    gbUpdate(`${gb}`)
    totalUpdate(`${totalCookies}`)
    
})

ccUp.addEventListener('click', function(e) {
    cc++
    totalCookies++
    ccUpdate(`${cc}`)
    totalUpdate(`${totalCookies}`)
})

ccDown.addEventListener('click', function(e) {
    if(cc>0){
    cc--
    totalCookies--
    }
    ccUpdate(`${cc}`)
    totalUpdate(`${totalCookies}`)
})

sugarUp.addEventListener('click', function(e) {
    sugar++
    totalCookies++
    sugarUpdate(`${sugar}`)
    totalUpdate(`${totalCookies}`)
})

sugarDown.addEventListener('click', function(e) {
    if(sugar>0){
    sugar--
    totalCookies--
    }
    sugarUpdate(`${sugar}`)
    totalUpdate(`${totalCookies}`)
})