document.getElementById('btn-out')
  .addEventListener('click',function(){

    document.getElementById('cash-out-tab').classList.remove('hidden');
    document.getElementById('add-money-tab').classList.add('hidden');
  })
  document.getElementById('btn-add').addEventListener('click',function(){

    document.getElementById('add-money-tab').classList.remove('hidden');
    document.getElementById('cash-out-tab').classList.add('hidden');

  })