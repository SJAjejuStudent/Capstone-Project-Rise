const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const MODEL = 'gemini-1.5-flash';
const PROMPT = `write a short story about a lost phone`;
console.log(`** GenAI text: '${MODEL}' model & prompt '${PROMPT}'\n`);

async function main() {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({model: MODEL});
  const result = await model.generateContent(PROMPT);
  console.log(await result.response.text());
}

main();