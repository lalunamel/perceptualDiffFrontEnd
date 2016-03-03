class CommitsController < ApplicationController

  def show
    @commit = Commit.find(params['id'])
  end

  def index
    @commits = Commit.all
  end

  def create
    @commit = Commit.create!(sha: params['sha'], comment: params['comment'])
  end
end
