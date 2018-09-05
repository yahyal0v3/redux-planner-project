Models

-User has many Events, has many To Dos through Events
-Event has many To Dos
-To Do belongs to an Event

    Event
Title
Deadline
Description

    ToDo
Deadline
Description
____________________

Components

    Containers (2)
Event Form
Todo Form
Events

    Stateless (5)
Home
About
EventCard
ToDoCard
Header 
Footer 
____________________

Paths (3)

    Home
About Component
Event Form Component
Events Component

    User's Events
Events Component

    Event Show
Todo Form Component
To Dos Component

