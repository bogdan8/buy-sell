lock '3.10.2'

set :repo_url, 'git@github.com:bogdan8/fshop.git'
set :application, 'fshop'
set :user, 'fshop'
set :rvm_ruby_version, '2.4.0'
set :rvm_path, '/usr/local/rvm'

set :linked_dirs, fetch(:linked_dirs, []).push('log',
                                               'tmp/pids',
                                               'tmp/cache',
                                               'tmp/sockets')

set :linked_files, fetch(:linked_files, []).push('config/database.yml')

namespace :puma do
  desc 'Create Directories for Puma Pids and Socket'
  task :make_dirs do
    on roles(:app) do
      execute "mkdir #{shared_path}/tmp/sockets -p"
      execute "mkdir #{shared_path}/tmp/pids -p"
    end
  end

  before :start, :make_dirs
end

namespace :logs do
	desc "tail rails logs" 
	task :tail_rails do
		on roles(:app) do
			execute "tail -f #{shared_path}/log/#{fetch(:rails_env)}.log"
		end
	end
end

namespace :deploy do
	desc 'Initial Deploy'
	task :initial do
		on roles(:app) do
			before 'deploy:restart', 'puma:start'
				invoke 'deploy'
			end
		end

	after  :finishing,    :compile_assets
	after  :finishing,    :cleanup
end

task :webpack do
  on roles(:app) do
    execute "cd #{release_path}/client && npm i && npm run build:production"
  end
end

task :seed do
  on roles(:app) do
    within release_path do
      execute :rake, "db:seed RAILS_ENV=production"
    end
  end
end

before 'deploy:assets:precompile', 'webpack'
after 'deploy:migrating', 'seed'
