
## 一个react组件库

### 如何发布组件库到NPM平台

* 先通过 'npm run build'打包项目
* 然后 npm adduser/npm login 输入npm的用户名，密码，邮箱 （这里的npm 必须是原始的npm镜像：https://registry.npmjs.org/）
* npm publish 发布组件库
* 如果需要发布更新升级的版本 则需要更改package.json文件中的verson  然后重复前面两步即可
