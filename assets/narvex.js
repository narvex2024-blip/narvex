document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href="#comprar"]').forEach(link=>link.addEventListener('click',e=>{
    const target=document.getElementById('comprar');
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'center'});
  }));
  document.querySelectorAll('[data-variant-select]').forEach(select=>{
    const priceEl=document.querySelector('[data-variant-price]');
    const update=()=>{
      const option=select.options[select.selectedIndex];
      if(priceEl&&option&&option.dataset.price)priceEl.textContent=option.dataset.price;
    };
    select.addEventListener('change',update);
    update();
  });
});