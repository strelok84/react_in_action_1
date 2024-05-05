import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends Component {
    render() {
        return React.createElement("div", { className: "post" },
            React.createElement("h2", { className: "postAuthor", id: this.props.id }, this.props.user, React.createElement("span", { className: "postBody" }, this.props.content),this.props.children)
        )
    }


}

Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Post;