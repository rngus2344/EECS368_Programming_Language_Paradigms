// Chalk - EECS 368's library for teaching and understanding JavaScript
// Version 20200828

let chalk = {
    print: function(str) {
	if (typeof(str) != "string") {
	    str = "" + str;
	}
	document.querySelector("body").insertAdjacentText("beforeend",str);
    },
    newline: function() {
	document.querySelector("body").insertAdjacentHTML("beforeend","<BR/>");
    },
    hr: function() {
	document.querySelector("body").insertAdjacentHTML("beforeend","<HR/>");
    },
    println: function(str) {
            chalk.print(str);
            chalk.newline();
    }
}

// Do this when document is ready
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("body").style.border = "solid black 1px";
	document.querySelector("body").style.background = "#eeeeee";
        // The user provides the main function
        main();
});

// // Chalk calls main when it has completed initialization
// main = function(){
//   chalk.print("Hello, "); // print without space
//   chalk.println("World!");
//   chalk.newline();
//   chalk.println("Hello, World!");
//   chalk.hr();
//   chalk.println("That's all folks");
// };
