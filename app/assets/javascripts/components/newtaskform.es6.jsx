class NewTaskForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    var taskDescription = this.refs.taskDescription;
    var taskCompleted = this.refs.taskCompletedBox;
    $.ajax({
      method: "POST",
      url: "/lists/1/tasks",
      data: {
        task: {
          description: taskDescription.value,
          // completed: taskCompleted.value
        }
      }
    }).done(function(response) {
      this.props.onUpdate(response)
      taskDescription.value = ""
      taskCompleted.value = ""
    }.bind(this));
  }
  render() {
    return (
      <div id="new_task_form_container">
        <h2> Add A Task </h2>
        <form className="new_task_form" onSubmit={this.handleSubmit.bind(this)}>
          <label for="task[description]">Task Description:</label>
          <input ref="taskDescription" type="text" name="task[description]"/>
          <label for="task[completed]">Completed?</label>
          <input ref="taskCompletedBox" type="checkbox" name="task[completed]"/>
          <input type="submit" value="Add New Task"/>
        </form>
      </div>
    )
  }
}
