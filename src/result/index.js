/*
 * @Author: kanglang
 * @Date: 2019-12-28 15:29:49
 * @LastEditTime : 2019-12-29 23:47:22
 * @Description: 这是一个具有成功和失败的结果页面组件
 */
import React from 'react';
import './style/result.scss';
const resultSuccess = require('./images/result_success.png').default;
const resultFail = require('./images/result_fail.png').default;

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { resultTile, resultReason, resultType } = this.props;

    return (
      <div className="kl-result">
        <div className="kl-result-icon">
          <img src={resultType == "success" ? resultSuccess : resultFail} />
        </div>
        {
          resultType == "success" ?
            <div className="kl-result-title">{resultTile ? resultTile : "成功"}</div> :
            <div className="kl-result-title">{resultTile ? resultTile : "失败"}</div>
        }
        <div className="kl-result-reason">{resultReason ? resultReason : "亲亲，不管成功还是失败，只有有恒心不放弃，生活都会向好的方向发展，让我们一起加油！"}</div>
      </div>
    )
  };
};
export default Result;