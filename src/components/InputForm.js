import { useEffect, useState, useRef } from "react";
import "./InputForm.css";

import ErrorModal from "../ui/ErrorModal";

function InputForm(props) {
  const [inputAge, setInputAge] = useState("");
  const [validity, setValidity] = useState("");
  const [validityText, setValidityText] = useState("");
  const [validityAge, setValidityAge] = useState(0);
  const [error, setError] = useState();

  const nameRef = useRef("");
  //When Only wannna read Data...And not changing anything...Just Directly Retrive and Send Data...
  //Don't Use useState, if using useRef..

  const ageHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validity === "valid" && validityAge === "valid") {
      const user = { name: nameRef.current.value, age: inputAge };
      props.inputHandler(user);
      nameRef.current.value = "";
      setInputAge("");
    } else if (nameRef.current.value.trim().length <= 2) {
      setError({
        header: "Invalid Name",
        content: "Please Enter a Valid Name ( Atleast 3 Characters )",
      });
    } else if (inputAge <= 0) {
      setError({
        header: "Invalid Age",
        content: "Please Enter Valid Age (0-100)",
      });
    }
  };

  const errorHandler = () => {
    setError();
  };

  //Execute 1st when render
  useEffect(() => {
    const name_ref = nameRef ? nameRef.current.value.trim().length : 3;
    if (name_ref <= 2 && name_ref >= 1) {
      setValidity("invalid");
      setValidityText("Invalid Name");
    } else if (name_ref >= 3) {
      setValidity("valid");
      setValidityText("Valid Name");
    } else {
      setValidityText("");
      setValidity("");
    }

    if (inputAge < 0) {
      setValidityAge("invalid");
    } else if (inputAge > 0) {
      setValidityAge("valid");
    } else {
      setValidityAge("");
    }
  }, [nameRef.current.value, inputAge]);

  useEffect(
    () => {
      //mount
      return () => {
        //unmount
        alert("WELCOME");
      };
    },
    [
      /*modify*/
    ]
  );

  return (
    <div>
      {error && (
        <ErrorModal
          header={error.header}
          content={error.content}
          clickHandler={errorHandler}
        />
      )}
      <form className="add-main__form" onSubmit={submitHandler}>
        <div className="add-main">
          <div className={`add-name  ${validity}`}>
            <label>UserName</label>
            <input type={"text"} ref={nameRef} />
            <p>{validityText}</p>
          </div>
          <div className={`add-age  ${validityAge}`}>
            <label>Age (Years)</label>
            <input
              type={"number"}
              max={"200"}
              step={"1"}
              value={inputAge}
              onChange={ageHandler}
            />
          </div>
        </div>
        <div className="add-button">
          <button>
            <b>Add</b>
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
