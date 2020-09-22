import React from 'react';
import './App.css';

class App extends React.Component { // 5, 10, 15, 30, 60, 3h, 8h, 15h, 24h, 3d, 7d, 30d,
  constructor() {
    super()
    this.state = {
      _5m: '',
      _10m: '',
      _15m: '',
      _30m: '',
      _60m: '',
      _3h: '',
      _8h: '',
      _15h: '',
      _24h: '',
      _3d: '',
      _7d: '',
      _30d: '',
    }
  }

  getTotal = () => {
    let {_5m, _10m, _15m, _30m, _60m, _3h, _8h, _15h, _24h, _3d, _7d, _30d} = this.state;
    _5m = parseInt(_5m) * 5;
    _10m = parseInt(_10m) * 10;
    _15m = parseInt(_15m) * 15;
    _30m = parseInt(_30m) * 30;
    _60m = parseInt(_60m) * 60;
    _3h = parseInt(_3h) * 180;
    _8h = parseInt(_8h) * 480;
    _15h = parseInt(_15h) * 900;
    _24h = parseInt(_24h) * 1440;
    _3d = parseInt(_3d) * 4320;
    _7d = parseInt(_7d) * 10080;
    _30d = parseInt(_30d) * 43200;
    const amounts = [_5m, _10m, _15m, _30m, _60m, _3h, _8h, _15h, _24h, _3d, _7d, _30d];
    let total = 0;
    amounts.forEach((amount) => {
      if (isNaN(amount)) amount = 0;
      total += amount;
    })
    if (total <= 60) return [total, ' minutos'];
    else if (total > 60 && total <= 1440) return [(total/60).toFixed(1), ' horas'];
    else if (total > 1440 && total <= 43800) return [(total/1440).toFixed(1), ' dias'];
    else if (total > 43800 && total <= 525600) return [(total/43800).toFixed(1), ' meses'];
    else return [(total/525600).toFixed(1), ' anos'];

  }

  changeValue = (event) => {
    if (event.target.value.length >= 8) return
    this.setState({ [event.target.id]: event.target.value})
  }

  render() {
    return (
      <section id="calculator">  
        <section id="speed-up">
          <div className="speedup-row"> <div className="time-box">5m</div> <input type="number" className="quantity-input" value={this.state._5m} id="_5m" onChange={this.changeValue} placeholder="0" /></div>
          <div className="speedup-row"> <div className="time-box">10m</div> <input type="number" className="quantity-input" value={this.state._10m} id="_10m" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">15m</div> <input type="number" className="quantity-input" value={this.state._15m} id="_15m" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">30m</div> <input type="number" className="quantity-input" value={this.state._30m} id="_30m" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">60m</div> <input type="number" className="quantity-input" value={this.state._60m} id="_60m" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">3h</div> <input type="number" className="quantity-input" value={this.state._3h} id="_3h" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">8h</div> <input type="number" className="quantity-input" value={this.state._8h} id="_8h" onChange={this.changeValue} placeholder="0 "/> </div>
          <div className="speedup-row"> <div className="time-box">15h</div> <input type="number" className="quantity-input" value={this.state._15h} id="_15h" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">24h</div> <input type="number" className="quantity-input" value={this.state._24h} id="_24h" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">3d</div> <input type="number" className="quantity-input" value={this.state._3d} id="_3d" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">7d</div> <input type="number" className="quantity-input" value={this.state._7d} id="_7d" onChange={this.changeValue} placeholder="0" /> </div>
          <div className="speedup-row"> <div className="time-box">30d</div> <input type="number" className="quantity-input" value={this.state._30d} id="_30d" onChange={this.changeValue} placeholder="0" /> </div>
        </section>
        <section id="results">
          <h2>Total</h2> <span>{this.getTotal()}</span>
        </section>
      </section>
    )
  }
}

export default App;
