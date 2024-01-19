# git commit 深入理解

- git commit 命令是捕捉当前项目下staged area中的全部changes的changes的快照.(因为commit创建的时候是整个树结构,并且commit文件中有一个根节点的hash,同时需要注意的是一个commit可能存在多个parent)
- 理解git commit的另一个思路是 如果说stage area是working directory 与 repository history之间的一个buffer;那么local repository也就是t它们的 contributions and the central repository之间的一个buffer
- a SVN commit consists of a diff compared to the original file added to the repository. Git, on the other hand, records the entire contents of each file in every commit.
- git commit 常用的一些参数
    1. git commit
    2. git commit -a
    3. git commit -m
    4. git commit -am
    5. git commit --amend