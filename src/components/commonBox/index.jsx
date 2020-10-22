import React, { Component } from "react";

class Commonbox extends Component {
    render() {
        return (
            <div>
                <div>Commonbox</div>
                {this.props.children}
            </div>
        );
    }
}

export default Commonbox;
