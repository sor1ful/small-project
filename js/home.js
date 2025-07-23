// const remain = document.getElementById('availableTk').value;

// console.log(remain,taka, pinNo);

// event handler done step-1
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // step-2 get amount from input
        const taka = document.getElementById('add-amount').value;
        const takaNumber = parseFloat(taka);
        const pinNo = document.getElementById('pin-check').value;
        // console.log('button clicked',taka,pinNo);

        if(pinNo==='7533'){

            const availableBlance = document.getElementById('availableTk').innerText;
            // console.log(availableBlance);
            const balanceNumber = parseFloat(availableBlance);
            console.log(balanceNumber);
            const newBalance = takaNumber+balanceNumber; 

            document.getElementById('availableTk').innerText = newBalance;
        }
        else{
            alert('please provide correct pin or mobile');
        }
    })