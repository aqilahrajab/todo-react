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

  deleteItem(index){

    var list = this.state.list;
    list.splice(index,1);
    this.setState({list: list});
    console.log(event.target.value);
    console.log(list);

  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);

  }

  render() {

    let list = this.state.list.map((item,index) => {

        return(
                <div>
                    <p>
                        {item}
                        <button onClick={()=>{this.deleteItem(index)}} >Delete Item</button>
                    </p>
                </div>
    )})


      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word}/>
          <button onClick={()=>{this.addItem()}}>Add Item</button>

         <p> Things to do: {list} </p>

        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);