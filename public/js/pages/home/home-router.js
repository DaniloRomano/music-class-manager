define(["text!pages/home/view.html",
"pages/home/controller"], function (template,controller) {
  return {
    name: "home",
    url: "/",
    template: template,
    controller: controller
  };
});
