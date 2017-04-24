require 'simplecov'
SimpleCov.start 'rails'

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

require 'rspec/rails'
require 'support/database_cleaner'
require 'support/session_helper'
require 'shoulda/matchers'
require 'support/factory_girl'
require 'paperclip/matchers'
#require 'selenium-webdriver'

ActiveRecord::Migration.maintain_test_schema!

Capybara.javascript_driver = :poltergeist

options = { js_errors: false }
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, options)
end


=begin
Capybara.register_driver :selenium do |app|
  profile = Selenium::WebDriver.for :chrome
  Capybara::Selenium::Driver.new(app, :profile => profile)
end

Capybara.default_wait_time = 10
Capybara.current_driver = :selenium
Capybara.app_host = 'http://localhost:3000'
=end


RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.include(Shoulda::Matchers::ActiveModel, type: :model)
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
  # devise
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.use_transactional_fixtures = true

  config.infer_spec_type_from_file_location!

  config.filter_rails_from_backtrace!
end
