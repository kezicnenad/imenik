import React from 'react';

export default class Contacts extends React.Component {

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

    render() {

        const {contacts, removeContact, editContact} = this.props;
        const kontakti = contacts.map((kontakt, index) => {

            return(
                <tr key={index} className='row'>
                    <th className='col-md-1 kontakt'>
                        <p className='kontakt'>{kontakt.ime}</p>
                    </th>
                    <th className='col-md-1 kontakt'>
                        <p className='kontakt'>{kontakt.prezime}</p>
                    </th>
                    <th className='col-md-3 kontakt'>
                        <p className='kontakt'>{kontakt.adresa}</p>
                    </th>
                    <th className='col-md-3 kontakt'>
                        <p className='kontakt'>{kontakt.mail}</p>
                    </th>
                    <th className='col-md-2 kontakt'>
                        <p>{kontakt.mobitel}</p>
                    </th>

                    <th className='col-md-1'>
                    <button className='input tipka' onClick={() => editContact(index)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    </th>
                    <th className='col-md-1'>
                        <button className='input tipka' onClick={() => removeContact(index)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </th>
                </tr>
            )
        })

        return(
            <table>
                <tbody>
                    {kontakti}
                </tbody>
            </table>    
        );
    }
}