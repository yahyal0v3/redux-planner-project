class Event < ApplicationRecord
    has_many :tasks
    validates :title, presence: true
    validates :deadline, presence: true
end
