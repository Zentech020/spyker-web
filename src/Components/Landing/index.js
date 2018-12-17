import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import './styles.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }
  render() {
    return (
      <div>
        <div className="landing">
          <div className="left">
            <div className="logo">
              <p>
                <span>$</span>pyker
              </p>
            </div>
            <div className="left__content ">
              <h2>
                Mis nooit meer jouw favoriete producten die in de aanbieding
                zijn.
              </h2>
              <p>
                Spyker houdt elke dag jouw favoriete producten in de gaten. Als
                er een door jou geselecteerd product in de aanbieding is houden
                wij jou op de hoogte door middel van een SMS'je.{' '}
              </p>
              <div className="left__cta">
                <button className="try-btn" onClick={this.openForm}>
                  Kies je producten
                </button>
                <h5>
                  staat jouw favorieten product er niet bij meld het{' '}
                  <a
                    target="_blank"
                    href="https://airtable.com/shrYr7dzw7maswy0t"
                  >
                    hier
                  </a>{' '}
                  😊
                </h5>
              </div>
            </div>
          </div>
          <div className="right" />
        </div>
        <ReactTypeformEmbed
          popup={true}
          autoOpen={false}
          url={'https://zenobruinsma.typeform.com/to/GpLKSK'}
          hideHeaders={true}
          hideFooter={true}
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => (this.typeformEmbed = tf)}
        />
      </div>
    );
  }
}

export default Landing;
