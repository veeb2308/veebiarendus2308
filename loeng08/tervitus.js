let tervitusElement
let nimi

tervitusElement = document.getElementById('tervitus')
nimi = prompt('Sisesta enda nimi')


tervitusElement.innerHTML = '<h2>' + 'Tere ' + nimi + '</h2>'
tervitusElement.innerHTML += '<div>Muide, sinu nimes on ' + nimi.length + ' tähte</div>'

if (nimi.lenght > 6) {
    tervitusElement.innerHTML += 'Muide, sul ilus pikk nimi!'
}

for (let index = 0; index < nimi.length; index++ ) {
    tervitusElement.innerHTML += '<div class="taht">' + index + ' - ' + nimi[index] + '</div>'
}

