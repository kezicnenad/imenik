import React from 'react';

export default function ContactList({contacts, removeContact}) {
  return(
    <div>
        {
            (contacts.length > 0) ?
            contacts.map((contact) => (
                <div key={contact.id} className='row'>
                    <div className='col-md-1'>
                        <input value={contact.ime} />
                    </div>
                    <div className='col-md-1'>
                        <input type='text' value={contact.prezime} />
                    </div>
                    <div className='col-md-4'>
                        <input type='text' value={contact.adresa.ulica + ' ' + contact.adresa.kucniBroj + ', ' + contact.adresa.postanskiBroj + ' ' + contact.adresa.grad} />
                    </div>
                    <div className='col-md-2'>
                        <input type='text' value={contact.email} />
                    </div>
                    <div className='col-md-2'>
                    <input type='text' value={contact.telefon} />
                    </div>
                    <div className='col-md-1'>
                        <button><i className='fa fa-pencil' /></button>
                    </div>
                    <div className='col-md-1'>
                        {/* Ovdje removeContact salje id o kojem se kontaktu radi */}
                        <button onClick={() => removeContact(contact.id)}><i className='fa fa-remove' /></button>
                    </div>
                </div>
              )) :
              (<p>Nema kontakata</p>)
        }

    </div>
  );
}