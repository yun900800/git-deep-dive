# Blobs操作过程

1. Git takes the content of the file and hashes it

2. Git creates a blob within the .git/objects folder. The first two characters of the hash are used to create a sub-folder in this path. Within it, Git creates the blob having a name formed by the remaining characters of the hash.

3. Git stores the contents of the original file (a zipped version of it) within the blob.
