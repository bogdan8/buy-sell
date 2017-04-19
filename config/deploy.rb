lock '3.8.0'

set :repo_url, 'git@bitbucket.org:olkobg/fshop.git'
set :application, 'fshop'
set :user, 'bobo'
set :rvm_ruby_version, '2.4.0'
set :rvm_path,  '/usr/local/rvm'

set :linked_dirs, fetch(:linked_dirs, []).push('log',
                                               'tmp/pids',
                                               'tmp/cache',
                                               'tmp/sockets')

set :linked_files, fetch(:linked_files, []).push('config/database.yml', '.env')

namespace :whenever do
  desc 'Update whenever'
  task :update do
    on roles(:app) do
      execute 'whenever --update-crontab'
    end
  end
end

after 'deploy:finished', 'whenever:update'