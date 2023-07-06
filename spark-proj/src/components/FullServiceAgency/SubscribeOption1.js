import React, { useState } from "react";
import "./fullServiceAgency.css";

function SubscribeOption1() {
  const [data, setData] = useState({ email: "" });

  const onChangeEmail = (event) => {
    setData((currentData) => ({
      ...currentData,
      email: event.target.value,
    }));
  };

  return (
    <div className="full-service-agency-bench-subscribe">
      <h4>Straight from our desk, to your Inbox.</h4>
      Subscribe to our newsletter
      <div className="full-service-agency-bench-subscribeBtn">
        <div>
          <input
            className="email-btn-input"
            type="text"
            placeholder="Your Email"
            value={data.email}
            onChange={onChangeEmail}
          />
        </div>
        <form action="https://www.w3schools.com" target="blank">
          <button type="submit" class="bench-subscribeBtn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
export default SubscribeOption1;
