function showSection(section) {
    const clientSection = document.getElementById('client-section');
    const businessSection = document.getElementById('business-section');
    
    if (section === 'client') {
        clientSection.classList.add('active');
        businessSection.classList.remove('active');
    } else if (section === 'business') {
        businessSection.classList.add('active');
        clientSection.classList.remove('active');
    }
}
