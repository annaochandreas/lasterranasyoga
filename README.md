# lasterranasyoga

# Heroku
name: evening-brushlands-98351

Add heroku remote 
$ heroku git:remote -a evening-brushlands-98351

Deploy to Heroku use -f (force flag) you dont use git for version control.
$ git add -A
$ git commit -m "commit for deploy to heroku"
$ git push -f heroku
