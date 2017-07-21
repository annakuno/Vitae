function editName(){
  if(document.getElementById('editNameOpen').style.display=="flex"){
    document.getElementById('editNameOpen').style.display="none";
    document.getElementById('edit1').innerHTML = "Edit";
  }
  else{
    document.getElementById('editNameOpen').style.display="flex";
    document.getElementById('edit1').innerHTML = "Save";
  }
}

function editEmail(){
  if(document.getElementById('editEmailOpen').style.display=="flex"){
    document.getElementById('editEmailOpen').style.display="none";
    document.getElementById('edit2').innerHTML = "Edit";
  }
  else{
    document.getElementById('editEmailOpen').style.display="flex";
    document.getElementById('edit2').innerHTML = "Save";
  }
}

function editPhone(){
  if(document.getElementById('editPhoneOpen').style.display=="flex"){
    document.getElementById('editPhoneOpen').style.display="none";
    document.getElementById('edit3').innerHTML = "Edit";
  }
  else{
    document.getElementById('editPhoneOpen').style.display="flex";
    document.getElementById('edit3').innerHTML = "Save";
  }
}

function editPosition(){
  if(document.getElementById('editPosOpen').style.display=="flex"){
    document.getElementById('editPosOpen').style.display="none";
    document.getElementById('edit4').innerHTML = "Edit";
  }
  else{
    document.getElementById('editPosOpen').style.display="flex";
    document.getElementById('edit4').innerHTML = "Save";
  }
}

function editBio(){
  if(document.getElementById('editBioOpen').style.display=="flex"){
    document.getElementById('editBioOpen').style.display="none";
    document.getElementById('edit5').innerHTML = "Edit";
    document.getElementById('sideNav').style.height="800px";
  }
  else{
    document.getElementById('editBioOpen').style.display="flex";
    document.getElementById('sideNav').style.height="1000px";
    document.getElementById('edit5').innerHTML = "Save";
  }
}
