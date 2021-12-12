import React from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import './App.css';
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';

export default class App extends React.Component {

  state = {
    kontakti: [
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