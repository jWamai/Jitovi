const cursor = document.querySelector('.cursor');
const p = document.querySelector('#résumé')

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
    p.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
    
})

