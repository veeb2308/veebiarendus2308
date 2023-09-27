const matkadElement = document.getElementById('matkad')
matkadElement.innerHTML = ''

const matk1 = {
    nimetus: 'Süstamatk Soomaal',
    pildiUrl: './assets/syst1.jpg',
    kirjeldus: 'Varakevadine matk Soomaal. Näeme loomi, linde ja ka kalu'
}

const matk2 = {
    nimetus: 'Rattamatk Pärnumaal',
    pildiUrl: './assets/rattamatk.jpg',
    kirjeldus: 'Avastame Pärnut'
}

const matk3 = {
    nimetus: 'Jalgsimatk Tartumaal',
    pildiUrl: './assets/matk_tartus1.jpg',
    kirjeldus: 'Kõndides Tartule ring peale!'
}

const matkad = [matk1, matk2, matk3]

function valjastaMatk(matk) {
    console.log(`
    <h3>
        Matk ${matk.nimetus}
    </h3>
    `)

    let matkmall = `
        <div class="col-md-4 card">
            <img src="${matk.pildiUrl}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${matk.nimetus}</h5>
                <p>
                    ${matk.kirjeldus}
                </p>
                <a href="#" class="btn btn-primary" >Registreeru</a>
            </div>
        </div>
    `
    matkadElement.innerHTML += matkmall
}

//valjastaMatk(matk1)
//valjastaMatk(matk2)

matkad.forEach(valjastaMatk)
// Ülemine rida teeb sama mis see:
// for (let i = 0; i < matkad.length; i++) {
//     valjastaMatk(matkad[i])
// }

