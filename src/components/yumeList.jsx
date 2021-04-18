import React from "react";

const YumeList = ({ content }) => {
    return (
        <a href="#" className="yume_content">
            <dl className="row">
                <dt className="col-sm-3">{content.date}</dt>
                <dd className="col-sm-9">{content.label}</dd>
            </dl>
        </a>
    );
}

export default YumeList;