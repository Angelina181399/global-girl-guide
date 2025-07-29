#!/bin/bash

echo "🚀 启动 Global Girl Guide 项目..."

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖包..."
    npm install
fi

echo "🌟 启动开发服务器..."
npm start 