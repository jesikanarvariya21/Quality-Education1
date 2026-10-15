/* ===================================================
   EduBridge — Contact & Feedback Form Logic
   =================================================== */
"use strict";

let selectedRating = 0;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const msgArea = document.getElementById('feedbackMessage');
  const charCount = document.getElementById('charCount');

  if (msgArea && charCount) {
    msgArea.addEventListener('input', () => {
      const len = msgArea.value.length;
      charCount.textContent = len;
      charCount.style.color = len > 450 ? 'var(--danger)' : len > 350 ? 'var(--warning)' : 'var(--gray-400)';
      if (len > 500) msgArea.value = msgArea.value.slice(0, 500);
    });
  }

  if (form) {
    form.addEventListener('submit', handleSubmit);
    // Live validation
    document.getElementById('feedbackName')?.addEventListener('blur', () => validateField('feedbackName', 'errName', validateName));
    document.getElementById('feedbackEmail')?.addEventListener('blur', () => validateField('feedbackEmail', 'errEmail', validateEmail));
    document.getElementById('feedbackMessage')?.addEventListener('blur', () => validateField('feedbackMessage', 'errMessage', validateMessage));
  }
});

function validateName(val) {
  if (!val.trim()) return 'Name is required.';
  if (val.trim().length < 2) return 'Name must be at least 2 characters.';
  if (val.trim().length > 60) return 'Name must be under 60 characters.';
  return '';
}

function validateEmail(val) {
  if (!val.trim()) return 'Email is required.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) return 'Please enter a valid email address.';
  return '';
}

function validateMessage(val) {
  if (!val.trim()) return 'Message is required.';
  if (val.trim().length < 10) return 'Message must be at least 10 characters.';
  if (val.trim().length > 500) return 'Message must be under 500 characters.';
  return '';
}

function validateField(inputId, errorId, validator) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(errorId);
  if (!input || !errEl) return true;
  const error = validator(input.value);
  errEl.textContent = error;
  input.classList.toggle('error', !!error);
  return !error;
}

function setRating(n) {
  selectedRating = n;
  document.getElementById('feedbackRating').value = n;
  const stars = document.querySelectorAll('#ratingContainer span');
  stars.forEach((s, i) => {
    s.style.opacity = i < n ? '1' : '0.3';
    s.style.transform = i < n ? 'scale(1.15)' : 'scale(1)';
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const nameOk  = validateField('feedbackName',    'errName',    validateName);
  const emailOk = validateField('feedbackEmail',   'errEmail',   validateEmail);
  const msgOk   = validateField('feedbackMessage', 'errMessage', validateMessage);

  if (!nameOk || !emailOk || !msgOk) {
    // Scroll to first error
    document.querySelector('.form-control.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = '⏳ Submitting...';

  // Simulate network delay (demo)
  setTimeout(() => {
    const name    = document.getElementById('feedbackName').value;
    const email   = document.getElementById('feedbackEmail').value;
    const type    = document.getElementById('feedbackType').value;
    const message = document.getElementById('feedbackMessage').value;

    // Save demo submission locally
    Store.update('progress', p => {
      p.feedbackHistory = p.feedbackHistory || [];
      p.feedbackHistory.push({ name, email, type, message, rating: selectedRating, date: new Date().toLocaleDateString() });
      return p;
    }, {});

    // Show success
    document.getElementById('feedbackForm').reset();
    document.getElementById('charCount').textContent = '0';
    selectedRating = 0;
    document.querySelectorAll('#ratingContainer span').forEach(s => { s.style.opacity = '1'; s.style.transform = 'scale(1)'; });
    submitBtn.disabled = false;
    submitBtn.textContent = '📤 Submit Feedback (Demo)';

    const msg = document.getElementById('successMessage');
    if (msg) { msg.classList.remove('hidden'); msg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    setTimeout(() => msg?.classList.add('hidden'), 6000);
  }, 1000);
}
