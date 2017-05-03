lock '3.8.0'

set :repo_url, 'git@bitbucket.org:olkobg/fshop.git'
set :application, 'fshop'
set :user, 'bodya'
set :rvm_ruby_version, '2.4.0'
set :rvm_path, '/usr/local/rvm'

set :linked_dirs, fetch(:linked_dirs, []).push('log',
                                               'tmp/pids',
                                               'tmp/cache',
                                               'tmp/sockets')

set :linked_files, fetch(:linked_files, []).push('config/database.yml', '.env')

task :webpack do
  on roles(:app) do
    execute "cd #{release_path}/client && npm i && npm run build:production"
  end
end

before 'deploy:assets:precompile', 'webpack'