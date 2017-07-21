function showDiv1(){
  if(document.getElementById('editableMenu1').style.display=="block"){
    document.getElementById('editableMenu1').style.display="none";
    document.getElementById('edit1').innerHTML = "View";
  }
  else{
    document.getElementById('editableMenu1').style.display="block";
    document.getElementById('edit1').innerHTML = "Save";
  }

  var messages = document.getElementById('black-msg1');
  var invitation = document.getElementById('black-inv1');
  var announcement = document.getElementById('black-ann1');
  var doc = document.getElementById('black-doc1');

  if(messages.style.display=="block" && invitation.style.display=="block" && announcement.style.display=="block" && doc.style.display=="block"){
    document.getElementById('data1').innerHTML="All notifications";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data1').innerHTML="None";
  }
  else if(messages.style.display=="block" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data1').innerHTML="Only direct messages";
  }
  else if(messages.style.display=="none" && invitation.style.display=="block" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data1').innerHTML="Only when invitations are accepted";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="block" && doc.style.display=="none"){
    document.getElementById('data1').innerHTML="Only when new announcements are created";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="block"){
    document.getElementById('data1').innerHTML="Only when new documents are uploaded";
  }
}

function showDiv2(){
  if(document.getElementById('editableMenu2').style.display=="block"){
    document.getElementById('editableMenu2').style.display="none";
    document.getElementById('edit2').innerHTML = "Edit";
  }
  else{
    document.getElementById('editableMenu2').style.display="block";
    document.getElementById('edit2').innerHTML = "Save";
  }

  var messages = document.getElementById('black-msg2');
  var invitation = document.getElementById('black-inv2');
  var announcement = document.getElementById('black-ann2');
  var doc = document.getElementById('black-doc2');

  if(messages.style.display=="block" && invitation.style.display=="block" && announcement.style.display=="block" && doc.style.display=="block"){
    document.getElementById('data2').innerHTML="All notifications";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data2').innerHTML="None";
  }
  else if(messages.style.display=="block" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data2').innerHTML="Only direct messages";
  }
  else if(messages.style.display=="none" && invitation.style.display=="block" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data2').innerHTML="Only when invitations are accepted";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="block" && doc.style.display=="none"){
    document.getElementById('data2').innerHTML="Only when new announcements are created";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="block"){
    document.getElementById('data2').innerHTML="Only when new documents are uploaded";
  }
}

function showDiv3(){
  if(document.getElementById('editableMenu3').style.display=="block"){
    document.getElementById('editableMenu3').style.display="none";
    document.getElementById('edit3').innerHTML = "Edit";
  }
  else{
    document.getElementById('editableMenu3').style.display="block";
    document.getElementById('edit3').innerHTML = "Save";
  }

  var messages = document.getElementById('black-msg3');
  var invitation = document.getElementById('black-inv3');
  var announcement = document.getElementById('black-ann3');
  var doc = document.getElementById('black-doc3');

  if(messages.style.display=="block" && invitation.style.display=="block" && announcement.style.display=="block" && doc.style.display=="block"){
    document.getElementById('data3').innerHTML="All notifications";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data3').innerHTML="None";
  }
  else if(messages.style.display=="block" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data3').innerHTML="Only direct messages";
  }
  else if(messages.style.display=="none" && invitation.style.display=="block" && announcement.style.display=="none" && doc.style.display=="none"){
    document.getElementById('data3').innerHTML="Only when invitations are accepted";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="block" && doc.style.display=="none"){
    document.getElementById('data3').innerHTML="Only when new announcements are created";
  }
  else if(messages.style.display=="none" && invitation.style.display=="none" && announcement.style.display=="none" && doc.style.display=="block"){
    document.getElementById('data3').innerHTML="Only when new documents are uploaded";
  }
}

function checkMsg1(){
  if(document.getElementById('black-msg1').style.display=="none"){
    document.getElementById('black-msg1').style.display="block";
  }
  else{
    document.getElementById('black-msg1').style.display="none";
  }
}

function checkInv1(){
  if(document.getElementById('black-inv1').style.display=="none"){
    document.getElementById('black-inv1').style.display="block";
  }
  else{
    document.getElementById('black-inv1').style.display="none";
  }
}

function checkAnn1(){
  if(document.getElementById('black-ann1').style.display=="none"){
    document.getElementById('black-ann1').style.display="block";
  }
  else{
    document.getElementById('black-ann1').style.display="none";
  }
}

function checkDoc1(){
  if(document.getElementById('black-doc1').style.display=="none"){
    document.getElementById('black-doc1').style.display="block";
  }
  else{
    document.getElementById('black-doc1').style.display="none";
  }
}

function checkMsg2(){
  if(document.getElementById('black-msg2').style.display=="none"){
    document.getElementById('black-msg2').style.display="block";
  }
  else{
    document.getElementById('black-msg2').style.display="none";
  }
}

function checkInv2(){
  if(document.getElementById('black-inv2').style.display=="block"){
    document.getElementById('black-inv2').style.display="none";
  }
  else{
    document.getElementById('black-inv2').style.display="block";
  }
}

function checkAnn2(){
  if(document.getElementById('black-ann2').style.display=="block"){
    document.getElementById('black-ann2').style.display="none";
  }
  else{
    document.getElementById('black-ann2').style.display="block";
  }
}

function checkDoc2(){
  if(document.getElementById('black-doc2').style.display=="block"){
    document.getElementById('black-doc2').style.display="none";
  }
  else{
    document.getElementById('black-doc2').style.display="block";
  }
}

function checkMsg3(){
  if(document.getElementById('black-msg3').style.display=="block"){
    document.getElementById('black-msg3').style.display="none";
  }
  else{
    document.getElementById('black-msg3').style.display="block";
  }
}

function checkInv3(){
  if(document.getElementById('black-inv3').style.display=="block"){
    document.getElementById('black-inv3').style.display="none";
  }
  else{
    document.getElementById('black-inv3').style.display="block";
  }
}

function checkAnn3(){
  if(document.getElementById('black-ann3').style.display=="block"){
    document.getElementById('black-ann3').style.display="none";
  }
  else{
    document.getElementById('black-ann3').style.display="block";
  }
}

function checkDoc3(){
  if(document.getElementById('black-doc3').style.display=="block"){
    document.getElementById('black-doc3').style.display="none";
  }
  else{
    document.getElementById('black-doc3').style.display="block";
  }
}
