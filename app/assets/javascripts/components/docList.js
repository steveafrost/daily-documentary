dailyDocumentary.component('docList', {

  template: '<div>Hello {{$ctrl.message}}</div>',

  controller: function(getDocList) {
    this.message = "Steve";
    this.docList = getDocList;
  }
});