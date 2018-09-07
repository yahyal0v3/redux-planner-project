class EventSerializer < ActiveModel::Serializer
    attributes :id, :title, :deadline, :description
    has_many :tasks
end