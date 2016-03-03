require 'rails_helper'

RSpec.describe CommitsController, :type => :controller do
  describe '#create' do
    it 'creates a new Commit' do
      post :create, { sha: '123abc', comment: 'commit comment', format: 'json' }

      actual_commit = Commit.first
      expect(actual_commit.sha).to eq('123abc')
      expect(actual_commit.comment).to eq('commit comment')
    end

    it 'returns the created Commit' do
      post :create, { sha: '123abc', comment: 'commit comment', format: 'json' }
      response_json = JSON.parse(@response.body)

      expect(response_json).to include('sha' => '123abc', 'comment' => 'commit comment')
      expect(response_json).to include('id')
      expect(response_json).to include('created_at')
    end
  end

  describe '#show' do
    before do
      @commit = Commit.create(sha: 'asdf', comment: 'asdf')
    end

    it 'returns the given commit' do
      get :show, { id: @commit.id, format: 'json' }
      response_json = JSON.parse(@response.body)

      expect(response_json).to include('sha' => @commit.sha, 'comment' => @commit.comment)
    end
  end

  describe '#index' do
    before do
      @commit1 = Commit.create(sha: 'asdf', comment: 'asdf')
      @commit2 = Commit.create(sha: 'asdf2', comment: 'asdf2')
    end

    it 'returns a list of commits' do
      get :index, { format: 'json' }
      response_json = JSON.parse(@response.body)

      expect(response_json.length).to eq 2
    end
  end
end
