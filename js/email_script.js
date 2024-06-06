document.getElementById('submit_button').addEventListener('click', function() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (fname === '' || lname === '' || email === '' || message === '') {
        alert("Please fill out all fields before submitting the form.");
        return; 
    }
    
    var subject = "Message from " + fname + " " + lname;
    var body = "Name: " + fname + " " + lname + "\nEmail: " + email + "\nMessage: " + message;
    var mailtoLink = 'mailto:xiaoyiliu96xyl@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
});
