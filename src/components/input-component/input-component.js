import React, { Component} from 'react';

export class InputComponent extends Component {
    handleClick = (e) =>  {
        const url = document.getElementById('myURL'),
        width = document.getElementById('myWidth'),
        height = document.getElementById('myHeight'),
        iframe = document.createElement('iframe');
        iframe.src =  url.value  !== '' ? (url.value.indexOf('http://') > 0 ? url.value : 'http://' + url.value) : 'http://localhost:3001';
        iframe.height = height.value !== '' ? height.value : '600px';
        iframe.width = width.value !== '' ? width.value : '320px';
        document.getElementsByClassName('content')[0].appendChild(iframe);
        e.preventDefault();
    }
    handleScroll() {
        alert('yes');
        debugger;
    }
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img class="logo" alt="Logo" src="/logo.png" />
              <input type="text" placeholder="URL" id="myURL" />
              <input type="text" placeholder="Width" id="myWidth" />
              <input type="text" placeholder="Height" id="myHeight" />
              <a
                className="App-link"
                onClick={this.handleClick}
                href="/"
                rel="noopener noreferrer"
              >
                Open
              </a>
            </header>
            <div className="content" id="contentDiv" ref='wrapper' >

            </div>
          </div>
        )
    } 

    
    componentDidMount() {
    }
    
    componentWillUnmount() {
    }
}
