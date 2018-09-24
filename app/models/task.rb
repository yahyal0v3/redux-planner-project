class Task < ApplicationRecord
    belongs_to :event
    validates :deadline, presence: true
end
