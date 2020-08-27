import React, { useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    setLoading(true);
    try {
      await props.onSubmit(input);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>{props.title}</h3>
      <hr/>
      <form className="form-wrapper"  onSubmit={onSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
        
          {props.inputs.map(i => (
            <label key={i.name}>
              {i.name}
              <input className="input-higinn" 
                value={input[i.name] || ""}
                type={i.type}
                onChange={e => {
                  const value = e.target.value;
                  setInput(prev => ({ ...prev, [i.name]: value }));
                }}
              />
            </label>
          ))}
          <input className="submit-btn" type="submit" value={`Submit${loading ? "ing" : ""}`} />
        </fieldset>
      </form>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        type: PropTypes.string
      }.isRequired
    )
  ),
  onSubmit: PropTypes.func.isRequired
};

export { Form };