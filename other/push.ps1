# Code to push to Git, then create/modify the branch gh-pages.

param (
    [string]$m = "No message specified"
)

cd ..

Write-Host "Starting commiting process on main branch." -ForegroundColor green
git checkout main
git add .
git commit -m $m
git push

Write-Host "Starting commiting process on gh-pages branch." -ForegroundColor green
git pull origin gh-pages
git subtree push --prefix dist origin gh-pages
# git checkout main
# git checkout source "dist/"
# git add .
# git commit -m $m
# git push origin gh-pages

Write-Host "Ending processes." -ForegroundColor green
git checkout main

cd "./other"
