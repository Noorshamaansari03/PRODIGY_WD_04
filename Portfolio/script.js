document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a message or send the data to your server
    alert('Thank you for your message, ' + name + '!');

    // Reset the form
    this.reset();
});
