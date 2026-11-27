const toggle = document.querySelector('.theme-toggle');
try {
    toggle.checked = sessionStorage.getItem('theme-inverted') === '1';
} catch {}

toggle.addEventListener('change', () => {
    try {
    sessionStorage.setItem('theme-inverted', toggle.checked ? '1': '0');
    } catch {}
});

