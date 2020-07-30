import React, { Component } from "react";

class Parallax extends Component {
    
    componentDidMount() {

        const M = window.M;

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }
    
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src="images/parallax1.jpg"/></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Parallax</h2>
                        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src="images/parallax2.jpg"/></div>
                </div>
            </div>
        )
    }
}
export default Parallax;