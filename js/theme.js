/*!
 * Dark / light theme
 */
(function () {
    const STORAGE_KEY = 'site-theme';

    function getStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'dark' || stored === 'light' ? stored : null;
    }

    function getPreferredTheme() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function updateToggleUi(theme) {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        const isDark = theme === 'dark';
        const icon = toggle.querySelector('.theme-toggle-icon');
        const label = toggle.querySelector('[data-theme-label]');

        if (icon) {
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        }

        if (label) {
            label.setAttribute('data-i18n', isDark ? 'theme.light' : 'theme.dark');
            if (window.SiteI18n && typeof window.SiteI18n.refresh === 'function') {
                window.SiteI18n.refresh();
            }
        }
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateToggleUi(theme);
    }

    function initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    window.SiteTheme = {
        init() {
            const theme = getStoredTheme() || getPreferredTheme();
            setTheme(theme);
            initThemeToggle();
        },
    };
})();
