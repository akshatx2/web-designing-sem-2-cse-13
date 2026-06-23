// 1. Scroll to featured
function scrollToFeatured() {
  document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// 2. Scroll to any section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 3. Search filter
function filterAnime() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.anime-card');
  let found = 0;
  cards.forEach(card => {
    const name = card.getAttribute('data-name');
    if (name.includes(query)) {
      card.style.display = 'block';
      found++;
    } else {
      card.style.display = 'none';
    }
  });
  document.getElementById('noResult').style.display = found === 0 ? 'block' : 'none';
}

// 4. Watch toast
function watchAnime(name) {
  showToast('▶ Now playing: ' + name);
}

// 5. Watchlist
const watchlist = [];

function addToWatchlist(name) {
  if (watchlist.includes(name)) {
    showToast('⚠️ Already in watchlist!');
    return;
  }
  watchlist.push(name);
  renderWatchlist();
  showToast('✅ Added: ' + name);
}

function removeFromWatchlist(name) {
  const idx = watchlist.indexOf(name);
  if (idx > -1) watchlist.splice(idx, 1);
  renderWatchlist();
  showToast('🗑️ Removed: ' + name);
}

function renderWatchlist() {
  const ul = document.getElementById('watchlistItems');
  if (watchlist.length === 0) {
    ul.innerHTML = '<li class="empty-msg">No anime added yet.</li>';
    return;
  }
  ul.innerHTML = watchlist.map(name => `
    <li>
      <span>🎌 ${name}</span>
      <button class="remove-btn" onclick="removeFromWatchlist('${name}')">✕</button>
    </li>
  `).join('');
}

// 6. Login validation
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const msg = document.getElementById('loginMsg');

  if (username === '' || password === '') {
    msg.style.color = '#ff6b6b';
    msg.textContent = 'Please fill in all fields.';
    return;
  }
  if (password.length < 6) {
    msg.style.color = '#ff6b6b';
    msg.textContent = 'Password must be at least 6 characters.';
    return;
  }
  msg.style.color = '#c77dff';
  msg.textContent = `Welcome, ${username}! Login successful. 🎌`;
}

// 7. Toast helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// 8. Back to top
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}