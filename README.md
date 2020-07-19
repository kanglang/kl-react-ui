# 如何启动项目进行测试

###  npm install

### npm run start

> 输入'localhost:3001'即可启动

### npm run build

> 打包项目进行发布
---
# 组件

## 结果反馈 - Result

| 属性名 | 说明 | 类型 | 默认值 | 值库 |
| --- | --- | --- | --- | --- | --- |
| resultTile | 组件的title | String | 成功 | 成功、失败、自定义值 |
| resultReason | 成功/失败的原因 | String | 原因详情 | 可自定义 |
| resultType | 结果类型 | String | success | success、fail |
| finish | 完成回调方法 |func| -- | -- | -- |

* 原因详情: 亲亲，不管成功还是失败，只有有恒心不放弃，生活都会向好的方向发展，让我们一起加油！

---
## 增加各类正则 - klutil

* 全量手机号
    > regPhone: /^1\d{10}$/,
* 纯数字
    > onlyNumber: /^[0-9]*$/,
* 数字,不包含0
    > noZeroNumber: /^[1-9]\d{0,}$/,
* 固定电话
    > telphone: /(^\d{0,9}-\d{0,10}$)|(^\d{1,20}$)/,
* 统一社会信用代码/税号
    > socialCreditCode: /^[A-Za-z0-9]{15,20}$/,
* 不可以为0 的价格
    > price: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)/,
* 可以为0 的价格
    > zeroPrice: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
* 纯中文/汉字
    > onlyHan: /^[\u4e00-\u9fa5]+$/,
* 仅中文或英文，不允许含有数字
    > noNumber: /^[a-zA-Z\u4E00-\u9FA5]*$/,
* 不允许含有特殊字符
    > noChar: /^[0-9a-zA-Z\u4E00-\u9FA5]*$/,
* 有emoji表情
    > emoji: /\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/,
* 邮箱
    > email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
* 6-16位 数字+字母 密码
    > numEnPwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
* 6-16位 纯数字或纯字母 或数字+字母
    > numOrEn: /^[a-zA-Z0-9]{6,16}$/
---