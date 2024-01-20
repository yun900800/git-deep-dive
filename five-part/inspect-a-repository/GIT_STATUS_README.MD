# git status 深入理解

- git status 跟踪的是working directory 和 the staging area的变更;而git log 跟踪的是repository history的变更;主要是staging/unstaging files,另一个就是untracked files
- untracked files分为两类,这里理解不是很清楚，留一个疑问?
- git status一定要OK之后才能做其他操作，比如git merge,所以在这里git
 stash会派上用场

- git status -s 显示简短的状态信息

- 总结一下 
    1. 这个命令使用的场景一定是在没有执行git commit之前
    2. 这个命令没有undo的操作，可以理解为一个查询
    3. 这个命令没有操作任何一棵树
    4. 这个命令没有修改任何的blob,tree,commit