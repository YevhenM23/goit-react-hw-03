import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const Contact = ({ contacts, onDeleteCard }) => {
    return (
        <div>
            <FaUser /> {contacts.name}
            <FaPhone /> {contacts.number}
            <button onClick={() => onDeleteCard(contacts.id)}>Delete</button>
        </div>

    ) 
};

export default Contact;