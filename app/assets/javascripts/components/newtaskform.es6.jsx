class NewTaskForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    var taskDescription = this.refs.taskDescription;
    var taskCompletedBox = this.refs.taskCompletedBox;
    if (taskCompletedBox.checked === true) {
      var taskCompleted = true
    } else {
      var taskCompleted = false
    };
    $.ajax({
      method: "POST",
      url: "/lists/1/tasks",
      data: {
        task: {
          description: taskDescription.value,
          completed: taskCompleted
        }
      }
    }).done(function(response) {
      this.props.onUpdate(response)
      taskDescription.value = ""
      taskCompletedBox.checked = false
    }.bind(this));
  }
  render() {
    return (
      <div id="new_task_form_container">
        <h2> Add A Task </h2>
        <form className="new_task_form form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label for="task[description]">Task Description:</label>
            <input ref="taskDescription" className="form-control" type="text" name="task[description]"/>
          </div>
          <div className="form-group">
            <label for="task[completed]">Completed?</label>
            <input ref="taskCompletedBox" type="checkbox" name="task[completed]"/>
          </div>
          <input className="btn btn-primary" type="submit" value="Add New Task"/>
        </form>
      </div>
    )
  }
}
