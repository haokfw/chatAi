>本项目基于nineai 2.4.2开发，同时借鉴99AI整合版[99AI整合版](https://github.com/vastxie/NineAIQuickDeploy)，由此二开。
>本项目仅供学习及参考，不可商用，由此造成的后果概不负责。

# Yi - Ai 更新日志

## V2.5.0（20240203）

### 功能更新

1. **mj-proxy-plus 支持更新**：

   - 新增容错和重试机制，提高稳定性。

2. **模型新增排序功能**：

   - 优化模型排序逻辑，提升用户体验。

3. **精简 mj 模型配置**：

   - 后台配置现仅需地址和 key，简化操作流程。

4. **dall-e 绘画整合进 chat**：

   - dall-e-3 模型可在后台单独配置。
   - 保留 dall-e-3 页面，绘图功能将纳入 chat 组件。
   - 连续绘图功能开发中。

5. **文件类型支持扩展**：
   - all 模型除 pdf 外，增加多种文件类型支持。

6. **第三方中转推荐**：
   - 推荐使用 [https://api.lightai.io](https://api.lightai.io) 作为第三方中转平台，以便于用户更方便地使用服务。

### Bug 修复

1. **国产模型兼容性修复**：

   - 修复了国产模型添加后无法使用的 bug。

2. **界面显示优化**：
   - 修复后台及绘画广场的显示问题。

### 注意事项

- 由于本次 mj-proxy-plus 升级不向下兼容，建议删除数据库中旧的 mj 数据库。
- 新的 key 可以通过中转平台购买。
- 如果您之前订阅过，但不想自建 mj-proxy-plus，可以考虑共享账号给我们，以合组账号池。

## V2.4.5

1. 部分页面UI精简。
2. 管理端地址改为 `/admin`，默认密码均设为 `123456`。
3. 支持使用 GPT-4-All（第三方逆向）解析上传的文件、图片。
4. 增加模型关联 Token 计费（可选）。
5. MJ 版本默认调整为 v6.0。

# 页面效果展示
<img src="https://nineai-1313051656.cos.ap-guangzhou.myqcloud.com/haibao/chat.png" width="100%">
<img src="https://nineai-1313051656.cos.ap-guangzhou.myqcloud.com/haibao/dark.png" width="100%">

# 项目部署教程
## 环境准备

1. **安装Node.js环境**
   - 请根据您的操作系统下载并安装Node.js。
   - 可以从[Node.js官网](https://nodejs.org/)下载。

2. **安装PM2**
   - 使用npm安装PM2：`npm install pm2 -g`
   - PM2是一个带有负载均衡功能的Node应用的进程管理器。

3. **安装PNPM**
   - 使用npm安装PNPM：`npm install -g pnpm`
   - PNPM是一个快速、节省磁盘空间的包管理工具。

## 配置项目

1. **配置环境变量**
   - 复制`.env.example`文件为`.env`。
   - 根据需要修改`.env`文件中的配置项。

2. **安装项目依赖**
   - 运行命令：`pnpm install`(若安装失败可尝试使用国内源)
   - 这将根据`package.json`文件安装所有必需的依赖。

## 启动项目

1. **启动服务**
   - 使用命令：`pnpm start`
   - 这将启动项目，并默认在9520端口监听。

2. **访问项目**
   - 在浏览器中访问`http://localhost:9520`，或者如果配置了nginx反向代理，则通过配置的域名访问。

## 管理平台

- **管理端地址**：`/`
- **普通管理员账号**：`admin`
- **超级管理员账号**：`super`
- **密码**：`123456`

普通管理员，可以预览后台非敏感信息。登入后台后请及时修改管理员密码，或按需要禁用普通管理员。

请确保遵循上述步骤进行配置和启动，以保证系统的正确运行。

## 项目升级

1. **拉取更新**

   - 拉取新的整合包：`git pull`

2. **删除旧进程**

   - 删除旧的 PM2 进程。

3. **安装依赖**

   - 运行命令：`pnpm install` 以安装 `package.json` 中定义的必需依赖。

4. **启动服务**
   - 使用命令：`pnpm start` 来启动项目，它将默认在 9520 端口监听。

## 作者wx

<img src="https://photo-1313051656.cos.ap-guangzhou.myqcloud.com/WechatIMG65.jpeg" width="300">






# NineAI 更新整合版

## 更新日志

### v2.4.5

1. 部分页面UI精简。
2. 管理端地址改为 `/`，默认密码均设为 `123456`。
3. 支持使用 GPT-4-All（第三方逆向）解析上传的文件、图片。
4. 增加模型关联 Token 计费（可选）。
5. MJ 版本默认调整为 v6.0。
6. 样式大调整

## 页面效果展示
<img src="https://nineai-1313051656.cos.ap-guangzhou.myqcloud.com/haibao/chat.png" width="100%">
<img src="https://nineai-1313051656.cos.ap-guangzhou.myqcloud.com/haibao/dark.png" width="100%">


## 环境准备

1. **安装Node.js环境**
   - 请根据您的操作系统下载并安装Node.js。
   - 可以从[Node.js官网](https://nodejs.org/)下载。

2. **安装PM2**
   - 使用npm安装PM2：`npm install pm2 -g`
   - PM2是一个带有负载均衡功能的Node应用的进程管理器。

3. **安装PNPM**
   - 使用npm安装PNPM：`npm install -g pnpm`
   - PNPM是一个快速、节省磁盘空间的包管理工具。

## 配置项目

1. **配置环境变量**
   - 复制`.env.example`文件为`.env`。
   - 根据需要修改`.env`文件中的配置项。

2. **安装项目依赖**
   - 运行命令：`pnpm install`(若安装失败可尝试使用国内源)
   - 这将根据`package.json`文件安装所有必需的依赖。

## 启动项目

1. **启动服务**
   - 使用命令：`pnpm start`
   - 这将启动项目，并默认在9520端口监听。

2. **访问项目**
   - 在浏览器中访问`http://localhost:9520`，或者如果配置了nginx反向代理，则通过配置的域名访问。

## 管理平台

- **管理端地址**：`/`
- **普通管理员账号**：`admin`
- **超级管理员账号**：`super`
- **密码**：`123456`

普通管理员，可以预览后台非敏感信息。登入后台后请及时修改管理员密码，或按需要禁用普通管理员。

请确保遵循上述步骤进行配置和启动，以保证系统的正确运行。

## 项目升级

1. **拉取更新**

   - 拉取新的整合包：`git pull`

2. **删除旧进程**

   - 删除旧的 PM2 进程。

3. **安装依赖**

   - 运行命令：`pnpm install` 以安装 `package.json` 中定义的必需依赖。

4. **启动服务**
   - 使用命令：`pnpm start` 来启动项目，它将默认在 9520 端口监听。

## 作者wx

<img src="https://photo-1313051656.cos.ap-guangzhou.myqcloud.com/WechatIMG65.jpeg" width="300">



