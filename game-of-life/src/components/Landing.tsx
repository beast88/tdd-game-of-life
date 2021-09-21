import React, { useState, useEffect } from 'react';

interface Props {
  number: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit(): void;
}

const Landing: React.FC<Props> = (props) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.number < 5 || props.number > 20 || isNaN(props.number)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [props.number]);

  return (
    <div className="landing">
      <form className="setup">
        <label>Enter a grid number between 5 and 20</label>
        <div className="form-control">
          <input
            className="input"
            type="number"
            value={props.number}
            onChange={(e) => props.handleChange(e)}
          />
        </div>
        <div className="form-control">
          <button
            disabled={error}
            className="button"
            onClick={() => {
              props.handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
        <p>
          For mobile devices it is recommended that you use a low grid number
        </p>
      </form>
    </div>
  );
};

export default Landing;
