(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name in names) {
    var item = names[name];

    var firstLetter = item.toLowerCase().charAt(0);

    if (firstLetter === "j") {
      byeSpeaker.speak(item);
    } else {
      helloSpeaker.speak(item);
    }
  }
})(window);
