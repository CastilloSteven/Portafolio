const root = document.documentElement.style
const btnModoClaro = document.getElementById('modoClaro')
const btnModoOscuro = document.getElementById('modoOscuro')

btnModoClaro.addEventListener('click',()=>{
    root.setProperty('--colorFondo','rgb(141, 141, 141)')
    root.setProperty('--colorLetra','rgb(0, 0, 0)')
})

btnModoOscuro.addEventListener('click',()=>{
    root.setProperty('--colorFondo','rgb(46, 46, 46)')
    root.setProperty('--colorLetra','rgb(206, 206, 206)')
})

const proyectoContenido = document.querySelector('.proyecto__contenido')

function mostrarProyectos(){
    misProyectos.forEach((cadaProyecto)=>{

    let proyecto = document.createElement('div')
    proyecto.classList.add('proyecto')
    proyectoContenido.appendChild(proyecto)

    let proImgCont = document.createElement('div')
    proImgCont.classList.add('proyecto__imgContenedor')
    proyecto.appendChild(proImgCont)

    let proImg = document.createElement('img')
    proImg.setAttribute('src', cadaProyecto.imagen)
    proImg.setAttribute('alt', cadaProyecto.nombre)
    proImg.classList.add('proyecto__img')
    proImgCont.appendChild(proImg)

    let proTxt = document.createElement('div')
    proTxt.classList.add('proyecto__txt')
    proyecto.appendChild(proTxt)

    let proH2 = document.createElement('h2')
    proH2.classList.add('proyecto__h2')
    proH2.innerText = cadaProyecto.nombre
    proTxt.appendChild(proH2)

    let proLengCont = document.createElement('div')
    proLengCont = document.createElement('proyecto__lenguajes')

    for (let i = 0; i < cadaProyecto.lenguajes.length; i++) {
        let proLengImg = document.createElement('img')
        proLengImg.classList.add('proyecto__lenguajes--img')
        switch (cadaProyecto.lenguajes[i]) {
            case 'HTML':
                proLengImg.setAttribute('src','assets/svg/html5.svg')
                proLengImg.setAttribute('alt','html5.svg')
                break;
            case 'CSS':
                proLengImg.setAttribute('src','assets/svg/css3.svg')
                proLengImg.setAttribute('alt','css3.svg')
                break;
            case 'JavaScript':
                proLengImg.setAttribute('src','assets/svg/js.svg')
                proLengImg.setAttribute('alt','js.svg')
                break;
        
            default:
                break;
        }
        proLengCont.appendChild(proLengImg)
        
    }
    proTxt.appendChild(proLengCont)

    let proBtn = document.createElement('button')
    proBtn.classList.add('proyecto__btn')
    proTxt.appendChild(proBtn)

    let proLinkGithub = document.createElement('a')
    proLinkGithub.setAttribute('href', cadaProyecto.urlGithub)
    proLinkGithub.setAttribute('title', 'ir a github del proyecto')
    proBtn.appendChild(proLinkGithub)
    proLinkGithub.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="footer__svg svg__github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>'


    })
}
mostrarProyectos()




