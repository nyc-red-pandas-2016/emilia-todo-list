class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
    this.updateTasks = this.updateTasks.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  updateTasks(task) {
    this.setState({tasks: this.state.tasks.concat(task)})
  }

  deleteTask(task) {
    var index = this.state.tasks.indexOf(task)
    this.setState({tasks: this.state.tasks.splice(index, 1)})
  }

  componentDidMount() {
    $.ajax({
      url: 'lists/1/tasks',
      method: 'GET'
    }).done((response) => {
      this.setState ({
        tasks: response
      });
    });
  }

  render () {
    return (
      <div className="container">
        <div className="page-header">
          <h1> To Do </h1>
        </div>
        <ul className="list-group">
          {this.state.tasks.map(function(task, i) {
            return <Task onUpdate={this.deleteTask} data={task} key={i}/>
          })}
        </ul>
        <NewTaskForm onUpdate = {this.updateTasks}/>
      </div>
    );
  };
};
