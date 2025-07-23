


document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {

        event.preventDefault();
        const getcashpin = document.getElementById('cash-out-pin').value;
        const getAmount = document.getElementById('cash-out-amount').value;
        const newGetAmount= parseFloat(getAmount);
        if (getcashpin === '7533') {

            const existTk = document.getElementById('availableTk').innerText;
            const newExist = parseFloat(existTk);


                const setNew = (newExist - newGetAmount);
            document.getElementById('availableTk').innerText = setNew;


            
            


        }
        else{
            alert('your pin did not match');
        }

    })