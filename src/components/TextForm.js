import React, { useState, useRef } from "react";

export default function TextForm(props) {
  // State to track the text input
  const [text, setText] = useState("");
  // State to track the visibility of the preview
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  // Refs for textarea and copy message
  const textAreaRef = useRef(null);
  const copyMessageRef = useRef(null);

  // Handle text input change
  function handleOnChange(event) {
    setText(event.target.value);
  }

  // Convert text to uppercase
  function handleUppercase() {
    if (text !== "") {
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase!", "success");
    }
  }

  // Convert text to lowercase
  function handleLowercase() {
    if (text !== "") {
      setText(text.toLowerCase());
      props.showAlert("Converted to lowercase!", "success");
    }
  }

  // Clear the text
  function handleClear() {
    if (text !== "") {
      setText("");
      props.showAlert("Cleared the text!", "success");
    }
  }

  // Select all text in the textarea
  function handleSelect() {
    if (text !== "") {
      textAreaRef.current.select();
      props.showAlert("Selected the text!", "success");
    }
  }

  // Toggle the preview visibility
  function togglePreview() {
    setIsPreviewVisible(!isPreviewVisible);
  }

  // Copy text to clipboard and show a message
  async function handleCopy(event) {
    if (text !== "") {
      try {
        await navigator.clipboard.writeText(text);
        const copyMessage = copyMessageRef.current;
        const buttonRect = event.target.getBoundingClientRect();

        // Position the copy message near the button that was clicked
        copyMessage.style.position = "absolute";
        copyMessage.style.top = `${buttonRect.top + window.scrollY - 170}px`;
        copyMessage.style.left = `${buttonRect.left + window.scrollX - 104}px`;
        copyMessage.style.display = "flex";
        copyMessage.style.justifyContent = "center";
        copyMessage.style.alignItems = "center";

        // Hide the message after 1 second
        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 1000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
      props.showAlert("Copied to clipboard!", "success");
    }
  }

  function handleExtraSpaces() {
    if (text !== "") {
      setText(text.split(/\s+/).filter(Boolean).join(" "));
      props.showAlert("Removed Extra Spaces!", "success");
    }
  }

  return (
    <>
      <div
        className="container my-2"
        style={{
          position: "relative",
          color: props.theme !== 5 ? "white" : "black",
        }}
      >
        <h1 className="mt-3 mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter your text here...."
            ref={textAreaRef}
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor:
                props.theme !== 5
                  ? props.textAreaBackgrounds[props.theme]
                  : "white",
              color: props.theme !== 5 ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleUppercase}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleLowercase}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleClear}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleSelect}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          Select All
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleCopy}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleExtraSpaces}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          Remove Extra Spaces
        </button>
        <div
          id="talkbubble"
          ref={copyMessageRef}
          style={{
            display: "none",
          }}
        >
          Copied to Clipboard!
        </div>
      </div>
      <div
        className="container mt-2"
        style={{ color: props.theme !== 5 ? "white" : "black" }}
      >
        <h2 className="mx-1 my-2">Your Text Summary Is: </h2>
        <p className="mx-1">
          {text === "" ? 0 : text.split(/\s+/).filter(Boolean).length} Words,{" "}
          {text.length} Characters.
        </p>
        <p className="mx-1">
          {text === ""
            ? 0
            : (0.008 * text.split(" ").filter(Boolean).length).toFixed(3)}{" "}
          Minutes to read
        </p>
        <button
          disabled={text.length === 0}
          className={`btn btn-secondary my-2`}
          onClick={togglePreview}
          style={{
            backgroundColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
            borderColor:
              props.theme !== 5 ? `${props.btnBackgrounds[props.theme]}` : "",
          }}
        >
          {isPreviewVisible ? "Hide Preview" : "Show Preview"}
        </button>
        {isPreviewVisible && (
          <p className="mx-2" id="showPreview">
            {text}
          </p>
        )}
      </div>
    </>
  );
}
