

class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list: [],
      deletedItems: [],
    }
  }

  //This is the add button function
  addItem(){

    var userInput = this.state.word;

    if (userInput.length <= 1 ) {
        alert("Task must be more than 1 character")
        this.setState({word: ""});

    } else if (userInput.length >= 6) {
        alert("Task must be less than 6 characters")
        this.setState({word: ""});

    } else {

        var currentList = this.state.list;
        var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        currentList.push({

            word: userInput,
            date: currentDate

        });

        this.setState({list: currentList});
        this.setState({word: ""});
    }
    console.log(this.state.list)
  }

  deleteItem(index){

    var list = this.state.list;
    list.splice(index,1);
    this.setState({list: list});
    console.log(list);

  }

  changeHandler(event){

    console.log("change", event.target.value);
    this.setState({word:event.target.value});
  }

  render() {

    let list = this.state.list.map((item,index) => {

        return(
                <div>
                    <p>
                        {item.word}
                        <p>Poster on: {item.date} </p>
                        <button onClick={()=>{this.deleteItem(index)}} >Delete Item</button>
                    </p>
                </div>
    )})


      console.log("rendering");
      return (
        <div className="list">

            <input onChange={(event)=>{this.changeHandler(event);}} value={this.state.word}/>
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