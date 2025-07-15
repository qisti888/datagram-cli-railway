const { exec } = require('child_process');

const API_KEY = process.env.API_KEY;

console.log("Running datagram-cli...");

exec(`echo "Apa itu chatbot?" | ./datagram-cli run --key ${API_KEY}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
    return;
  }
  console.log(`✅ Output:\n${stdout}`);
});