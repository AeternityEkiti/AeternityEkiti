function submitContactForm() {
  var text_name = document.getElementById("txtfullname");
  var text_email = document.getElementById("txtemail");
  var text_phone = document.getElementById("txtemail");
  var text_message = document.getElementById("txtmessage");

  var firestore = firebase.firestore();

  var store_name = text_name.value;
  var store_email = text_email.value;
  var store_phone = text_phone.value;
  var store_message = text_message.value;

  firestore.collection("contactMessage").doc(text_email.value).set({
    name: store_name,
    email: store_email,
    phone: store_phone,
    message: store_message
  }).then(function() {
    var contactHeading = '<h4 class="modal-title text-success">Successful</h4>';
    var contactName = "Dear " + store_name + ",";
    var contactText = "Thanks for reaching out, your message have been successfully sent";

    document.getElementById("contactHeading").innerHTML = contactHeading;
    document.getElementById("contactName").innerHTML = contactName;
    document.getElementById("contactText").innerHTML = contactText;

    $("#contactModal").modal()
  }).catch(function(error) {
    var contactHeading = '<h4 class="modal-title text-danger">Failed</h4>';
    var contactName = "Dear " + store_name+ ",";
    var errorname = error;
    var contactText = "Sorry your message could not be sent because of error: " + errorname;

    document.getElementById("contactHeading").innerHTML = contactHeading;
    document.getElementById("contactName").innerHTML = contactName;
    document.getElementById("contactText").innerHTML = contactText;

    $("#contactModal").modal()
  });


  document.getElementById("firebaseContactForm").submit();
}