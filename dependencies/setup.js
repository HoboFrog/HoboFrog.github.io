const toggle = document.getElementById('darkModeToggle');
        const body = document.body;

        function setMode(dark) {
            body.classList.toggle('dark-mode', dark);
            toggle.textContent = dark ? '☀️' : '🌙';
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        }

        // On load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setMode(true);
        }

        toggle.addEventListener('click', () => {
            const isDark = !body.classList.contains('dark-mode');
            setMode(isDark);
        });
