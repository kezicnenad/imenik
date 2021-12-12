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
        const {value} = event.target;
        this.setState({
            ime: value,
        })
    }

    handleKontaktPrezime = (event) => {
        const {value} = event.target;
        this.setState({
            prezime: value,
        })
    }

    handleKontaktAdresa = (event) => {
        const {value} = event.target;
        this.setState({
            adresa: value,
        })
    }

    handleKontaktMail = (event) => {
        const {value} = event.target;
        this.setState({
            mail: value,
        })
    }

    handleKontaktMobitel = (event) => {
        const {value} = event.target;
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
                    <table>
                        <tbody>
                            <tr>
                                <label className='col-md-6' htmlFor="ime">Ime</label>
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
                                <label className='col-md-6' htmlFor="prezime">Prezime</label>
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
                                <label className='col-md-6' htmlFor="adresa">Adresa</label>
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
                                <label className='col-md-6' htmlFor="mail">Mail</label>
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
                                <label className='col-md-6' htmlFor="telefon">Mobitel</label>
                                <input
                                    className='col-md-6'
                                    type="text"
                                    name="mobitel"
                                    id="mobitel"
                                    value={mobitel}
                                    onChange={this.handleKontaktMobitel} 
                                />
                            </tr>
                        </tbody>
                    </table> 
                    {ime && prezime && adresa && mail && mobitel ? 
                    <input className='button' type="button" value="Dodaj" onClick={this.prihvatiKontakt} /> :
                    <input className='button' type="button" value="Dodaj" onClick={this.prihvatiKontakt} disabled />}
                </form>
            </div>
        );
    }

}