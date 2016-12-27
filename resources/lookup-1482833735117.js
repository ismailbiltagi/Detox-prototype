(function(window, undefined) {
  var dictionary = {
    "71189a97-0df1-498f-bda7-aca79820ea81": "Filters",
    "91892ce3-5f96-4556-b53c-63bb7510f184": "Register_password",
    "65f273b8-cf12-4efe-8fdf-9fdf78444403": "Register_email",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "8b703400-348a-4a05-8527-dbc33face78e": "Register_name",
    "5e59e1ca-e10a-430e-9b46-a327337d3be0": "Side menu",
    "59eb9e17-4852-4e93-9277-0a51f199cfc9": "Home_screen",
    "305d5689-0bdc-47ed-a751-e5765cb276fc": "Post",
    "2d1f48d7-2d29-472e-8e1a-5535b359c374": "Search",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "DETOX",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);