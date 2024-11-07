import generateAPIResponse from "../config/gemini";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [sidebarShow, setSidebarShow] = useState(true)
  const [extended, setExtended] = useState(false);
  const timeouts = []; // Store timeouts to clear them if needed

  const delayPara = (index, nextWord) => {
    const timeoutID = setTimeout(() => {
      setResultData((prev) => prev + nextWord + " ");
    }, 75 * index);

    timeouts.push(timeoutID);
  };

  const timeoutsClear = () => {
    while (timeouts.length) {
      clearTimeout(timeouts.pop());
    }
  };

  const onSent = async (prompt) => {
    timeoutsClear(); // Clear previous timeouts before starting new ones
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    try {
      if (prompt !== undefined) {
        response = await generateAPIResponse(prompt)
        setRecentPrompt(prompt)
      } else {
        setPrevPrompt(prev => [...prev, input])
        setRecentPrompt(input)
        response = await generateAPIResponse(input)
      }
      // const response = await generateAPIResponse(input);
      let responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += `<b>${responseArray[i]}</b>`;
        }
      }

      let newResponse2 = newResponse.split("*").join("<br/><br/>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord);
      }
    } catch (error) {
      console.error("Error generating API response: ", error);
    }

    setLoading(false);
    setInput("");
  };

  useEffect(() => {
    return () => timeoutsClear(); // Clear timeouts on unmount
  }, []);

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    onSent,
    showResult,
    setShowResult,
    loading,
    resultData,
    input,
    setInput,
    sidebarShow,
    setSidebarShow,
    setExtended,
    extended
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
