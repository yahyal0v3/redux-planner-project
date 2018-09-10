class EventsController < ApplicationController
    def create
        binding.pry
        event = Event.create(event_params)
        render json: event, status: 201
    end

    def index
        binding.pry
        events = Event.all
        render json: events
    end


    private

    def event_params
      params.require(:event).permit(:title, :deadline, :description)
    end

end