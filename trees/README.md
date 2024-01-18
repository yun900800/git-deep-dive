# Trees如何操作

1. It creates a root tree of the repository
    - 1. what is a root tree? A root tree stores the structure of files and folders of the entire repository. It is a file containing the reference to every blob or sub-folder included in the repository, built in a recursive manner.It is a file containing the reference to every blob or sub-folder included in the repository, built in a recursive manner.
    Each row of the root tree references a blob or other sub-trees, which in turn reference other blobs or other sub-trees in the same way. Hence, the tree is the equivalent of a directory: just as we can access files and sub-folders from a directory, so we can access blobs and sub-trees from a tree.
    - 2. Once Git has created the root tree and all related sub-trees, it performs the same hashing and storing operations we described above. More precisely, it hashes each tree and uses the first two characters to create a sub-folder in .git/objects while the remaining hashing characters form the name of the saved file. Hence, from this process, we get as many new files as the number of trees in the data structure.
2. It creates the commit