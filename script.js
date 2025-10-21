// ================================
// Contact Form Validation
// ================================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return; // Only run on contact page

  const nameField = document.querySelector('#name');
  const emailField = document.querySelector('#email');
  const subjectField = document.querySelector('#subject');
  const messageField = document.querySelector('#message');
  const successMsg = document.querySelector('[data-testid="test-contact-success"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    successMsg.textContent = '';

    // Reset error messages
    document.querySelectorAll('[data-testid^="test-contact-error"]').forEach(el => el.textContent = '');

    // Name validation
    if (!nameField.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-name"]').textContent = 'Full name is required.';
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
      document.querySelector('[data-testid="test-contact-error-email"]').textContent = 'Enter a valid email.';
      valid = false;
    }

    // Subject validation
    if (!subjectField.value.trim()) {
      document.querySelector('[data-testid="test-contact-error-subject"]').textContent = 'Subject is required.';
      valid = false;
    }

    // Message validation
    if (messageField.value.trim().length < 10) {
      document.querySelector('[data-testid="test-contact-error-message"]').textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    // If valid
    if (valid) {
      successMsg.textContent = '✅ Message sent successfully!';
      form.reset();
    }
  });
});

// ================================
// Profile Page — Show Current Time
// ================================
document.addEventListener('DOMContentLoaded', () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    const updateTime = () => {
      timeElement.textContent = Date.now();
    };
    updateTime();
    setInterval(updateTime, 1000);
  }
});
