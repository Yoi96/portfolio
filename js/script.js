function submitForm() {
        var formData = {
            firstname: document.getElementById("fname").value,
            lastname: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Example: You can replace this URL with the URL of your server-side script to handle the form submission.
        var url = "mailto:xiaoyiliu96xyl@gmail.com";

        // AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form submitted successfully!");
                // You can perform any additional actions here after successful form submission
            }
        };

        // Convert formData object to JSON string
        var jsonData = JSON.stringify(formData);

        // Send the request with the form data
        xhr.send(jsonData);
    }