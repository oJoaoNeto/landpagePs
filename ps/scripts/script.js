(function() {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.className = savedTheme;
})();
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const currentTheme = document.documentElement.className;
    body.classList.add(currentTheme);
    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
        document.documentElement.className = newTheme;
        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
});
