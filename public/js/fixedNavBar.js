function fixedNavBar() {
    const scrollContent = document.querySelector('.scroll-content');
    scrollContent.addEventListener('scroll', e => {
        console.log(e.target);
        e.target.style.position = 'fixed';
        e.target.style.top = '75px';
        console.log('tariq');
    });
}

fixedNavBar();
