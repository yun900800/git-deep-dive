# git remote 深入理解

- `git remote`命令用于创建，查看,删除到其他仓库的连接,它主要的命令包括一下几个:
    1. `git remote add <name> <url>` 创建一个名称为name的到url的远程连接,有了这个远程连接以后, `git fetch` ,`git pull`等命令就可以使用这个简写的远程url啦
    2. `git remote rm <name>` 删除一个名称为name的远程连接
    3. `git remote rename <oldName> <newName>` 修改一个名称为oldName的连接为newName
    4. `git remove show <name>` 显示连接name的相关信息
- `git remote` 命令主要操作是的是`./.git/config`文件的内容,这个目录的内容在调试的时候可以使用
- `git remote` 一般来说会生成一个origin到中央仓库的连接，这个origin是默认值