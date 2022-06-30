# 分支与分支合并

    git checkout 需要合并分支名
    git merge 被合并分支名

# Git-本地与远程仓库建立关联

    git remote add origin https://github.com/xx

# git强制覆盖本地命令（单条执行）：

    git fetch --all && git reset --hard origin/分支名 && git pull
    
# git clone时sslVerify报错： 

    git config --global http.sslVerify false

# git 合并指定commit

    git reflog 查看 commitID

    git cherry-pick 62ecb3<commitID>

# git tag 打标签推送远程

    git tag <tagName>

    git push origin <tagName>