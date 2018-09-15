# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

events = Event.create([
    {deadline: "2018-09-25T18:59", title: "Graduation", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {deadline: "2018-09-14T12:59", title: "Surprise Party", description: "Ut enim ad minim veniam, quis nostrud exercitation… laboris nisi ut aliquip ex ea commodo consequat."},
    {deadline: "2018-09-11T15:00", title: "CockTail Party", description: "Duis aute irure dolor in reprehenderit in voluptat…elit esse cillum dolore eu fugiat nulla pariatur."}
])

Task.create([
    {event: events.first, completed: true, deadline: "2018-09-11T12:59", description: "Ut enim ad minim veniam, quis nostrud exercitation."},
    {event: events.first, completed: false, deadline: "2018-09-10T12:59", description: "Ut enim ad minim veniam, quis nostrud exercitation."},
    {event: events.first, completed: false, deadline: "2018-09-19T12:30", description: "Ut enim ad minim veniam, quis nostrud exercitation."}
])