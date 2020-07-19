/*
 * @Author: kanglang
 * @Date: 2019-12-28 15:54:04
 * @LastEditTime : 2019-12-29 23:58:09
 * @Description: 这里进行测试组件
 */
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Result, Klutil } from '../../src/index';

const onlyHan  = Klutil.onlyHan;


/**
 * Result 组件，默认为失败
 * resultType="success"  为成功
 * resultTile="成功/失败"      可定义成功或失败的标题
 * resultReason="xxxxxx"       可定义原因提示语
 */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    goBack() {
        alert(2)
    }
    componentDidMount() {
    }
    changeValue(e) {
        const username =  e.target.value;
        console.log(!onlyHan.test(username))
       
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <Fragment>
                {/* <Result
                    resultType="success"
                    finish={this.goBack}
                /> */}
                <input value={this.state.username} name="username" onChange={this.changeValue.bind(this)} />
            </Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);