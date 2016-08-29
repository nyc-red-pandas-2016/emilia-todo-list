class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: null
    };
  }

  componentDidMount() {
    this.setState ({
      completed: this.props.data.completed
    })
  }

  toggleCompleteStatus(event){
    event.preventDefault();
    if (this.state.completed) {
      var newCompletionStatus = false
    } else {
      var newCompletionStatus = true
    }
    $.ajax({
    method: "PUT",
    url: this.refs.completionCheckbox.href,
    data: {
      task: {
        // description: data.description,
        completed: newCompletionStatus
      }
    }
  }).done((response) => {
      this.setState ({
        completed: response.completed
      })
    })
  }

  deleteTask(event) {
    event.preventDefault();
    $.ajax({
      method: "delete",
      url: this.refs.deleteButton.href
    }).done(function(response) {
      debugger
      this.props.onUpdate(response)
    }.bind(this));
  }

  render () {
    var data = this.props.data
    var link = "/lists/1/tasks/"
    return (
      <li className="list-group-item">
        <p>
          {data.description} <a ref="completionCheckbox" onClick={this.toggleCompleteStatus.bind(this)} href={link.concat(data.id)}>
          {this.state.completed ? <i className="fa fa-check-square-o" aria-hidden="true"></i>
          : <i className="fa fa-square-o" aria-hidden="true"></i> }</a>
          <a ref="deleteButton" onClick={this.deleteTask.bind(this)} href={link.concat(data.id)}><i className="fa fa-times" aria-hidden="true"></i></a>
        </p>
      </li>
    )
  }
}
