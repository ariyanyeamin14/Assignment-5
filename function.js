document.getElementById('show-history-btn').addEventListener('click',function(){

    document.getElementById('show-history-btn').classList.add('bg-lime-300');
    document.getElementById('show-donation-btn').classList.remove('bg-lime-300');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-contanier').classList.add('hidden');

})

document.getElementById('show-donation-btn').addEventListener('click',function(){
    document.getElementById('show-donation-btn').classList.add('bg-lime-300');
    document.getElementById('show-history-btn').classList.remove('bg-lime-300');
    document.getElementById('donation-contanier').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden')
})