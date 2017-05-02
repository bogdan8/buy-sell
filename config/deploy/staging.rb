set :stage, :production
set :branch, 'staging'
set :user, 'bodya'

role :app, %w{bodya@ustk.in.ua}
role :web, %w{bodya@ustk.in.ua}

server 'ustk.in.ua', user: fetch(:user), roles: %w{app, web}, primary: true

set :deploy_to, "/home/#{fetch(:user)}/fshop"

set :rails_env, :production

set :ssh_options, { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }

set :puma_init_active_record, true

set :enable_ssl, false

task :webpack do
  on roles(:app) do
    execute "cd #{release_path}/client && npm i && webpack"
  end
end

before 'deploy:assets:precompile', 'webpack'