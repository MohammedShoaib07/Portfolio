// Live clock for Bengaluru, India (IST)
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  el.textContent = `Bengaluru, India ${time}`;
}
updateClock();
setInterval(updateClock, 30000);

// Dark mode toggle
(function () {
  const btn = document.getElementById('theme-toggle');
  const key = 'ms-portfolio-theme';
  const saved = localStorage.getItem(key);
  const shouldBeDark = saved === 'dark' || saved === null;

  if (shouldBeDark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  if (!btn) return;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(key, document.body.classList.contains('dark') ? 'dark' : 'light');
  });
})();
