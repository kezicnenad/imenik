import React from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import './App.css';

export default class App extends React.Component {

  state = {
    kontakti: [
      { 
        id: 1,
        ime: 'Nenad',
        prezime: 'Kežić',
        adresa: 'Vladimira Nazora 43, 20340 Ploče',
        mail: 'gluvaja7384@gmail.com',
        mobitel: '0977887892',
      },
      {
        id: 2,
        ime: 'Mate',
        prezime: 'Jerković',
        adresa: 'Vladimira Nazora 43, 20340 Ploče',
        mail: 'mate.jerkovic@gmail.com',
        mobitel: '0917887155',
      },
      {
        id: 3,
        ime: 'Ana',
        prezime: 'Matić',
        adresa: 'Vladimira Nazora 43, 20340 Ploče',
        mail: 'ana.matic@gmail.com',
        mobitel: '0958887845',
      },
      {
        id: 4,
        ime: 'Matija',
        prezime: 'Crnčević',
        adresa: 'Vladimira Nazora 43, 20340 Ploče',
        mail: 'matija@gmail.com',
        mobitel: '0987887892',
      },
      {
        id: 5,
        ime: 'Maro',
        prezime: 'Perak',
        adresa: 'Vladimira Nazora 43, 20340 Ploče',
        mail: 'maro.perak@gmail.com',
        mobitel: '0997563366',
      },
    ]
  }

  handleUkloniKontakt = (index) => {
    const {kontakti} = this.state;

    this.setState({
      kontakti: kontakti.filter((kontakt, i) => {
        return i !== index;
      })
    });
  }

  handlePrihvatiKontakt = (kontakt) => {
    this.setState({kontakti: [...this.state.kontakti, kontakt]})
  }

  render() {
    const {kontakti} = this.state;

    return (
      <div className="row">
        <h1 className="naslov">Kontakti</h1>
        <Contacts contacts={kontakti} removeContact={this.handleUkloniKontakt} />
        <h1 className="naslov">Dodaj novi kontakt</h1>
        <AddContact handlePrihvatiKontakt={this.handlePrihvatiKontakt} />
      </div>
    )
  }
}