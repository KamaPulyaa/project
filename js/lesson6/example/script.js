var main = prompt("Enter your email or phone number").trim();

if (main.startsWith("+998")) {
  var code = main.substring(0, 4); 
  var operator = main.substring(4, 6); 
  var part1 = main.substring(6, 9); 
  var part2 = main.substring(9, 11); 
  var part3 = main.substring(11, 13); 

  console.log(`${code} (${operator}) ${part1} ${part2} ${part3}`);
} else {
     console.log(main + "@gmail.com");   
}
