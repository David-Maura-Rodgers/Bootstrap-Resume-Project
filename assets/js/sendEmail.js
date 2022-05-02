function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


// function sendMail(contactForm) {
//     emailjs.send("service_vjldm59", "rosie", {
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.emailaddress.value,
//         "project_request": contactForm.projectsummary.value,
//     })
//     .then(
//         function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//     }, 
//     function(error) {
//         console.log('FAILED...', error);
//     });
//     return false;  // To block from loading a new page
// }