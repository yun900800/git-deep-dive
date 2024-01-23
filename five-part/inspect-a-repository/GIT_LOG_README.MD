# git log 深入理解

- git log主要用于显示 repository history中的变更,其实就是一些列commit；主要包括两类常用的功能:格式化和过滤commit信息；
- 对git log输出进行格式化有两种情况: 通过传递参数 `git log --oneline`，或者通过git config进行配置
- 浏览project的大概情况的时候使用 --oneline；查看commit属于那些branch或者commit使用 --decorate；
- 查看每个commit添加或者删除的行数 --stat；查看具体的change使用 -p；内容太长怎么办,git shortlog来帮忙，其实就是一个分组的作用

- git log的过滤包括
    1. 按照行数进行过滤: `git log -3` 
    2. 按照日期进行过滤: `git log --after="2014-7-1"` ,注意，根据日期过滤有多种格式
    3. 根据作者进行过滤: `git log --author="John"`
    4. 根据消息进行过滤: `git log --grep="JRA-224:"`
    5. 根据文件过滤: `git log -- foo.py bar.py`
    6. 根据内容进行过滤: `git log -S"Hello, World!"`
    7. 根据范文进行过滤: `git log main..feature
    8. 其他: `git log --no-merges` `git log --merges`