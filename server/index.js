import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { knowledgeBase } from "./knowledgeBase.js";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

const GROQ_API_KEY = process.env.GROQ_API_KEY;

// ✅ AI function
async function getAIAnswer(question, context) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `You are a friendly AI assistant representing Mandeep, a frontend developer.

               Rules:
             - Answer like a human, in a conversational tone
             - Speak in first person (use "I", "my")
             - Do NOT use bullet points, numbering, or lists
             - Keep answers natural and slightly informal
             - Keep responses concise (3–5 lines max)
             - Only use the provided context
             - If the answer is not in context, say "I don't have that information"

           Your goal is to sound like a real developer talking, not like documentation.`,
            },
            {
              role: "user",
              content: `Context: ${context} Question: ${question}`,
            },
          ],
          temperature: 0.5,
        }),
      },
    );

    const data = await response.json();

    console.log("GROQ RESPONSE:", data);

    return data?.choices?.[0]?.message?.content || "No response from AI";
  } catch (err) {
    console.error(err);
    return "Error fetching AI response";
  }
}

// ✅ API route
app.post("/api/ai-chat", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  const context = knowledgeBase.map((doc) => doc.content).join("\n");

  try {
    const answer = await getAIAnswer(question, context);
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
