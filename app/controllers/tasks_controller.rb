class TasksController < ApplicationController
    def create
        task = Task.create(task_params)
        render json: task, status: 201
    end

    def index
        event = Event.find(params[:event_id])
        render json: event.tasks
    end

    def update
        task = Task.find(params[:id])
        task.update(params[:completed])
        render json: task
    end


    private

    def task_params
        params.require(:task).permit(:deadline, :description, :completed, :event_id)
    end
end
