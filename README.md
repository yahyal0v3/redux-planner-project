# REACT-PLANNER-PROJECT
Welcome to react-planner-project! This web application is built with react-redux and a rails API. It is an event/ party planning app that allows the user to create events, and then create tasks for the events. Tasks have deadlines that must be completed before the event. 

# Usage
To use this app, clone it, install dependencies, create the database, and then run the server. For more detailed instruction, follow the steps below.  

* To create events, use the form on the homepage. Type the event's deadline in the first form field and then click enter to move on to the next field.
* To create tasks for an event, go to the events page and click the name of the event. This should take you to the event's show page where there is a task creation form.
* This application must be used in a browser that supports datetime-local input, like Google Chrome.

# Install Dependencies
* cd react-planner-project
* bundle install
* cd client
* npm install
* cd ..

# Create Database
rake db:migrate

# Run Server
rake start


# Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/yahyal0v3/react-planner-project. This project is intended to be a safe welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

# License
The app is available as open source under the terms of the MIT License.

