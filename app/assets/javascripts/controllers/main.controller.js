function MainController(getDocList) {
  var ctrl = this;

  this.docList = getDocList;
}

angular
  .module('dailyDocumentary')
  .controller('Main Controller', MainController);