import React from 'react';

class DropDown extends React.Component {

    constructor() {
      super();
      this.state = {
        arrayList: ['Matt', 'Maxx', 'Newton'],
        open: null
      };
    }
  
    openList = () => {
      return (
        <ul style={{ listStyle: 'none', border: '1px solid #000' }}>
          <li>User data </li>
          <li>Edit</li>
        </ul>
      );
    }
  
    openDropDown = (event) => {
      console.log(event.target.innerText);
      this.setState({
        open: event.target.innerText,
      });
    }
  
    render() {
      return (
        <div>
          {
            this.state.arrayList.map((name, index) => {
              return (<div key={`${name}-${index}`}>
              <span onClick={ this.openDropDown }>
                { name }
              </span>
                { name === this.state.open ? this.openList() : null }
            </div>);
            })
          }
        </div>
      );
    }
}; export default DropDown;