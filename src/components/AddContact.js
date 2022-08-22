import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  add = (e) => {
    e.preventDefault();
    const { name, email } = this.state;

    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.setState({ name: "", email: "" });
    return this.props.addContactHandler({ name, email });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            ></input>
          </div>
          <div>
            <button className="ui button blue">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
