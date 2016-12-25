dailyDocumentary.component('docList', {

  template: '<div>Hello {{$ctrl.message}}</div>',

  controller: function() {
    this.message = "Steve";
  }
});