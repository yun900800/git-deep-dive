# git stash 深入理解

- 为什么将git add的内容git stash以后,文件不存在了呢
- git stash pop的作用是恢复一个stash的版本
- git stash恢复有多少中情况？git stash pop 或者git stash apply
- git stash -u; git  stash -a; git stash -p;也就是说git stash 可以存储全部的目录文件或者指定的文件;也可以存储未跟踪的或者忽略的文件.
- git stash 还可以清空临时存储 git stash clear; git stash drop 'stash_id'
- 查看某个stash对应的修改 git stash show <stash_id> 
- 从某个stash生成一个分支 `git stash branch <new_branch_name stash_id>`

- 总结:
    1. git stash解决的问题是将那些已经处于暂存区域的更改保存起来,然后保持一个干净的repository;主要的场景是如果存在两个分道扬镳已经很长时间的分支 A 和 B ,此时A已经做了一个半成品的修改,但是要切换到分支B做一个bug修改,这样的场景下的最佳处理办法就是使用git stash;反向思考一下,如果没有git stash命令,此时存在两种方案: 其一是将这个半成品的修改设置成为不需要跟踪的状态;或者将半成品的状态直接提交成一个commit,任何方法都不算是一个好的体验
    2. git stash的undo操作包括 git stash pop; git stash apply
    3. git stash操作的tree主要是working directory,更准确的说是这个目录`/.git/refs/stash`
    4. 这个操作不涉及blob,tree和commit
