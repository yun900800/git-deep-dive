# git tag 深入理解

- git tag命令的主要作用是什么?tag是指向 Git 历史记录中特定点的引用。标记通常用于捕获用于标记版本发布的历史点.tag可以认为是不会改变的分支，没有commit history
- git tag主要包括新增，删除，查询以及修改
    1. `git tag <tagname>` 新增一个tag
    2. `git tag -a v1.4` 与 `git tag -a v1.4 -m "my version 1.4"`的区别？
    3. `git tag v1.4-lw`打一个lightweight tag
    4. `git tag`列出所有tag,`git tag -l *-rc*`过滤tag
    5. 给老的commit打tag

    ```shell
        git log --pretty=oneline
        15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'feature'
        a6b4c97498bd301d84096da251c98a07c7723e65 add update method for thing
        0d52aaab4479697da7686c15f77a3d64d9165190 one more thing
        6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'

        git tag -a v1.2 15027957951b64cf874c3557a0f3547bd83b3ff6
    ```

    6. `git tag -a -f v1.4 15027957951b64cf874c3557a0f3547bd83b3ff6`修改tag
    7. `git push origin v1.4`推送都远程仓库
    8. `git checkout v1.4` 切换到某个tag
    9. `git tag -d` 删除tag
- git 支持两种类型的tag:annotated and lightweight tags.他们的区别在于存储的元数据不一样，注解tag一般用于公开，而轻量级tag用于私有。带注释的标签存储额外的元数据，例如：标签者名称、电子邮件和日期。这是公开发布的重要数据。轻量级标签本质上是提交的“书签”，它们只是一个名称和指向提交的指针，可用于创建指向相关提交的快速链接。