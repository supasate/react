'use strict';

let React;
let ReactDOM;

describe('Playground', () => {
  beforeEach(() => {
    React = require('../react');
    ReactDOM = require('react-dom');
  });

  it('changes divs to spans', () => {
    function App() {
      return (
        <div>
          <React.DivToSpanMode>
            <div>
              <div>
                <div>
                  divs become spans!
                </div>
              </div>
            </div>
          </React.DivToSpanMode>
        </div>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    console.log(container.innerHTML);
    expect(container.innerHTML).toBe(
      '<div><span><span><span>divs become spans!</span></span></span></div>'
    );
  });
})
