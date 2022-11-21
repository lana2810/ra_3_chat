import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

function MessageHistory({ list = [] }) {
  return (
    <ul>
      {list.map((item) =>
        item.type === "message" ? (
          <Message key={item.id} it={item}></Message>
        ) : item.type === "response" ? (
          <Response key={item.id} it={item}></Response>
        ) : (
          <Typing key={item.id}></Typing>
        )
      )}
    </ul>
  );
}

export default MessageHistory;
