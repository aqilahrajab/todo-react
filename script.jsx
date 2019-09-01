
//Itemlist refers to the component where the list of items gets rendered out
//
class ItemList extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list: [],
      deletedItems: []
    }

    return (
        <div className="list">

            <input onChange={(event)=>{this.changeHandler(event);}} value={this.state.word}/>
            <button onClick={()=>{this.addItem()}}>Add Item</button>

         <p> Things to do: {list} </p>

        </div>
      );
  }
}

//Form refers to the component where:
//Input field is
//submit button
//Validation error message
class Form extends React.Component {

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

    changeHandler(event){

    console.log("change", event.target.value);
    this.setState({word:event.target.value});
  }

}

//TodoItem refers to each individual item, which has:
//Individual Item
//Delete Button
//Date
class TodoItem extends React.Component {

    render() {

    let list = this.state.list.map((item,index) => {

        return(
                <div>
                    <p>
                        {item.word}
                        <p>Posted on: {item.date} </p>
                        <button onClick={()=>{this.deleteItem(index)}} >Delete Item</button>
                    </p>
                </div>
    )})

     deleteItem(index){

        var list = this.state.list;
        list.splice(index,1);
        this.setState({list: list});
        console.log(list);

      }
    }

}

ReactDOM.render(
    <ItemList/>,
    document.getElementById('root')
);