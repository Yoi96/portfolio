function validateForm() {
            var fname = document.forms["contactForm"]["firstname"].value;
            var lname = document.forms["contactForm"]["lastname"].value;
            var email = document.forms["contactForm"]["email"].value;
            var subject = document.forms["contactForm"]["subject"].value;
            
            if (fname == "" || lname == "" || email == "" || subject == "") {
                alert("Please fill in all fields");
                return false;
            }
        }