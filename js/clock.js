class Clock {
    constructor(options) {
      this._el = $.el('#clock');
      this._delimiter = options.delimiter;
      this._twentyFourHourClock = options.twentyFourHourClock;
      this._setTime = this._setTime.bind(this);
      this._options = options; // Store options in the instance
      this._el.addEventListener('click', options.toggleHelp);
      document.addEventListener('keydown', this._handleKeydown.bind(this));
      this._start();
    }
  
    _handleKeydown(event) {
      if (event.key === 'Enter') {
        this._options.toggleHelp(); // Use this._options
      }
    }

    _setTime() {
      const date = new Date();
      let hours = $.pad(date.getHours());
      let amPm = '';
  
      if (!this._twentyFourHourClock) {
        hours = date.getHours();
        if (hours > 12) hours -= 12;
        else if (hours === 0) hours = 12;
  
        amPm =
          `&nbsp;<span class="am-pm">` +
          `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;
      }
  
      const minutes = $.pad(date.getMinutes());
      this._el.innerHTML = `${hours}${this._delimiter}${minutes}${amPm}`;
      this._el.setAttribute('datetime', date.toTimeString());
    }
  
    _start() {
      this._setTime();
      setInterval(this._setTime, 1000);
    }
  }