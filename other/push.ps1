# Code to push to Git, then create/modify the brand gh-pages.

param (
    [string]$m = "No message specified"
)

Write-Host "Starting commiting process on main branch."
git add .
git commit -m $m
git push

Write-Host "Starting commiting process on gh-pages branch."
cd ..
git subtree push --prefix dist origin gh-pages
