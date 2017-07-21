function showDepts(){
  document.getElementById('myDropdown').classList.toggle('show');
}

function selectAll(){
  var title = document.getElementById('all').innerHTML;
  document.getElementById('dropbtn').innerHTML=title;
  document.getElementById('myDropdown').classList.toggle('show');
}

function selectSales(){
  var title = document.getElementById('sales').innerHTML;
  document.getElementById('dropbtn').innerHTML=title;
  document.getElementById('myDropdown').classList.toggle('show');
}

function selectMarket(){
  var title = document.getElementById('market').innerHTML;
  document.getElementById('dropbtn').innerHTML=title;
  document.getElementById('myDropdown').classList.toggle('show');
}

function selectFinance(){
  var title = document.getElementById('finance').innerHTML;
  document.getElementById('dropbtn').innerHTML=title;
  document.getElementById('myDropdown').classList.toggle('show');
}
