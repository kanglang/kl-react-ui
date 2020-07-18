/*
 * @Author: kanglang
 * @Date: 2019-12-28 15:54:04
 * @LastEditTime : 2019-12-29 23:58:09
 * @Description: 这里进行测试组件
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Result } from '../../src/index';



/**
 * Result 组件，默认为失败
 * resultType="success"  为成功
 * resultTile="成功/失败"      可定义成功或失败的标题
 * resultReason="xxxxxx"       可定义原因提示语
 */

class App extends Component {
    constructor(props) {
        super(props);
    }
    goBack(){
        alert(2)
    }
    render() {
        return (
            <Result
                resultType="success"
            // resultTile="成功"
            // resultReason="xxxxxx"
                finish={this.goBack}
            />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);