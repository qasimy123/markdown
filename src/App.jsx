import React, {Component} from "react";
import marked from "marked";
import "./index.css";


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }
    
     getMarkdownText() {
    var rawMarkup = marked(this.state.text, {sanitize: true});
    return { __html: rawMarkup };
  }
    
    render(){
        return(
            
            <div>
            
            
            <div className="App-title">Markdown Previewer</div>
            
            <form>
    <div class="form-group col-sm-4">
      <textarea className="form-control" rows="30" onChange={event=>this.setState({text:event.target.value})}
            />
    </div>
  </form>
  
  
    <div class="form-group col-sm-6">
      <div className="Marked-Text" dangerouslySetInnerHTML={this.getMarkdownText()} />
    </div>
 
            
             
            
            
            
            
            
           
            
            
            
            </div>
            
            )
        
    }
    
    
}

export default App;