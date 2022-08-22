import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactHandler }) => {
  return (
    <div className="ui celled list">
      <ContactCard contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
};

export default ContactList;
