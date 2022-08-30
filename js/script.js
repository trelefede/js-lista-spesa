console.log('js ok');

// creare array con lista spesa
const arrayList = ['Nitroglicerina', 'Segatura', 'Contenitore materiale esplosivo (candelotto)', 'Detonatore', 'Cavo collegato al detonatore'];

// inizializzare una variabile da collegare all'id lista nell'html
const htmlList = document.getElementById('shopping');

// inizializzare una variabile contatore prima del ciclo while
let index = 0;

// creare il ciclo while
while (index < arrayList.length) {

    // scrivo in console uno per uno il contenuto dell'indice dell'array
    console.log(arrayList[index])

    // aggiungo all'elemento ul nell'html i singoli li della lista
    htmlList.innerHTML += '<li>' + arrayList[index] + '</li>';

    // incremento l'index per poter uscire dal ciclo
    index++;
}

