import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../../store/actions/contactAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();


  const contacts = useSelector((state) => state.contact.contacts);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  console.log(id);

  useEffect(() => {
    console.log(contacts)
    const contact = contacts.filter(contact => contact.id === Number(id));
    console.log(contact);
    setName(contact[0].name);
    setPhone(contact[0].phone);
    setEmail(contact[0].email);
  }, [contacts]);


  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = {
      id: Number(id),
      name,
      phone,
      email,
    };

    console.log("update_contact", update_contact);

    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
