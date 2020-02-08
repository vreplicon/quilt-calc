import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <header role="banner" className="banner landingBanner">
          <h1>Quilt Calc</h1>
          <h2 className="tagline">
            Let us do the math so you can get rid of your stash
          </h2>
        </header>

        <section className="text-block one">
          <header className="block-header">
            <h3>1. Select from premade patterns</h3>
            <p>Select from some classic quilt patterns</p>
          </header>
        </section>

        <section className="text-block two">
          <header className="block-header">
            <h3>2. Customize the pattern to fit your vision</h3>
            <p>Resize, add borders, and change number of blocks</p>
          </header>
        </section>

        <section className="text-block three">
          <header className="block-header">
            <h3>3. Find out what yardages you need</h3>
            <p>Get quick calculations for needed fabric</p>
          </header>
        </section>

        <section className="button-section">
          <h2>See it for yourself!</h2>
          <Link to="/pattern-select">
            <button>Let's Get Quilting!</button>
          </Link>
        </section>
      </div>
    );
  }
}
