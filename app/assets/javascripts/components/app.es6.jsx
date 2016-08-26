class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
    this.updateTasks = this.updateTasks.bind(this)
  }

  updateTasks(task) {
    debugger;
    this.setState({tasks: [this.state.tasks].concat(task)})
  }

  componentDidMount() {
    $.ajax({
      url: 'lists/1/tasks',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState ({
        tasks: response
      });
    });
  }

  render () {
    return (
      <div className="container">
        <h1> To Do </h1>
        <ul>
          {this.state.tasks.map(function(task, i) {
            return <Task data={task} key={i}/>
          })}
        </ul>
        <NewTaskForm onUpdate = {this.updateTasks}/>
      </div>
    );
  };
};
