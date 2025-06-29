
document.addEventListener('DOMContentLoaded', function () {

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submit

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  fetch('https://webhook.site/7695c18e-d0a1-4f56-b4a7-3b0751b655e1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('formMessage').textContent = "Message sent successfully!";
      document.getElementById('formMessage').style.display = 'block';
      document.getElementById('contactForm').reset();
      showMessage("✅ Message sent successfully!");

    } else {
      document.getElementById('formMessage').textContent = "Failed to send message.";
      document.getElementById('formMessage').style.display = 'block';
      showMessage("❌ Failed to send message.");

    }
  })
  .catch(error => {
    document.getElementById('formMessage').textContent = "Error sending message.";
    document.getElementById('formMessage').style.display = 'block';
    showMessage("⚠️ Error sending message.");

  });
});

function showMessage(messageText) {
  const msgDiv = document.getElementById('formMessage');
  msgDiv.textContent = messageText;
  msgDiv.style.display = 'block';

  // Hide it after 3 seconds
  setTimeout(() => {
    msgDiv.style.display = 'none';
  }, 3000);
}

});