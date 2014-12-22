require 'test_helper'

class ReadlistControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
