import React,{useState} from 'react';

const EditedContact = (props) => {
    let [ name, setName ] = useState(props.EditeContact.name);
    let [surname, setSurname] = useState(props.EditeContact.surname);
    let [phone, setPhone] = useState(props.EditeContact.phone);

    function handleSaveClick() {
        let contact = { ...props.EditeContact };
        contact.name = name;
        contact.surname = surname;
        contact.phone = phone;
        props.handleSaveEdit(contact);
        setName('');
        setSurname('');
        setPhone('');
    }
    
    return (
        <div>
        <input onChange={(e) =>setName(e.target.value)} type="text" placeholder="Name" value={name}/>
        <input   onChange={(e) =>setSurname(e.target.value)} type="text" placeholder="SurName"  value={surname}/> 
        <input  onChange={(e) =>setPhone(e.target.value)} type="text" placeholder="Phone" value={phone} /> 
        <button onClick={handleSaveClick}>Save Edit</button>
    </div>
    );
};

export default EditedContact;