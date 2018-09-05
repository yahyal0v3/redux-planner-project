Models

-User has many Events, has many To Dos through Events
-Event has many To Dos
-Task belongs to an Event

    Event
Title
Deadline
Description

    Task
Deadline
Description
____________________

Components

    Containers (2)
Event Form
Task Form
Events

    Stateless (5)
Home
About
EventCard
TaskCard
Header 
Footer 
____________________

Paths (3)

    Home
About Component
Event Form Component (Display inputs one at a time?)
Events Component

    User's Events
Events Component

        Event Show
    Task Form Component
    To Dos Component

