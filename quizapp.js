// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "C++"],
//   [3, "Java"],
//   [4, "JavaScript"],
//   [5, "AEM"],
//   ["correct", 5],
//   [true, "Correct!"],
//   [false, "Try again"],
// ]);

// // Display the question
// console.log(question.get("question"));

// // Display the possible answers
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // Prompt user for their answer
// const answer = Number(prompt("Your answer"));

// // Check if the answer is correct and display the appropriate response
// console.log(question.get(answer === question.get("correct")));

// function sendPathToServlet(path) {
//   $.ajax({
//     type: "POST",
//     url: "/bin/deleteContentNode",
//     data: {
//       path: path,
//     },
//     success: function (response) {
//       console.log("Content node deleted successfully.");
//     },
//     error: function (xhr, status, error) {
//       console.error("Failed to delete content node: " + error);
//     },
//   });
// }
