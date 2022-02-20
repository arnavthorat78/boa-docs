@REM Code to push to Git, then create/modify the brand gh-pages.

git add .
git commit -m %1%
git push

git subtree push --prefix dist origin gh-pages
