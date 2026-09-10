// Mobile nav toggle
document.querySelectorAll('.navlinks a').forEach(function(a){
  a.addEventListener('click', function(){
    var nav = document.getElementById('nav');
    if (nav) nav.classList.remove('open');
  });
});

// Garden tabs
document.querySelectorAll('.tab').forEach(function(t){
  t.addEventListener('click', function(){
    document.querySelectorAll('.tab').forEach(function(x){ x.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.remove('active'); });
    t.classList.add('active');
    var panel = document.getElementById(t.dataset.tab);
    if (panel) panel.classList.add('active');
  });
});

// Scroll reveal
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
