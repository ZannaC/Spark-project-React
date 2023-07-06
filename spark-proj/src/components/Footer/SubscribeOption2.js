import React, { useState } from "react";
import "./footerStyle.css";

function SubscribeOption2() {
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
        <form action="https://www.w3schools.com" target="blank">
          <button type="submit" class="email-submit-btn">
            &gt;
          </button>
        </form>
      </div>
    </div>
  );
}
export default SubscribeOption2;
