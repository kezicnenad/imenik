import React from 'react';
import Contacts from './components/contacts/Contacts';
import './App.css';

export default class App extends React.Component {

  state = {
    kontakti: [
      { 
        id: 1,
        ime: 'Nenad',
        prezime: 'Kežić',
        adresa: {
          grad: 'Ploče',
          posta: 20340,
          ulica: 'Vladimira Nazora',
          broj: 43
        },
        mail: 'gluvaja7384@gmail.com',
        telefon: '0977887892',
      },
      {
        id: 2,
        ime: 'Mate',
        prezime: 'Jerković',
        adresa: {
          grad: 'Split',
          posta: 21000,
          ulica: 'Vukovarska',
          broj: 19
        },
        mail: 'mate.jerkovic@gmail.com',
        telefon: '0917887155',
      },
      {
        id: 3,
        ime: 'Ana',
        prezime: 'Matić',
        adresa: {
          grad: 'Zagreb',
          posta: 10000,
          ulica: 'Domobranska',
          broj: 19
        },
        mail: 'ana.matic@gmail.com',
        telefon: '0958887845',
      },
      {
        id: 4,
        ime: 'Matija',
        prezime: 'Crnčević',
        adresa: {
          grad: 'Rijeka',
          posta: '51000',
          ulica: 'Franje Tuđmana',
          broj: '17'
        },
        mail: 'matija@gmail.com',
        telefon: '0987887892',
      },
      {
        id: 5,
        ime: 'Maro',
        prezime: 'Perak',
        adresa: {
          grad: 'Dubrovnik',
          posta: 20000,
          ulica: 'Uvala Lapad',
          broj: 44
        },
        mail: 'maro.perak@gmail.com',
        telefon: '0997563366',
      },
    ]
  }

  ukloniKontakt = (index) => {
    const {kontakti} = this.state;

    this.setState({
      kontakti: kontakti.filter((kontakt, i) => {
        return i !== index;
      })
    });
  }

  render() {

    const {kontakti} = this.state;

    return (
      <div className="row">
        <h1 className="naslov">Kontakti</h1>
        <Contacts contacts={kontakti} removeContact={this.ukloniKontakt} />
      </div>
    )
  }
}