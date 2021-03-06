source 'https://rubygems.org'
ruby '2.4.0'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Use Rails 5.0.1
gem 'rails', '~> 5.0.1'
# Use PostGres as the database for Active Record
gem 'pg', '~> 0.20.0'
# Require at least 1.8.4 of Bundler to use Rails Assets
gem 'bundler', '>= 1.8.4'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
# Use Angular Rails Templates to load templates into angular cache
gem 'angular-rails-templates', '~> 1.0', '>= 1.0.2'
# Use ActiveModel serializers to render JSON from Rails DB
gem 'active_model_serializers', '~> 0.10.0'

source 'https://rails-assets.org' do
  gem 'rails-assets-angular'
  gem 'rails-assets-angular-material'
  gem 'rails-assets-angular-material-icons'
  gem 'rails-assets-angular-ui-router'
  gem 'rails-assets-angular-timeline'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem "rspec-rails", "~> 2.0"
  gem "factory_girl_rails", "~> 4.0"
  gem "capybara"
  gem "database_cleaner"
  gem "selenium-webdriver"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
