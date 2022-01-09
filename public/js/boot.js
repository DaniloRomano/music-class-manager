(function (undefined) {
  "use strict";

  require.config({
    baseUrl: "./js",
    paths: {
      angular: "../vendor/angular/angular",
      "angular-route": "../vendor/angular-route/angular-route",
      text: "../vendor/text/text",
      "angular-ui-router": "../vendor/angular-ui-router/release/angular-ui-router",
    },
    shim: {
      angular: {
        exports: "angular"
      },
      "angular-route": {
        deps: ["angular"]
      },
      "angular-ui-router": {
        deps: ["angular"]
      },
      text: {
        exports: "text!"
      },
    },
  });

  require(["main"], function () {});
})();
