# 分支与分支合并

    git checkout 需要合并分支名
    git merge 被合并分支名

# Git-本地与远程仓库建立关联

    git remote add origin https://github.com/xx

# git强制覆盖本地命令（单条执行）：

    git fetch --all && git reset --hard origin/分支名 && git pull
