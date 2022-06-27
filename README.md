# my-blogs

这个网站是用[Docusaurus 2](https://docusaurus.io/)建立的。线上的博客地址[Sunburst112 的博客](https://sunburst89757.github.io/my-blogs/)

### 安装依赖

```
$ npm install
```

### 本地运行

```
$ npm run start
```

### 打包

```
$ npm run build
```

### 部署

使用 SSH:

```
$ USE_SSH=true yarn deploy
```

不使用 SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

本仓库配置了 Github Actions，当有新的更改 push 到 master 分支时会自动触发部署 github-page
