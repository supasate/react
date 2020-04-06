'use strict';

let React;
let ReactDOM;

describe('Play with modes', () => {
  beforeEach(() => {
    React = require('../react');
    ReactDOM = require('react-dom');
  });

  it('changes divs to spans and goodbye divs', () => {
    function App() {
      return (
        <div>
          <React.DivToSpanMode>
            <div>
              <div>
                divs become spans!
              </div>
            </div>
          </React.DivToSpanMode>
          <React.SmooshDivMode>
            <div>
              <div>
                <button>goodbye divs!</button>
              </div>
            </div>
          </React.SmooshDivMode>
        </div>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    console.log(container.innerHTML);
    expect(container.innerHTML).toBe(
      '<div><span><span>divs become spans!</span></span><button>goodbye divs!</button></div>'
    );
  });
});
