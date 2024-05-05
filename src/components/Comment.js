import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Comment extends Component {
    render() {
        return React.createElement("div", { className: 'comment' }, React.createElement('h2', { className: 'commentAuthor' }, this.props.user, React.createElement('span', { className: 'commentContent' }, this.props.content)))
    }
}

/* Comment.propTypes = {
    id:PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}; */

export default Comment;