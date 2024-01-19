# git diff 深入理解

- Diffing is a function that takes two input data sets and outputs the changes between them.
- diff可以接受的数据集包括commits, branches, files等
- diff函数通常需要配置git status和git log一起使用
- 测试一下diff的使用

    ```shell
        diff --git a/five-part/saving-change/GIT_DIFF_README.MD b/five-part/saving-change/GIT_DIFF_README.MD
        index 15afbf6..51d6e0c 100644
        --- a/five-part/saving-change/GIT_DIFF_README.MD
        +++ b/five-part/saving-change/GIT_DIFF_README.MD
        @@ -3,4 +3,4 @@
        - Diffing is a function that takes two input data sets and outputs the changes between them.
        - diff可以接受的数据集包括commits, branches, files等
        - diff函数通常需要配置git status和git log一起使用
        --
        \ No newline at end of file
        +- 测试一下diff的使用
        \ No newline at end of file
    ```

    1. `diff --git a/five-part/saving-change/GIT_DIFF_README.MD b/five-part/saving-change/GIT_DIFF_README.MD`是diff函数的输入来源,这里实际上就是两个文件
    2. 元数据 `index 6b0c6cf..b37e70a 100644`
    3. 更改标记 `--- a/five-part/saving-change/GIT_DIFF_README.MD
        +++ b/five-part/saving-change/GIT_DIFF_README.MD`,来自于a部分的change标记为---,来自于b部分的change标记为+++
    4. 最后就是剩余的差异输出是差异“块”的列表。
        - 差异输出块包含header和具体内容
        - `@@ -3,4 +3,27 @@`是header,剩下的是内容，而header中的内容是对差异块更改的摘要
        - 这里的意思就是抽取前一个文件从第3行开始的4行内容;以及展示后一个变化后的文件从第3行开始的27行的内容;实际上添加了24行
            有一行改变,没有删除行
- git diff 有一些具体的配置参数
    1. git diff --color-words
    2. git diff-highlight
- git diff 可以指定一定目录下的文件来进行比较
    1. git diff HEAD ./path/to/file
    2. git diff --cached ./path/to/file
- 比较两个不同commit之间的文件

    ```shell
        git log --pretty=oneline
        957fbc92b123030c389bf8b4b874522bdf2db72c add feature
        ce489262a1ee34340440e55a0b99ea6918e19e7a rename some classes
        6b539f280d8b0ec4874671bae9c6bed80b788006 refactor some code for feature
        646e7863348a427e1ed9163a9a96fa759112f102 add some copy to body

        $:> git diff 957fbc92b123030c389bf8b4b874522bdf2db72c ce489262a1ee34340440e55a0b99ea6918e19e7a
    ```

- 比较两个不同分支的文件或者直接比较两个不同的分支
    1. git diff main new_branch ./diff_test.txt
    2. git diff branch1..other-feature-branch