



// event.preventDefaault Is used for reloding the page

// step -1 set event Handler
document.getElementById('btn-login')
    .addEventListener('click',function(event){
    // step-2 Prevent Default behavior(preventi reload browser)
    event.preventDefault();
    console.log('Login button is clicked');
    // Step-3 Get the phone Number;
    const phoneNumber = document.getElementById('phn-number').value;
    const getPin = document.getElementById('pin-set').value;
    console.log(phoneNumber , getPin);
    if(phoneNumber.length===11 &&phoneNumber==='01797194819' && getPin ==='7533'){

        // console.log('you are logged in')
        alert('You Are Logged In')
        window.location.href = '/home.html';
        document.getElementById('home-page');
    }
    else{
        alert('Wrong phone number or pin ');
    }


})