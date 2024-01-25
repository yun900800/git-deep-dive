# git fecth 深入理解

- `git fecth` 命令用于从远程拉取文件,commit,和来自远程仓库的refs等，这里需要注意最后一个哈,本地分支的引用一般在目录`./.git/refs/heads/`,而远程仓库的引用一般在`./.git/refs/remotes/`.从这里可以看出git是如何组织本地分支和远程分支的啦
- `git fetch`常用的命令有:
    1. `git fetch <remote>`拉取远程仓库的代码,从这里可以看出,如果没有`git remote`命令,这的的remote就是一个url，可能会很长,但是有了`git remote`命令后，这里就是一个简写
    2. `git fecth <remote> <branch>` 拉取远程的某个分支，或者 `git fetch --all`
- `git fetch` 一个常用的功能就是拉取远程的一个分支,这里需要注意的是,一旦拉取了远程的分支以后,此时处于一种detach状态,因此需要在本地基于当前的Head创建一个新的分支以后再进行开发
-  `git fetch`另一个常用的功能就是将中央仓库的分支同步到本地，具体的例子可以查看 [ https://www.atlassian.com/git/tutorials/syncing/git-fetch]
- 总的来说,这是一个安全的拉取远程代码的命令,它和`git pull`最大的差别就是不包含merge命令