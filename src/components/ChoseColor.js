import React, { Component } from "react";

class ChoseColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["red", "blue", "green", "yellow", "#AF15F5"],
        };
    }
    showColor(color) {
        return {
            backgroundColor: color,
        };
    }
    setActiveColor(color) {
        this.props.onReceiveColor(color)
    }

    render() {
        const elementColors = this.state.colors.map((color, index) => {
            return (
                <div
                    key={index}
                    style={this.showColor(color)}
                    className={
                        this.props.color === color
                            ? "color-block active"
                            : "color-block"
                    }
                    onClick={() => this.setActiveColor(color)}
                ></div>
            );
        });

        return (
            <div className="card ">
                <div className="card-header bg-primary text-white">
                    <h4>Chose color</h4>
                </div>
                <div className="card-body">{elementColors}</div>
            </div>
        );
    }
}

export default ChoseColor;
