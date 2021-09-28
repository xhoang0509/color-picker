import React, { Component } from "react";

class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            borderColor: 'currentColor',
            fontSize: this.props.fontSize
        };
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="card-header bg-primary text-white">
                    Color: {this.props.color} | Font Size: {this.props.fontSize}px
                </div>
                <div className="input-group mt-2">
                    <input
                        type="text"
                        className="form-control"
                        defaultValue="Enter conntent..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={this.setStyle()}
                    />
                </div>
            </div>
        );
    }
}

export default Result;
