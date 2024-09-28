

document.getElementById('donations-btn').addEventListener('click', function (event) {
    const hiden1=document.getElementById('donate-hiden1');
    const input = document.getElementById('input-amount').value;

    const inputAmount = parseFloat(input);

    const tittle = document.getElementById('donate-title').innerText;

    const descriptionadd = document.getElementById('donate-description').innerText;
    console.log(descriptionadd);
    if (inputAmount > 0) {
        const donatebtn = document.getElementById('donations-btn');
        hiden1.classList.remove('hidden');
        donatebtn.onclick = my_modal_5.showModal();

        const balance = document.getElementById('amount').innerText;
        const balanceAmount = parseFloat(balance)

        const newbalance = balanceAmount - inputAmount;
        document.getElementById('amount').innerText = newbalance;
        const donatebalance = document.getElementById('donate-balance').innerText;
        const donateamount = parseFloat(donatebalance);
        console.log(typeof donateamount);
        const newdonatebalance = document.getElementById('donate-balance').innerText = donateamount + inputAmount;

        console.log(newdonatebalance);
        document.getElementById('donate-balance-add').innerText = newdonatebalance;
        document.getElementById('input-amount').value = "";

        document.getElementById('donate-title-add').innerText = tittle;
        const hidden = document.getElementById('donate-title-hidden');
        hidden.classList.remove('hidden');

        const bangladeshTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        console.log(bangladeshTime);
        document.getElementById('time-zone').innerText = bangladeshTime;


    }
    else {
        alert('Please enter the amount');
    }
})
document.getElementById('donations-btn2').addEventListener('click', function (event) {
    console.log("hello");
    const hiden2=document.getElementById('donate-hiden2');
    const input = document.getElementById('input-amount2').value;
    // console.log(typeof input);
    const inputAmount = parseFloat(input);
    console.log(inputAmount);
    const tittle = document.getElementById('donate-title2').innerText;
    console.log(tittle);
    if (inputAmount > 0) {
        hiden2.classList.remove('hidden');
        // console.log("hello");
        const donatebtn = document.getElementById('donations-btn2');
        // console.log(donatebtn, "donatebtn click");
        donatebtn.onclick = my_modal_5.showModal();
        const balance = document.getElementById('amount').innerText;
        const balanceAmount = parseFloat(balance)
        // console.log(balanceAmount);
        const newbalance = balanceAmount - inputAmount;
        document.getElementById('amount').innerText = newbalance;
        const donatebalance = document.getElementById('donate-balance2').innerText;
        const donateamount = parseFloat(donatebalance);
        const newdonatebalance = document.getElementById('donate-balance2').innerText = donateamount + inputAmount;
        document.getElementById('donate-balance-add2').innerText = newdonatebalance;
        document.getElementById('input-amount2').value = "";
        document.getElementById('donate-title-add2').innerText = tittle;
        const hidden = document.getElementById('donate-title-hidden2');
        hidden.classList.remove('hidden');
        const bangladeshTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        console.log(bangladeshTime);
        document.getElementById('time-zone2').innerText = bangladeshTime;

    }

})


document.getElementById('donations-btn3').addEventListener('click', function (event) {
    console.log("hello");
    const hiden3=document.getElementById('donate-hiden3');
    const input = document.getElementById('input-amount3').value;
    // console.log(typeof input);
    const inputAmount = parseFloat(input);
    console.log(inputAmount);
    const tittle = document.getElementById('donate-title3').innerText;
    console.log(tittle);
    if (inputAmount > 0) {
        hiden3.classList.remove('hidden');
        // console.log("hello");
        const donatebtn = document.getElementById('donations-btn3');
        // console.log(donatebtn, "donatebtn click");
        donatebtn.onclick = my_modal_5.showModal();
        const balance = document.getElementById('amount').innerText;
        const balanceAmount = parseFloat(balance)
        // console.log(balanceAmount);
        const newbalance = balanceAmount - inputAmount;
        document.getElementById('amount').innerText = newbalance;
        const donatebalance = document.getElementById('donate-balance3').innerText;
        const donateamount = parseFloat(donatebalance);
        const newdonatebalance = document.getElementById('donate-balance3').innerText = donateamount + inputAmount;
        document.getElementById('donate-balance-add3').innerText = newdonatebalance;
        document.getElementById('input-amount3').value = "";
        document.getElementById('donate-title-add3').innerText = tittle;
        const hidden = document.getElementById('donate-title-hidden3');
        hidden.classList.remove('hidden');
        const bangladeshTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        console.log(bangladeshTime);
        document.getElementById('time-zone3').innerText = bangladeshTime;

    }

})

























function toggleSection(show, hide) {
    const mainsection = document.getElementById(show);
    const footersection = document.getElementById(hide);
    footersection.style.display = 'none';

    mainsection.style.display = 'block';
}




function ActiveStatus(activeButtonId) {
    const activeButton = document.getElementById('active-btn');
    const activeButton2 = document.getElementById('active-btn2');

    if (activeButtonId === 'active-btn') {
        activeButton.classList.remove('bg-gray-300', 'text-black', 'py-3', 'px-8',);
        activeButton.classList.add('bg-blue-500', 'text-white');
        activeButton2.classList.remove('bg-blue-500', 'text-white');
        activeButton2.classList.add('bg-gray-300', 'text-black');
        main.classList.remove('hidden');
    } else {
        activeButton2.classList.remove('bg-gray-300', 'text-black');
        activeButton2.classList.add('bg-blue-500', 'text-white');
        activeButton.classList.remove('bg-blue-500', 'text-white');
        activeButton.classList.add('bg-gray-300', 'text-black');
        activeButton2.classList.remove('hidden');
    }
}


ActiveStatus('active-btn');