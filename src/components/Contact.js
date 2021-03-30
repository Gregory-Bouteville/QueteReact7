import React from "react";
import "./Contact.css";

const online = true;

function ContactInfos() {
  return (
    <div class="Contact">
      <img
        class="avatar"
        alt="logo"
        src={"https://avatars.githubusercontent.com/u/75377287?v=4"}
      />
      <div class="status">
        <h3 class="name">Bouteville Gregory</h3>
        <div class={online ? "status-online" : "status-offline"}></div>
        <p class="status-text">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}

export default ContactInfos;