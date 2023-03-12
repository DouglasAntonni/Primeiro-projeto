function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade} anos`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
        if (fsex[0].checked){
        genero = 'homem'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src','criancah.png')
        } else if (idade < 21){
            img.setAttribute('src','adolescente.png')
        }else if (idade < 50){
            img.setAttribute('src', 'homem.png')
        }else {
            img.setAttribute('src', 'idoso.png')
        }
    }    else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade>=0 && idade <10){
            img.setAttribute('src', 'criancam.png')
        } else if (idade<21){
            img.setAttribute('src', 'jovemm.png')
        }else if (idade <50){
            img.setAttribute('src', 'mulher.png')
        }else {   
            img.setAttribute('src', 'velha.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)   
    } 
}