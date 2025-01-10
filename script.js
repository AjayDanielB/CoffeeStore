// Function to show the selected section and hide the others
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'none');
    
    // Show the selected section
    document.getElementById(section).style.display = 'block';
}
