import React from "react";

export default function Alert(props) {
    const toTitleCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        // if props.alert is null then return null else return the div part
        props.alert && (
            <div
                className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                role="alert"
            >
                <strong>{toTitleCase(props.alert.type)}!</strong>{" "}
                {props.alert.message}
            </div>
        )
    );
}
