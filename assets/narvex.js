document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href="#comprar"]').forEach(link=>link.addEventListener('click',e=>{
    const target=document.getElementById('comprar');
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'center'});
  }));
  document.querySelectorAll('[data-variant-select]').forEach(select=>{
    const priceEl=document.querySelector('[data-variant-price]');
    const compareEl=document.querySelector('[data-variant-compare]');
    const saveEl=document.querySelector('[data-variant-save]');
    const update=()=>{
      const option=select.options[select.selectedIndex];
      if(priceEl&&option&&option.dataset.price)priceEl.textContent=option.dataset.price;
      if(compareEl){if(option&&option.dataset.compare){compareEl.textContent=option.dataset.compare;compareEl.hidden=false;}else{compareEl.hidden=true;}}
      if(saveEl){if(option&&option.dataset.save){saveEl.textContent='Ahorras '+option.dataset.save+'%';saveEl.hidden=false;}else{saveEl.hidden=true;}}
    };
    select.addEventListener('change',update);
    update();
  });
  document.querySelectorAll('[data-nv-gallery]').forEach(root=>{
    const track=root.querySelector('[data-nv-track]'),slides=root.querySelectorAll('[data-nv-slide]');
    const thumbs=[...root.querySelectorAll('[data-nv-thumb]')],thumbsBox=root.querySelector('[data-nv-thumbs]');
    const count=root.querySelector('[data-nv-count]'),prev=root.querySelector('[data-nv-prev]'),next=root.querySelector('[data-nv-next]');
    const total=slides.length;let current=0,ticking=false;
    if(!track||total<2)return;
    const update=i=>{
      current=i;
      thumbs.forEach((thumb,k)=>{if(k===i)thumb.setAttribute('aria-current','true');else thumb.removeAttribute('aria-current');});
      if(count)count.textContent=(i+1)+' / '+total;
      if(prev)prev.disabled=i===0;if(next)next.disabled=i===total-1;
      const thumb=thumbs[i];
      if(thumb&&thumbsBox&&thumbsBox.scrollWidth>thumbsBox.clientWidth)thumbsBox.scrollTo({left:thumb.offsetLeft-(thumbsBox.clientWidth-thumb.offsetWidth)/2,behavior:'smooth'});
    };
    const goTo=i=>{i=Math.max(0,Math.min(total-1,i));track.scrollTo({left:i*track.clientWidth,behavior:'smooth'});update(i);};
    track.addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;const i=Math.round(track.scrollLeft/track.clientWidth);if(i!==current&&i>=0&&i<total)update(i);});},{passive:true});
    track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();goTo(current-1);}if(e.key==='ArrowRight'){e.preventDefault();goTo(current+1);}});
    if(prev)prev.addEventListener('click',()=>goTo(current-1));if(next)next.addEventListener('click',()=>goTo(current+1));
    thumbs.forEach((thumb,k)=>thumb.addEventListener('click',()=>goTo(k)));
    window.addEventListener('resize',()=>track.scrollTo({left:current*track.clientWidth,behavior:'auto'}));
    update(0);
  });
});
