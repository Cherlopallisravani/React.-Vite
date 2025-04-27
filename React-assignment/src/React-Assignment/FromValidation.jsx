import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({firstName:"",lastName:"", email: "", phoneNumber: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.length <=3)  {
        tempErrors.firstName = "firstName should have atlist 3 char";
      }
      if (!formData.lastName.length <=2) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <h3>Fromvalidatin</h3>
      <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
      </div>
      <div>

      <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
      </div>
      <div>

        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
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
        {errors.phoneNumber && (
          <div style={{ color: "red" }}>{errors.phoneNumber}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};


export default FormValidation;