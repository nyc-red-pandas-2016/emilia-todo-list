class TasksController < ApplicationController

  def show
    list = List.find(params[:id])
    tasks = list.tasks.to_json
    render json: list.tasks
  end

  def create
    list = List.find(params[:id])
    task = list.tasks.create(task_params)

    render json: task.to_json
  end

  private
  def task_params
    params.require(:task).permit(:description)
  end

end
