import React from "react";

const InputSearch = ({ onSearch }) => {
    const [val, setInput] = React.useState("");

    const handleChange = e => setInput(e.target.value);
    const handleEnter = e => {
        if (e.keyCode === 13) {
            onSearch(val);
            setInput("");
        }
    }

    return (
        <div className="input_search search">
            <input
                type="text"
                className="input"
                placeholder="日付かタイトル　⇨　Enter"
                value={val}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
        </div>
    );
}

export default InputSearch;