Part 1
# What command do you use to setup a git repository inside of your folder?
git init

#What command do you use to ask git to start tracking a file?
git add .

#What command do you use to ask git to move your file from the staging area to the repository?
git push origin master

#What command do you use to pull any changes from the master repository into your local repository?
git pull origin master

#What command do you use to unstage a file?
git reset

#What command do you use to change your files back to how they were after a commit?
git fetch origin
git reset

#Why is it important to use -- when changing files back to a previous state?
git checkout

#Why might you want to reset your files back to a previous commit?
because you forgot to add something or didn't want to commit just yet

#What command do you use to create a branch?
git checkout -b [name_of_your_new_branch]

#What command do you use to use a different branch?
git checkout [name_of_your_new_branch]

#Why would you want to use a branch other than the default master?
we treat the master as our production and therefore need to create a single branch for development, or pre-production
