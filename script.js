let mbusto = document.getElementById('medidabusto')
let mcintura = document.getElementById('medidacintura')
let mquadril = document.getElementById('medidaquadril')

let res = document.getElementById('resposta')

var img = document.createElement('img')
img.setAttribute('id', 'foto')


function calculartipo() {
    let busto = Number(mbusto.value)
    let cintura = Number(mcintura.value)
    let quadril = Number(mquadril.value)

     busto = Math.round(busto)
     console.log(busto)

     cintura = Math.round(cintura)
     console.log(cintura)

     quadril = Math.round(quadril)
     console.log(quadril) 

     /*let soma = busto + quadril + cintura
     res.innerHTML = `${soma}` */


     if (busto < cintura && cintura > quadril && quadril == busto){
        res.innerText = `Oval`
        img.setAttribute('src', './oval.png')

    } else if (busto == cintura && cintura == quadril && quadril == busto){
        res.innerText = `Retangular`
        img.setAttribute('src', './retangular.png')
        console.log(img)
    
    
    } else if ( busto == cintura && cintura == quadril && quadril == busto){
        res.innerText = `Triângulo Invertido `
        img.setAttribute('src', 'trianguloinvertido.png')

    } else if ( busto > cintura && cintura < quadril && quadril == busto ){
        res.innerText = `Ampulheta`
        img.setAttribute('src', 'ampulheta.png')

    } else if ( busto  > cintura && cintura < quadril && quadril > busto ){
        res.innerText = `Pêra`
        img.setAttribute('src', 'pera.png')
    }  

    
    res.appendChild(img)




    

  



   
}

