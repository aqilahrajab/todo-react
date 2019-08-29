class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  //This is the add button function
  addItem(){

    var userInput = this.state.word;
    var list = this.state.list;
    list.push(userInput);
    this.setState({list: list})
    console.log(this.state.list)

  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);

  }

  render() {
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word}/>
          <button onClick={()=>{this.addItem()}}>add item</button>
          <p>
            List of things to do:
            {this.state.list.map((item, index) => (
                <p> Things to do: {item} </p>
            ))}
          </p>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);