//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};
  Bob.prototype.hey = function(input) {
    function checkString() {
      for (var i = 0; i < input.length; i++) {
        if (i === input.length - 1 && input.charAt(i) === "?") {
          return "Sure.";
        } else if (i === input.length - 1 && input.charAt(i) === " ") {
          return "Fine. Be that way!";
        } else if (i === input.length - 1) {
          return "Whatever.";
        }
      }
      return "Fine. Be that way!";
    }

    if (input.match(/[a-z]/i)) {
      if (input === input.toUpperCase()) {
        return "Whoa, chill out!"
      }
    }
    return checkString();
};

module.exports = Bob;
