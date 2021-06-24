import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname} your form has been submitted`);
  };

  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto"></div>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={inputEvent}
                placeholder="Enter you name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={inputEvent}
                placeholder="Enter your Mobile number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={inputEvent}
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={inputEvent}
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
