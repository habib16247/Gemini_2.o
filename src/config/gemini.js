import { GoogleGenerativeAI } from "@google/generative-ai";

// Load your API key from the environment
const apiKey = `AIzaSyBYSrSzFcZSVpu_oDV4hJ0CtA0G-CRkB3I`;
console.log("API key:", apiKey); // Log for debugging

// Initialize GoogleGenerativeAI with the API key
const genAI = new GoogleGenerativeAI(apiKey);

// Define the model to be used
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",  // Use the Gemini model
});

// Set up the generation configuration
const generationConfig = {
  temperature: 1,  // Controls randomness of the response
  topP: 0.95,      // Top-p sampling parameter
  topK: 40,        // Controls the number of possible next words
  maxOutputTokens: 8192,  // Maximum length of the response
  responseMimeType: "text/plain",  // Response format
};

// Function to generate a response based on a prompt
async function generateAPIResponse(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,  // Pass the configuration for the generation
      history: [],  // If you want a conversation history, you can pass it here
    });

    // Send the user input (prompt) and get the result
    const result = await chatSession.sendMessage(prompt);

    return result.response.text()
  } catch (error) {
    console.log("Error during API call:", error);  // Log error if there's an issue
  }
}

export default generateAPIResponse;

