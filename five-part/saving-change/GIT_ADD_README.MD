# git add 深入理解

- git add 的作用是将修改从 working directory 到 staged area
- 理解git中的三棵树包括  working directory, staged index tree, Commit history tree
- git add 可以添加目录和文件以及git add -p是一个交互式功能.试试这个具体的操作
- 理解如何从stage area回退到working directory? git reset 与 git restore的区别?
- git add <file> 或者 git add <directory> 或者 git add -p
- 总结一下git命令学习的方法:
    1. 这个命令是在什么场景下使用?
    2. 这个命令是否有undo操作?
    3. 这个命令操作的是哪棵树?
    4. 这个命令修改了哪些blob,哪些tree,哪些commit?
