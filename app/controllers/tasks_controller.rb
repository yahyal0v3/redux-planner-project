class TasksController < ApplicationController
    def create
        task = Task.create(task_params)
        task.completed = false
        task.save
        render json: task, status: 201
    end

    def update
        task = Task.find(params[:id])
        task.update(completed: params[:completed])
        render json: task
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        render json: task
    end


    private

    def task_params
        params.require(:task).permit(:deadline, :completed, :description, :event_id)
    end
end
