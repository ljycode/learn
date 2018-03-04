# learn
学习命令 Linux Git
# Linux命令
cd  进入目录
cd  ..    返回上级目录
ls  列出当前目录下的文件 文件夹
pwd  命令用于显示当前目录
mkdir  新建一个文件夹
# Git 命令
git clone https://github.com/ljycode/learn.git 
git checkout -b dev 创建dev分支，然后切换到dev分支
git branch 查看当前分支


git status  查看状态
git add . 把有变化的文件加入暂存区
git commit -m '注释信息'  做版本
git push origin branch  提交到远程分支
git pull origin branh   更新远程分支



.gitignore不起作用
git rm -r --cached .
git add .
git commit -m 'update .gitignore'