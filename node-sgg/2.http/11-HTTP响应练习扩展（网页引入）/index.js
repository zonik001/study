let cells = document.querySelectorAll('td')
cells.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.style.background);
        if (item.style.background == 'rgb(34, 34, 34)') {  //自动转成rgb了
            item.style.background = ''
            return
        }
        item.style.background = '#222'
    })
})