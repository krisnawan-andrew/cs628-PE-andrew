import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Andrew Krisnawan</h1>
                <p>123 Main Street, Anytown USA, 12345 | (123) 456-7890 | krisnawanandrew@cityuniversity.edu</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                <h3>Bachelors in Biochemistry</h3>
                <p>University of Washington, Seattle USA | June 2017</p>
                </div>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <p>Programming languages: Java, Python, JavaScript, C#</p>
                    <p>Frameworks and libraries: React, Spring Boot, .NET</p>
                    <p>Database systems: MySQL, MongoDB</p>
                    <p>Operating systems: Windows, linux</p>
                    <p>Version control: Git</p>
                </div>
            </section>

            <section className="section">
                <h2>Work Experience</h2>
                <div className="experience">
                    <h3>Research Associate</h3>
                    <p>XYZ Company, Everett USA | Nov 2021 - Current</p>
                    <p>Perform bioanalytical assays for biomarkers and biodistribution</p>
                    <p>Process and analyze data into tables</p>
                    <p>Other lab stuff</p>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Traffic Signs Image Recognition</h3>
                    <p>Built an app with a GUi that takes and image and predicts its traffic sign for DS620</p>
                </div>
            </section>
        </div>
    );
};

export default Resume;