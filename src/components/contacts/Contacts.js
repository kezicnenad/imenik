import React from 'react';

export default class Contacts extends React.Component {
    render() {

        const {contacts, removeContact, editContact} = this.props;
        const kontakti = contacts.map((kontakt, index) => {
            return(
                <tr key={index} className='row'>
                    <th className='col-md-2'>
                        <input
                            className='input'
                            type="text"
                            name="ime"
                            id="ime"
                            value={kontakt.ime}
                        />
                    </th>
                    <th className='col-md-2'>
                        <input
                            className='input'
                            type="text"
                            name="prezime"
                            id="prezime"
                            value={kontakt.prezime}
                        />
                    </th>
                    <th className='col-md-2'>
                        <input 
                            className='input'
                            type="text"
                            name="adresa"
                            id="adresa"
                            value={kontakt.adresa}
                        />
                    </th>
                    <th className='col-md-2'>
                        <input
                            className='input'
                            type="text"
                            name="mail"
                            id="mail"
                            value={kontakt.mail}
                        />
                    </th>
                    <th className='col-md-2'>
                        <input
                            className='input'
                            type="text"
                            name="mobitel"
                            id="mobitel"
                            value={kontakt.mobitel}
                        />
                    </th>
                    <th className='col-md-1'>
                    <button className='input tipka'><i class="fa fa-pencil" aria-hidden="true"></i></button>
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