set :stage, :production
set :branch, 'master'
set :user, 'bobo'

role :app, %w{bobo@127.0.0.1}
role :web, %w{bobo@127.0.0.1}

server '127.0.0.1', user: fetch(:user), roles: %w{app, web}, primary: true

set :deploy_to, "/home/#{fetch(:user)}/fshop"

set :rails_env, :production

set :ssh_options, { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub), port: 3023 }

set :puma_init_active_record, true

set :enable_ssl, false

task :webpack do
  on roles(:app) do
    execute "cd #{release_path}/client && npm i && webpack"
  end
end

before 'deploy:assets:precompile', 'webpack'