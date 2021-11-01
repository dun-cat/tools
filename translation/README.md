# translation-cli

### 开发分支

dev/0.0.1

### 如何本地开发？

``` bash
# 安装依赖
npm install

# 构建输出
npm run build

# 运行项目 demo
npm run test
```

### 如何使用？

#### 安装 cli 包

``` bash
 npm install -D @xy/translation-cli
```

#### 集成到 package.json 内

``` json
{
  "scripts": {
    "t": "tran export -s ./public/locales -t . -f myFile -ot excel",
  }
}
```

#### 查看参数含义

``` bash
tran export --help
```