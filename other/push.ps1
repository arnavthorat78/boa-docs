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
git checkout main
git checkout source "dist/"
git add .
git commit -m $m
git pull --rebase
git push

Write-Host "Ending processes." -ForegroundColor green
git checkout main

cd "./other"
