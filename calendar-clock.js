import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';

class XCalendarClock extends LitElement {
  static get properties() {
    return {
        date: { type: Object }
    };
  }
  constructor(){
    super();
    this.date = new Date();
  }
  render(){
      return html`
      <div>
      <p>Calendar</p>
      </div>
    `;
  }

}

customElements.define('x-calendar-clock', XCalendarClock);
