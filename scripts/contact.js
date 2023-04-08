// Get the form element

emailjs.init("S7BGds-cbsmFn6-AJ");
const form = document.getElementById('contact-form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  // Check if the form data is valid
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Prepare the email data
  const emailData = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send('service_qkdvyq3', 'template_htqftei', emailData)
    .then(function(response) {
      alert('Your message has been sent successfully!');
      form.reset(); // Reset the form
    }, function(error) {
      console.log('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    });
});
