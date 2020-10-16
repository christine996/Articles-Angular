# Articles-Angular

First,you need to run the apis project(https://github.com/christine996/Articles-APIs.git) because all are local on port http://localhost:53363
run the project using command: ng serve
no installs needed (if any run: npm install) 

project overview:
project consists of 5 components:

1-viewArticles: has a list of cards that show each article name, category, content and any comment that has been approved.
2-editArticles:has the data of the article that needs to be edited that have been passed through the view component.
3-addArticles:through this component you can add article content,name and category.
4-addComment:user can add comment through this component but comment won't be shown in card unless it is approved.
5-commentAprroval:through this component admin can approve or disapprove the visitor comment,if approved it will be shown in the article card,
if not it won't.
