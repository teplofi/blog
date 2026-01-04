(function(){
  const input = document.getElementById('search');
  const items = document.querySelectorAll('[data-title]');
  if(!input || !items.length) return;
  input.addEventListener('input', function(){
    const q = (input.value || '').toLowerCase().trim();
    items.forEach(function(el){
      const hay = (el.getAttribute('data-title') + ' ' + (el.getAttribute('data-tags')||'') + ' ' + (el.getAttribute('data-cat')||'')).toLowerCase();
      el.style.display = hay.indexOf(q) !== -1 ? '' : 'none';
    });
  });
})();
