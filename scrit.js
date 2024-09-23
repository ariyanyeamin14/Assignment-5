document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const donationNoakhaliInput = getInputValueById('donation-noakhali-input');
    const donationOfNoakhali = getTextValueById('total-donation-noakhali');
    const balance = getTextValueById('balance');

    if (donationNoakhaliInput <= 0 || isNaN(donationNoakhaliInput)) {
        alert('Invalid Donation Input');
        return
    } 
    if(donationNoakhaliInput > balance){
        alert('Sorry! Insufficiant balance');
        return
    }

    const newBalance = balance - donationNoakhaliInput;
    document.getElementById('balance').innerText = newBalance;

    const totalDonationOfNoakhali = donationNoakhaliInput + donationOfNoakhali;
    document.getElementById('total-donation-noakhali').innerText = totalDonationOfNoakhali;


    const date = Date();
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="border-2 border-gray-300 rounded-xl p-4 space-y-4">
            <h3 class="text-xl font-semibold">${donationNoakhaliInput} Taka donated for Famine-2024 at Noakhali, Bangladesh</h3>
            <p>Date: ${date}</p>
        </div>
    `;
    document.getElementById('history-container').appendChild(div)
})

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const donationFeniInput = getInputValueById('donation-feni-input');
    const donationOfFeni = getTextValueById('total-donation-feni');
    const balance = getTextValueById('balance');

    if (donationFeniInput <= 0 || isNaN(donationFeniInput)) {
        alert('Invalid Donation Input');
        return
    }
    if(donationFeniInput > balance){
        alert('Sorry! Insufficiant balance');
        return
    }

    const newBalance = balance - donationFeniInput;
    document.getElementById('balance').innerText = newBalance;

    const totalDonationOfFeni = donationFeniInput + donationOfFeni;
    document.getElementById('total-donation-feni').innerText = totalDonationOfFeni;



    const date = Date();
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="border-2 border-gray-300 rounded-xl p-4 space-y-4">
            <h3 class="text-xl font-semibold">${donationFeniInput} Taka donated for Famine-2024 at Feni, Bangladesh</h3>
            <p>Date: ${date}</p>
        </div>
    `;
    document.getElementById('history-container').appendChild(div)
})
document.getElementById('btn-donate-movement').addEventListener('click', function () {
    const donationMovementInput = getInputValueById('donation-movement-input');
    const donationOfMovement = getTextValueById('total-donation-movement');
    const balance = getTextValueById('balance');

    if (donationMovementInput <= 0 || isNaN(donationMovementInput)) {
        alert('Invalid Donation Input');
        return
    }
    if(donationMovementInput > balance){
        alert('Sorry! Insufficiant balance');
        return
    }

    const newBalance = balance - donationMovementInput;
    document.getElementById('balance').innerText = newBalance;

    const totalDonationOfMovement = donationMovementInput + donationOfMovement;
    document.getElementById('total-donation-movement').innerText = totalDonationOfMovement;

    const date = Date();
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="border-2 border-gray-300 rounded-xl p-4 space-y-4">
            <h3 class="text-xl font-semibold">${donationMovementInput} Taka donated for Quota Movement, Bangladesh</h3>
            <p>Date: ${date}</p>
        </div>
    `;
    document.getElementById('history-container').appendChild(div)
})