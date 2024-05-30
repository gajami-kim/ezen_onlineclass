const btn = document.getElementById('btn');
const more = document.querySelector('.ems2')
//.adiv_group.ems2 
console.log(btn);
console.log(more);

btn.addEventListener('click',()=>{
    btn.style.display = 'none';
    more.style.display ='flex';
})