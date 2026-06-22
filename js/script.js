window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // 5secs load
    setTimeout(() => {

        preloader.classList.add('fade-out');
        
        setTimeout(() => {
            preloader.remove();
        }, 500); 
        
    }, 3000); 
});