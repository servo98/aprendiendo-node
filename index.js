// Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool',

// });
let deck_id = null;

const testButton = document.getElementById('test');
const tomarCartaButton = document.getElementById('test2');
const revolverBarajaButton = document.getElementById('test3');

testButton.onclick = () => {
  fetch('https://deckofcardsapi.com/api/deck/new/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      Swal.fire({
        title: 'Éxito',
        text: 'Nueva baraja creada',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      console.log(data);
      deck_id = data.deck_id;
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error',
        text: 'Error al crear baraja',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      console.log(error);
    });
};

tomarCartaButton.onclick = () => {
  fetch('https://deckofcardsapi.com/api/deck/' + deck_id + '/draw/?count=1')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      Swal.fire({
        title: 'Carta obtenida',
        text: data.cards[0].code,
      });
    });
};

revolverBarajaButton.onclick = () => {
  fetch(
    'https://deckofcardsapi.com/api/deck/' +
      deck_id +
      '/shuffle/?remaining=true'
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      Swal.fire({
        title: 'Baraja revuelta',
      });
    });
};
