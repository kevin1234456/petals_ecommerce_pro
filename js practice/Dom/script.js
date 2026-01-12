// --- Elements ---
const btn = document.getElementById('btn');
const tweetBox = document.getElementById('tweetbox');
const result = document.getElementById('result');
const toggleBtn = document.getElementById('modeToggle');
const html = document.documentElement; // For Tailwind dark mode
const passField = document.getElementById('pass');
const passToggle = document.getElementById('togglePassword');

// --- Welcome Alert ---
btn.addEventListener('click', () => alert('Welcome, User! 👋'));

// --- Dark Mode Toggle ---
toggleBtn.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  
  // Use Ternary to update button text
  toggleBtn.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
});

// --- Show/Hide Password ---
passToggle.addEventListener('change', function() {
  passField.type = this.checked ? 'text' : 'password';
});

// --- Character Counter Logic ---
tweetBox.addEventListener('input', () => {
  const len = tweetBox.value.length;
  result.textContent = len;

  // Logic: Change color to red if it hits the limit
  // Using Ternary for class assignment
  result.className = (len >= 280) ? "text-red-500 font-bold" : "text-blue-500";
});