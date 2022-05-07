import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    // changing the variable text using setText function, passing the default/initial value as 'Enter text here'
    const defaultText = "";
    const [text, setText] = useState(defaultText);

    // we can inject values directly but to use variables, we need states, see line 114 for a direct use.
    const [textLength, setTextLength] = useState(defaultText.length);
    const [wordCount, setWordCount] = useState(defaultText.split(" ").length);

    const toUppercase = () => {
        setText(text.toUpperCase());
    };

    const toLowerCase = () => {
        setText(text.toLowerCase());
    };

    // constantly monitors and updates the changes in the variable
    const textOnChange = (event) => {
        let textInput = event.target.value;

        setText(textInput);
        setTextLength(textInput.length);
        setWordCount(textInput.split(/\s+/).length);
    };

    const clearAll = () => {
        setText("");
        setTextLength(0);
        setWordCount(0);
    };

    const removeSpaces = () => {
        setText(text.replace(/\s/g, ""));
        setTextLength(text.length);
        setWordCount(1);
        props.showAlert("success", "All spaces removed");
    };

    const copyText = () => {
        // Refer to this url for copy. The navigator.clipboard.write function is a promise so then is used with that
        // https://stackoverflow.com/questions/57278923/chrome-76-copy-content-to-clipboard-using-navigator

        const { ClipboardItem } = window;
        let blob = new Blob([text], { type: "text/plain" });
        var item = new ClipboardItem({ "text/plain": blob });
        navigator.clipboard.write([item]).then(
            function () {
                console.log("Copied to clipboard successfully!");
            },
            function (error) {
                console.error("unable to write to clipboard. Error:");
                console.log(error);
            }
        );
        props.showAlert("success", "The text has been copied to the clipboard");
    };

    const buttonAreaStyle = {
        display: "flex",
        justifyContent: "flex-start",
    };

    const buttonStyle = {
        marginRight: "0.5rem",
    };

    return (
        <div
            className="container mt-3"
            style={{
                color: props.mode === "light" ? "#292929" : "white",
            }}
        >
            <div>
                <h1>{props.heading}</h1>
                <label htmlFor="textBox" className="form-label">
                    Your text:
                </label>
                <textarea
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "white" : "#292929",
                        color: props.mode === "light" ? "black" : "white",
                    }}
                    className="form-control mb-3"
                    id="textBox"
                    value={text}
                    onChange={textOnChange}
                    rows="8"
                ></textarea>
                <div style={buttonAreaStyle}>
                    <div style={buttonStyle}>
                        <button
                            onClick={toUppercase}
                            className="btn btn-sm btn-primary"
                        >
                            Convert to Uppercase
                        </button>
                    </div>
                    <div style={buttonStyle}>
                        <button
                            onClick={toLowerCase}
                            className="btn btn-sm btn-primary"
                        >
                            Convert to Lowercase
                        </button>
                    </div>
                    <div style={buttonStyle}>
                        <button
                            onClick={clearAll}
                            className="btn btn-sm btn-primary"
                        >
                            Clear all
                        </button>
                    </div>
                    <div style={buttonStyle}>
                        <button
                            onClick={removeSpaces}
                            className="btn btn-sm btn-primary"
                        >
                            Remove all spaces
                        </button>
                    </div>
                    <div style={buttonStyle}>
                        <button
                            onClick={copyText}
                            className="btn btn-sm btn-primary"
                        >
                            Copy to Clipboard
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <h1>Text summary</h1>
                <p>
                    {wordCount} words and {textLength} characters.
                </p>
                {/* The value is used below directly */}
                <p>Minutes read: {(0.008 * wordCount).toFixed(2)}</p>
            </div>
            <div className="my-3">
                <h1>Preview</h1>

                {/* using if else */}
                <p>{text.length === 0 ? "Enter something to preview" : text}</p>
            </div>
        </div>
    );
}

TextForm.prototypes = {
    heading: PropTypes.string,
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

TextForm.defaultProps = {
    heading: "Enter the text",
};
