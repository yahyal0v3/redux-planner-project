class TaskSerializer < ActiveModel::Serializer
    attributes :id, :completed, :deadline, :description
end