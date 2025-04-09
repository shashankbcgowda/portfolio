function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.service-section');
    sections.forEach(sec => sec.classList.remove('active'));
  
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.service-tabs button');
    buttons.forEach(btn => btn.classList.remove('active'));
  
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
  
    // Add active class to selected button
    const button = Array.from(buttons).find(btn => btn.textContent.replace(/\s/g, '').toLowerCase() === sectionId.toLowerCase());
    if (button) button.classList.add('active');
  }
  