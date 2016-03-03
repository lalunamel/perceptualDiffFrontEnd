class Commit < ActiveRecord::Base
  has_many :diff_tests
end
