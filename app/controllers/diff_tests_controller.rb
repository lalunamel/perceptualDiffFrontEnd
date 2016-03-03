class DiffTestsController < ApplicationController

  def show
    @diff_test = DiffTest.find(params['id'])
  end

  def index
    @diff_tests = Commit.find(params['commit_id']).diff_tests
  end

  def create
    @diff_test = DiffTest.create!(params.permit([:description, :new_img_url, :old_img_url, :diff_img_url, :new_url, :old_url, :commit_id]))
  end
end
