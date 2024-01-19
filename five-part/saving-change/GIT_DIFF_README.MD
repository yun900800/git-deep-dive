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
        - `@@ -3,4 +3,4 @@`是header,剩下的是内容，而header中的内容是对差异块更改的摘要