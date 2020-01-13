import React from "react";
import { Link } from "react-router-dom";
// import AppContext from "../AppContext/AppContext";
import './LandingPage.css'

export default class LandingPage extends React.Component {
//   static contextType = AppContext;

  render() {
    return (
      <div className="landing-page">
        <header role="banner" className="banner">
          <h1>Quilt Calc</h1>
          <h2 className="tagline">
            Let us do the math so you can get rid of your stash
          </h2>
        </header>

        <section className="text-block">
          <header className="block-header">
            <h3>Select from premade patterns</h3>
            <p>Select from some classic quilt patterns</p>
            </header>
        <p>[<em>placeholder for screenshot of pattern selection interface</em>]</p>


        </section>

        <section className="text-block">
          <header className="block-header">
            <h3>Customize the pattern to fit your vision</h3>
        <p>Resize, add borders, and change fabric arangments</p>
        </header>
        <p>[<em>placeholder for screenshot of pattern editing interface</em>]</p>

        </section>


        <section className="text-block">
          <header className="block-header">
            <h3>Find out what yardages you need</h3>
        <p>Get real time calculations of the amount of fabric you will need for your project</p>

        </header>
        <p>[<em>placeholder for yardage results section</em>]</p>

        </section>



        <Link to="/home">
          <button>
           Let's Get Quilting!
          </button>
        </Link>
      </div>
    );
  }
}
