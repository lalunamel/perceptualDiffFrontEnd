require 'rails_helper'

RSpec.describe DiffTestsController, :type => :controller do
  before do
    @commit = Commit.create! sha: 'abc'
    @params = {
      commit_id: @commit.id,
      description: 'desc',
      new_img_url: 'http://amazon.s3.com/new',
      old_img_url: 'http://amazon.s3.com/old',
      diff_img_url: 'http://amazon.s3.com/diff',
      new_url: 'http://websitewithNEWcode.com',
      old_url: 'http://websitewithOLDcode.com'
    }
    @partial_expected_json_response = Hash[@params.map{ |k, v| [k.to_s, v] }]
  end

  describe '#create' do
    it 'creates a new DiffTest' do
      post :create, @params.merge!({format: 'json'})

      actual_test = DiffTest.first
      expect(actual_test.description).to eq(@params[:description])
    end

    it 'returns the created DiffTest' do
      post :create, @params.merge!({format: 'json'})
      response_json = JSON.parse(@response.body)

      expect(response_json).to include(@partial_expected_json_response)
      expect(response_json).to include('id')
      expect(response_json).to include('created_at')
    end

    it 'adds a new DiffTest to the given commit' do
      expect {
        post :create, @params.merge!({format: 'json'})
      }.to change {@commit.reload.diff_tests.length}.from(0).to(1)
    end
  end

  describe '#show' do
    before do
      @diff_test = DiffTest.create!(@params)
    end

    it 'returns a DiffTest' do
      get :show, { id: @diff_test.id, format: 'json' }
      response_json = JSON.parse(@response.body)

      expect(response_json).to include(@partial_expected_json_response)
    end
  end

  describe '#index' do
    before do
      @diff_test = DiffTest.create!(@params)
      @diff_test2 = DiffTest.create!(@params)
    end

    it 'returns all DiffTests for a commit' do
      get :index, { commit_id: @commit.id, format: 'json' }
      response_json = JSON.parse(@response.body)

      expect(response_json.length).to eq 2
    end
  end
end
