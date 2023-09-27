function valjasta(tekst) {
    const valjastaElement = document.getElementById('ylesanded')
    valjastaElement.innerHTML += tekst
}

function valjastaYlesanne(ylesanneObjekt) {
    let valjund = ''
    valjund += '<div class="ylesanne row">' 
    valjund +=      '<div class="col-8">'  + ylesanneObjekt.kirjeldus + '</div>'
    valjund +=      '<div class="col-4">'  + ylesanneObjekt.prioriteet + '</div>'
    valjund += '</div>' 
    valjasta(valjund);
}

function lisaUusYlesanne() {
    const sisestusElement = document.getElementById('uus-ylesanne');
    const sisestusPrioriteetElement = document.getElementById('uus-prioriteet');
    const uusYlesanne = {
        kirjeldus: sisestusElement.value,
        prioriteet: sisestusPrioriteetElement.value,
        tehtud: false
    }
    valjastaYlesanne(uusYlesanne)
    sisestusElement.value = ''
    sisestusPrioriteetElement.value = ''
}

const ylesanne1 = {
    kirjeldus: 'jalutada koera',
    prioriteet: 3,
    tehtud: true
}

const ylesanne2 = {
    kirjeldus: 'praadida muna',
    prioriteet: 2,
    tehtud: false
}

const ylesanne3 = {
    kirjeldus: 'minna tööle',
    prioriteet: 2,
    tehtud: false
}

const ylesanded = [
    ylesanne1,
    ylesanne2,
    ylesanne3
]


for (let indeks=0; indeks< ylesanded.length; indeks++) {
    valjastaYlesanne(ylesanded[indeks])
}


