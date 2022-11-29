import React from 'react';
import Message from "./Message";
import {Data} from "../../../types";

interface Props {
  chats: Data[];
}

const Messages: React.FC<Props> = ({chats}) => {

  return (
    <>
      {chats.map((message) => (
        <Message
          key={message._id}
          message={message}
        />
      ))}
    </>
  );
};

export default Messages;