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

  def update
    list = List.find(params[:list_id])
    task = Task.find(params[:id])
    task.update(task_params)
    render json: task.to_json
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
  end

  private
  def task_params
    params.require(:task).permit(:description, :completed)
  end

end
