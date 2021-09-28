import React, { Component } from "react";

class SiteSetting extends Component {
    changeSize(value) {
        this.props.onChangeSize(value)
    }
    render() {
        return (
            <div className="card ">
                <div className="card-header bg-primary text-white">
                    <h4>Site Setting: {this.props.fontSize}px</h4>
                </div>
                <div className="card-body" style={{ height: "108px" }}>
                    <button
                        className="btn btn-success mr-2"
                        onClick={() => this.changeSize(-2)}
                    >
                        Giảm
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => this.changeSize(2)}
                    >
                        Tăng
                    </button>
                </div>
            </div>
        );
    }
}

export default SiteSetting;
