import React from "react";
import "./Categorize.sass";
import PropTypes from "prop-types";
import messageReducer from "../redux/reducers/messageReducers";

const Message = ({ message, author }) => {
  return (
    <p>
      <i>{author}</i>: {message}
    </p>
  );
};

Message.PropTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
