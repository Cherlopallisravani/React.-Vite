import { useState } from "react";

const Validation = () => {
  const [formData, setFormData] = useState({firstName:"",lastName:"", email: "", phoneNumber: "" });
  const [errors, setErrors] = useState({});
  

const [submitted, setSubmitted] = useState(false); // Track successful submission

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false); // Reset success message on input change
  };







  const validate = () => {
    let tempErrors = {};

    if (formData.firstName.length <3)  {

        tempErrors.firstName = "firstName should have atlist 3 char";
      }
      if (formData.lastName.length <2) {
        tempErrors.lastName = " lastName should have atlist 2 char";
      }
    if (!formData.email.includes("@")) {
      tempErrors.email = "email should contain @";
    }
    if (formData.phoneNumber.length < 6) {
      tempErrors.phoneNumber = "Phonenumber should have 10 nums";
    }
    
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true); // Show success message with checkmark
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };
  
  
  return (

    <form onSubmit={handleSubmit} onSubmits={handleSubmits} >
      <div>
        <h3>Fromvalidatin</h3>
      <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        {correct.firstName&& <div style={{color:"green"}}>{correct.firstName}</div>}
        {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
      </div>
      <div>

      <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        {correct.firstName&& <div style={{color:"green"}}>{correct.lastName}</div>}
        {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
      </div>
      <div>

        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {correct.firstName&& <div style={{color:"green"}}>{correct.email}</div>}
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <div>
      <input
          type="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
        {correct.firstName&& <div style={{color:"green"}}>{correct.phoneNumber}</div>}
        {errors.phoneNumber && (
          <div style={{ color: "red" }}>{errors.phoneNumber}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      
    </form>
  );
};


export default Validation;