import fs from 'fs';
const content = "I am learning Node.js modules!";
fs.writeFileSync('my_note.txt', content);