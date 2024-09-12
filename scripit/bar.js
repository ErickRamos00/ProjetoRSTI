document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.height = value + 'px';
    });
});
