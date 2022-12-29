import React from 'react';
import {useSelector} from "react-redux";

function AboutTitle(props) {
    const aboutTitle = useSelector(state => state.abouTitle)
    return (
        <div>
            <h1>{aboutTitle}</h1>
        </div>
    );
}

export default AboutTitle;