# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app => Used Angular
- [x] Must contain some sort of nested views => Profile has nested views of Timeline & Watchlist
- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due => Timeline & Watchlist have a search feature which filters the list based on search input
- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart => Both Timeline and Watchlist resources can be removed & views will dynamically update to reflect changes.
- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product => Clicking on a documentary leads to a show page where doc details are displayed.
- [x] Data should be validated in Angular before submission => The docList is parsed for readability and to separate out empty titles before being displayed on views.
- [x] Must talk to the Rails backend using $http and Services. **you may not use $resource** => Used $http.post and $http.get within services to talk to Rails backend to get Timeline & Watchlist data
- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code => Included specified information in README.md

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
