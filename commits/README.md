# Commits如何操作

1. When running the command git commit, the second step is the creation of the commit. The commit content is stored in a file containing information related to the root tree, the parent commit (if any), and some metadata like the name and e-mail of the committer and the commit message.

2. Once the commit file is created, Git hashes its content and uses the hash name to store the content in a new file, exactly as above (the first two characters form the sub-folder name in .git/objects, while the remaining part of the hash constitutes the actual name).