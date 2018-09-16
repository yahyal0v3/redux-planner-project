class EventsController < ApplicationController
    def create
        binding.pry
        event = Event.create(event_params)
        #render json: event, status: 201
    end

    def index
        events = Event.all
        render json: events
    end

    # def show
    #     event = Event.find(params[:id])
    #     render json: event
    # end

    def destroy
        binding.pry
        event = Event.find(params[:id])
        event.tasks.destroy_all
        event.destroy
    end


    private

    def event_params
      params.require(:event).permit(:title, :deadline, :description)
    end

end