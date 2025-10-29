//Create directory, add a file in the directory, delete the directory using rimraf

import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";

const dirPath = path.join(".", "testDir");
const filePath = path.join(dirPath, "file.txt");

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("Directory created:", dirPath);
}

fs.writeFileSync(filePath, "Hello! This is a test file.");
console.log("File created:", filePath);

rimraf(dirPath)
  .then(() => console.log("Directory deleted:", dirPath))
  .catch((err) => console.error("Delete error:", err));
