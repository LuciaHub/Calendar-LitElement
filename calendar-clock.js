class XCalendarClock extends LitElement {
  render(){
      return html`
      <p class="x-clock" id="text">${this.timeString}</p>
    `;
  }
}

customElements.define('x-calendar-clock', XCalendarClock);
