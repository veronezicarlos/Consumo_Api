import 'dotenv/config'; 
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Me pergunte algo.",
      },
      {
        role: "user",
        content: "Me explique a relatividade de einstein",
      }
    ]
  });

  console.log(completion.choices[0].message.content);
}

run();