
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved preference or system preference
    let darkMode = localStorage.getItem('darkMode') === 'true' || 
                  (localStorage.getItem('darkMode') === null && darkModeMediaQuery.matches);
    
    // Apply initial mode
    updateDarkMode();
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        localStorage.setItem('darkMode', darkMode);
        updateDarkMode();
    });
    
    // Watch for system preference changes
    darkModeMediaQuery.addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            darkMode = e.matches;
            updateDarkMode();
        }
    });
    
    function updateDarkMode() {
        document.body.classList.toggle('dark-mode', darkMode);
        darkModeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        darkModeToggle.setAttribute('aria-label', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
    }
});