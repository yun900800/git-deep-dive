# git init 深入理解

- 生成一个.git的子目录,包含git需要的元数据
- objects,refs,还有模板文件,一个HEAD文件指向当前的commit
- git init与git clone的区别是一个是创建一个新的repository,另一个是复制一个已经存在的repository
- 什么时候考虑使用git int --bare
- git init --separate-git-dir 的作用是什么呢