// Add basic form functionality
document.getElementById('catForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    console.log({
        firstName,
        lastName,
        email,
        phone,
        message
    });
  
    alert("Form submitted successfully!");
    
    // Clear form
    document.getElementById('catForm').reset();
  });
  