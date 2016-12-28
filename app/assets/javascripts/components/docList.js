var docList = {

  template: '<div>Hello {{$ctrl.message}}</div>',

  controller: function(getDocList) {
    this.message = "Steve";
    this.docList = getDocList;
  }
};

angular
  .module('dailyDocumentary')
  .component('docList', docList);