import React from 'react';
import axios from 'axios';



class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longurl: "",
      shorturl: "",
      description: "",
      internal: false
    };
  }
  //IMPLEMENT AXIOS HERE
  handleSubmit = e => {
    console.log(this.state)
    axios.post("/add-url", this.state)
      .then(response => {
        alert("Added!");
      })
      .catch(error => {
        alert(error);
      })
    e.preventDefault();
  };

  handleLongURLChange = event => {
    this.setState({ longurl: event.target.value });
  };
  handleKeywordChange = event => {
    this.setState({ shorturl: event.target.value });
  };
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  handleInternalChange = event => {
    this.setState({ internal: event.target.value });
  };

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <div label="" className="inputbox">
          <h3>URL to Shorten</h3>
          <input 
          onChange={this.handleLongURLChange}
          value={this.state.longurl} 
          size="large" 
          placeholder="https://somereallylongurl.com/path/to/long/thing" 
          />
        </div>
        <div label="" className="inputbox">
          <h3>Shorter Version of URL</h3>
          <input
          onChange={this.handleKeywordChange}          
          value={this.state.shorturl}  
          size="large" 
          placeholder="short" 
          />
        </div>
        <div label="" className="inputbox">
          <h3>Description of the URL</h3>
          <input
          onChange={this.handleDescriptionChange}                  
          value={this.state.description}   
          size="large" 
          placeholder="This url is used to link to shorturl" 
          type="email" 
          />
        </div>
        <div className="inputbox">
          <h3>Internal?</h3>
          <input
          onChange={this.handleInternalChange}                  
          value={this.state.internal}   
          size="large"
          type="checkbox" 
          />
        </div>
        
        <a type="primary" type="submit" onClick={this.handleSubmit} className="login-form-button">
          Create!
        </a>
      </form>
    );
  }
}

export default FormPage;
