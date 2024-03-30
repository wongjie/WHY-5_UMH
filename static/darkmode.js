document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set initial state based on stored value
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode and store state
    darkModeToggle.addEventListener('change', function() {
        var darkModeEnabled = darkModeToggle.checked;
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        // Store state in localStorage
        localStorage.setItem('darkMode', darkModeEnabled);
    });
});
