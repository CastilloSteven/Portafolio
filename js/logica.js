const root = document.documentElement.style
const btnModoClaro = document.getElementById('modoClaro')
const btnModoOscuro = document.getElementById('modoOscuro')

btnModoClaro.addEventListener('click',()=>{
    btnModoClaro.classList.add('activo')
    btnModoOscuro.classList.remove('activo')
    root.setProperty('--colorFondo','rgb(206, 206, 206)')
    root.setProperty('--colorLetra','rgb(0, 0, 0)')
})

btnModoOscuro.addEventListener('click',()=>{
    btnModoOscuro.classList.add('activo')
    btnModoClaro.classList.remove('activo')
    root.setProperty('--colorFondo','rgb(46, 46, 46)')
    root.setProperty('--colorLetra','rgb(255, 255, 255)')
})




