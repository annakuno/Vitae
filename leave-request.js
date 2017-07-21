function showDepts(){
  document.getElementById('myDropdown').classList.toggle('show');
}

function selectSales(){
  var title1 = document.getElementById('sales').innerHTML;
  document.getElementById('title').innerHTML=title1;
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('rejection').style.display="none";
  document.getElementById('rejection2').style.display="none";
}

function selectMarket(){
  var title1 = document.getElementById('market').innerHTML;
  document.getElementById('title').innerHTML=title1;
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('rejection').style.display="none";
  document.getElementById('rejection2').style.display="none";
}

function selectFinance(){
  var title1 = document.getElementById('finance').innerHTML;
  document.getElementById('title').innerHTML=title1;
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('rejection').style.display="block";
  document.getElementById('rejection2').style.display="block";
}
