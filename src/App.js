import React, { Component } from "react";
import "./App.css";
import ChoseColor from "./components/ChoseColor";
import SiteSetting from "./components/SiteSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            fontSize: 14,
        };
        this.onSetColor = this.onSetColor.bind(this); // or arrow function
    }

    onSetColor(params) {
        this.setState({
            color: params,
        });
    }

    onChangeSize = (value) => {
        this.setState({
            fontSize:
                this.state.fontSize + value >= 8 &&
                this.state.fontSize + value <= 36
                    ? this.state.fontSize + value
                    : this.state.fontSize,
        });

        console.log(this.state.fontSize);
    };
    onSettingDefault = (value) => {
        if (value) {
            this.setState({
                color: "red",
                fontSize: 14,
            });
        }
    };
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Color Picker Application</h1>
                <div className="row mt-5">
                    <div className="col">
                        <ChoseColor
                            color={this.state.color}
                            onReceiveColor={this.onSetColor}
                        />
                    </div>
                    <div className="col">
                        <SiteSetting
                            fontSize={this.state.fontSize}
                            onChangeSize={this.onChangeSize}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col"></div>
                    <div className="col">
                        <Reset onSettingDefault={this.onSettingDefault} />
                    </div>
                </div>
                <Result
                    color={this.state.color}
                    fontSize={this.state.fontSize}
                />
            </div>
        );
    }
}

export default App;
