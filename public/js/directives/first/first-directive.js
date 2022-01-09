define(["text!directives/first/first-template.html",
"directives/first/first-controller"], function (template,controller) {
  return function () {
    return {
      restrict: "E",
      template: template,
      controller: controller,
    };
  };
});
