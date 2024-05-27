(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => getStoredTheme() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const setTheme = theme => {
        document.documentElement.setAttribute('data-bs-theme', theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme);
    };

    const updateUI = theme => {
        const checkbox = document.getElementById('themeSwitch');
        const icon = document.getElementById('themeIcon');
        checkbox.checked = theme === 'dark';
        icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    };

    const applyTheme = theme => {
        setTheme(theme);
        updateUI(theme);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!['light', 'dark'].includes(getStoredTheme())) {
            setTheme(getPreferredTheme());
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        applyTheme(getPreferredTheme());

        document.getElementById('themeSwitch').addEventListener('change', () => {
            const theme = document.getElementById('themeSwitch').checked ? 'dark' : 'light';
            setStoredTheme(theme);
            applyTheme(theme);
        });
    });
})();
