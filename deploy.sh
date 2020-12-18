#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'blogs.kimen.com.cn' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Kimentanm/kimen-blog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://Kimentanm:${GITHUB_TOKEN}@github.com/Kimentanm/kimen-blog.git
  git config --global user.name "Kimen"
  git config --global user.email "Kimentanm@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
echo 'blog.kimen.com.cn' > CNAME  # 自定义域名
echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:Kimentanm/kimen/kimen-blog.git
else
  codingUrl=https://Kimentanm:${CODING_TOKEN}@e.coding.net/Kimentanm/kimen/kimen-blog.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
