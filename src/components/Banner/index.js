import React from "react";
import "./style.css";

function Banner() {
    return (
        <section className="Banner_container">
            {/* banner background image */}
            <div className="banner">
                <h1>Headline/Banner</h1>
                <h2>Descriptive text</h2>
                <button>Solutions</button>
            </div>
        </section>
    )
}

export default Banner;
