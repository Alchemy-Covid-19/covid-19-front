import React, { Component } from 'react';
import './About.css';
import './App.css';

export default class About extends Component {
    render() {
        return (
        <div className="about-container">
            <h1>ABOUT OUR TEAM</h1>
            <div className="team-members-container">
                <div className="team-member">
                    <h2>Chelsea</h2>
                    <img src='Chelsea.jpg' alt="Chelsea" />
                    <div>
                        <a href="https://www.linkedin.com/in/chelseanspangler/"><img src="linkedin_turquoise.png" className="social-icon" alt="linkedin" /></a>
                        <a href="https://github.com/CNSpangler"><img src="github_turquoise.png" className="social-icon" alt="github" /></a>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Hannah</h2>
                    <img src="Hannah.jpg" alt="Hannah" />
                    <div>
                        <a href="https://www.linkedin.com/in/hannah-m-riley/"><img src="linkedin_turquoise.png" className="social-icon" alt="linkedin" /></a>
                        <a href="https://github.com/hannahriley33"><img src="github_turquoise.png" className="social-icon" alt="github" /></a>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Rosalie</h2>
                    <img src='Rosalie.jpg' alt="Rosalie" />
                    <div>
                        <a href="https://www.linkedin.com/in/rosalielee/"><img src="linkedin_turquoise.png" className="social-icon" alt="linkedin" /></a>
                        <a href="https://github.com/rosalie337"><img src="github_turquoise.png" className="social-icon" alt="github" /></a>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Dannie</h2>
                    <img src='Dannie.jpg' alt="Dannie" />
                    <div>
                        <a href="https://www.linkedin.com/in/dannieschumaker/"><img src="linkedin_turquoise.png" className="social-icon" alt="linkedin" /></a>
                        <a href="https://github.com/DannieSchu"><img src="github_turquoise.png" className="social-icon" alt="github" /></a>
                    </div>
                </div>
                <div className="team-member">
                    <h2>Jenna</h2>
                    <img src="Jenna.jpg" alt="Jenna" />
                    <div>
                        <a href="https://www.linkedin.com/in/jennagoldman/"><img src="linkedin_turquoise.png" className="social-icon" alt="linkedin" /></a>
                        <a href="https://github.com/jennagoldman"><img src="github_turquoise.png" className="social-icon" alt="github" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
};