# Global Girl Guide

一个专为刚到海外的国际女生打造的Web应用，帮助她们轻松适应新的文化和生活环境。

## 功能特色

### 👗 穿搭推荐系统
- 根据用户体型、肤色和场合提供个性化搭配建议
- 提供购买链接和价格比较
- 季节性穿搭指南

### 🛍 生活资源导航
- 中国超市位置和评价
- 物流服务推荐
- 华人司机联系方式
- 生活必需品购买指南

### 📖 文化术语词典
- 解释美国文化术语（如"dress code"、"homecoming"等）
- 文化差异说明
- 实用英语表达

### 💬 留学女生社区
- 经验分享和讨论
- 问答功能
- 点赞和评论系统
- 私信功能

## 技术栈

- **前端**: React 18 + Tailwind CSS
- **响应式设计**: 支持移动端和桌面端
- **UI风格**: 现代清新，面向年轻女性用户
- **主色调**: 粉色和浅紫色渐变

## 项目结构

```
global-girl-guide/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # 导航栏组件
│   │   └── HomePage.js        # 首页组件
│   ├── App.js                 # 主应用组件
│   ├── index.js               # 应用入口
│   └── index.css              # 全局样式
├── package.json
├── tailwind.config.js         # Tailwind配置
├── postcss.config.js          # PostCSS配置
└── README.md
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

## 开发计划

- [x] 项目基础架构搭建
- [x] 首页设计和实现
- [x] 响应式导航栏
- [ ] 穿搭推荐系统页面
- [ ] 生活资源导航页面
- [ ] 文化术语词典页面
- [ ] 社区功能页面
- [ ] 用户认证系统
- [ ] 后端API开发

## 贡献

欢迎提交Issue和Pull Request来帮助改进这个项目！

## 许可证

MIT License 