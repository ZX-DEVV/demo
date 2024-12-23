// Select the checkbox
const checkbox = document.getElementById('checkbox');

// Listen for changes on the checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }
});

// Optional: Set default mode based on user preference
window.addEventListener('load', () => {
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    checkbox.checked = true;
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.add('dark-mode');
  }
});
