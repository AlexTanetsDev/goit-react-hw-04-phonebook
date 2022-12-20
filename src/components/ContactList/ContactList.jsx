import { ContactItem, List } from "./ContactList.styled";
import PropTypes, { shape } from 'prop-types'

export const ContactList = ({contacts, deleteContact}) => {
    return (
        <List>
            {contacts.map(contact => {
                const { id, name, number } = contact;
                return <ContactItem key={id}>
                    <p>{name} : {number}</p>
                    <button type="button" onClick={()=>{deleteContact(id)}}>Delete</button>
                </ContactItem>
            })}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    deleteContact: PropTypes.func
}