const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change theme
    document.body.classList.toggle('light');
});