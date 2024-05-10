function submitForm() {
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;

        // Constructing the mailto URL with form data
        var mailtoLink = "mailto:xiaoyiliu96xyl@gmail.com" +
            "?subject=" + encodeURIComponent("Contact Form Submission") +
            "&body=" + encodeURIComponent("First Name: " + firstName + "\n" +
                "Last Name: " + lastName + "\n" +
                "Email: " + email + "\n" +
                "Message: " + subject);

        // Opening the mail client with the mailto link
        window.location.href = mailtoLink;