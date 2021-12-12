import React from 'react';

export default class AddContact extends React.Component{
    pocetniState = {
        ime: '',
        prezime: '',
        adresa: '',
        mail: '',
        mobitel: '',
    }
    state = this.pocetniState;

    handleKontaktIme = (event) => {
        const {ime, value} = event.target;
        this.setState({
            ime: value,
        })
    }

    handleKontaktPrezime = (event) => {
        const {prezime, value} = event.target;
        this.setState({
            prezime: value,
        })
    }

    handleKontaktAdresa = (event) => {
        const {adresa, value} = event.target;
        this.setState({
            adresa: value,
        })
    }

    handleKontaktMail = (event) => {
        const {mail, value} = event.target;
        this.setState({
            mail: value,
        })
    }

    handleKontaktMobitel = (event) => {
        const {mobitel, value} = event.target;
        this.setState({
            mobitel: value,
        })
    }

    prihvatiKontakt = () => {
        this.props.handlePrihvatiKontakt(this.state)
        this.setState(this.pocetniState)
    }

    render(){
        const {ime, prezime, adresa, mail, mobitel} = this.state;

        return(
            <div>
                <form className='row'>
                    <tr>
                        <label className='col-md-6' htmlFor="Ime">Ime</label>
                        <input
                            className='col-md-6'
                            type="text"
                            name="ime"
                            id="ime"
                            value={ime}
                            onChange={this.handleKontaktIme} 
                        />
                    </tr>
                    <tr>
                        <label className='col-md-6' htmlFor="Ime">Prezime</label>
                        <input
                            className='col-md-6'
                            type="text"
                            name="prezime"
                            id="prezime"
                            value={prezime}
                            onChange={this.handleKontaktPrezime} 
                        />
                    </tr>
                    <tr>
                        <label className='col-md-6' htmlFor="Ime">Adresa</label>
                        <input 
                            className='col-md-6'
                            type="text"
                            name="adresa"
                            id="adresa"
                            value={adresa}
                            onChange={this.handleKontaktAdresa} 
                        />
                    </tr>
                    <tr>
                        <label className='col-md-6' htmlFor="Ime">Mail</label>
                        <input
                            className='col-md-6'
                            type="text"
                            name="mail"
                            id="mail"
                            value={mail}
                            onChange={this.handleKontaktMail} 
                        />
                    </tr>
                    <tr>
                        <label className='col-md-6' htmlFor="Ime">Mobitel</label>
                        <input
                            className='col-md-6'
                            type="text"
                            name="mobitel"
                            id="mobitel"
                            value={mobitel}
                            onChange={this.handleKontaktMobitel} 
                        />
                    </tr>
                    <input className='btn' type="button" value="Dodaj" onClick={this.prihvatiKontakt} />
                </form>
            </div>
        );
    }

}