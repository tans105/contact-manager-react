import user from "../images/user.png";

const ContactCard = ({ contacts, removeContactHandler }) => {
  return contacts.map((contact) => {
    return (
      <div className="item" key={contact.id}>
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
          <i
            onClick={() => removeContactHandler(contact.id)}
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px" }}
          ></i>
        </div>
      </div>
    );
  });
};

export default ContactCard;
