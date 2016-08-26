class Task extends React.Component {
  render () {
    data = this.props.data
    return (
      <li>
        <p> {data.description} </p>
        {/*<p> Completed? {data.completed.toString()} </p>*/}
      </li>
    )
  }
}
