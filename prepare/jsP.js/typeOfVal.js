const input: string = require("fs").readFileSync(0, "utf-8").trim();

// Проверка на число
if (!isNaN(Number(input))) {
  console.log("number");
}
// Проверка на boolean
else if (input === "true" || input === "false") {
  console.log("boolean");
}
// Иначе строка
else {
  console.log("string");
}