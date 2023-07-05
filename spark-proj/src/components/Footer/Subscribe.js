import React, { useState } from "react";
import "./footerStyle.css";

function Subscribe() {
  const [data, setData] = useState({ email: "" });

  const onChangeEmail = (event) => {
    setData((currentData) => ({
      ...currentData,
      email: event.target.value,
    }));
  };

  return (
    <div>
      <div className="footer-subscribe">
        Subscribe to our <br />
        newsletter
      </div>
      <div className="email-btn">
        <div>
          <input
            className="email-input"
            type="text"
            placeholder="Email address"
            value={data.email}
            onChange={onChangeEmail}
          />
        </div>
        <button>
          <a
            href="https://www.w3docs.com"
            target="blank"
            className="email-submit-btn"
            itemProp="url"
          >
            &gt;
          </a>
        </button>
      </div>
    </div>
  );
}
export default Subscribe;
