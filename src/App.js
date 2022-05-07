import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
    const [mode, setMode] = useState("light"); // dark or light
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({
            type: type,
            message: message,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        console.log("Toggle dark mode clicked");
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#292929";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    return (
        <div>
            <Router>
                <Navbar
                    title="Textutils"
                    aboutLinkText="About"
                    mode={mode}
                    toggleMode={toggleMode}
                />
                <Alert alert={alert}></Alert>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TextForm
                                heading="Enter the text to analyze"
                                mode={mode}
                                showAlert={showAlert}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/about"
                        element={<About mode={mode} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
