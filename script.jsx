class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : [],
      deletedItems : []
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

  deleteItem(event){

    var list = this.state.list;
    list.splice(event.target.value,1);
    this.setState({list: list});
    console.log(event.target.value);
    console.log(list);

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
          <button onClick={()=>{this.addItem()}}>Add Item</button>
          <p>
            List of things to do:
            {this.state.list.map((item, index) => (
                <p>
                    Things to do: {item}
                    <button onClick={()=>{this.deleteItem(event)}}>Delete Item</button>
                </p>
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