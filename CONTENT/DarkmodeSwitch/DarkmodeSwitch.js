const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--text', '#000000');
    } else {
        root.style.setProperty('--bg', '#1F1F1F');
        root.style.setProperty('--text', '#ffffff');
    }
});

// Set initial values from :root
root.style.setProperty('--bg', '#1F1F1F');
root.style.setProperty('--text', '#ffffff');