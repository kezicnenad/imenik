import React from 'react';

export default class Contacts extends React.Component {
    render() {

        const {contacts, removeContact} = this.props;
        const kontakti = contacts.map((kontakt, index) => {
            return(
                <tr key={kontakt.id} className='row'>
                    <th className='col-md-2'>{kontakt.ime}</th>
                    <th className='col-md-2'>{kontakt.prezime}</th>
                    <th className='col-md-2'>{kontakt.adresa}</th>
                    <th className='col-md-2'>{kontakt.mail}</th>
                    <th className='col-md-2'>{kontakt.mobitel}</th>
                    <th className='col-md-1'>E</th>
                    <th className='col-md-1'>
                        <button onClick={() => removeContact(index)}>X</button>
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