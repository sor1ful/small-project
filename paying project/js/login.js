



// event.preventDefaault Is used for reloding the page

// step -1 set event Handler
document.getElementById('btn-login')
    .addEventListener('click',function(event){
    // step-2 Prevent Default behavior(preventi reload browser)
    event.preventDefault();
    console.log('Login button is clicked');
    // Step-3 Get the phone Number;
    const phoneNumber = document.getElementById('phn-number').value;
    console.log(phoneNumber);
    const getPin = document.getElementById('pin-set').value;
    console.log(getPin);

})