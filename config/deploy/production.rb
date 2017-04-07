set :stage, :production
set :branch, 'master'

role :app, %w{bobo@127.0.0.1}
role :web, %w{bobo@127.0.0.1}

server '127.0.0.1', user: 'bobo', roles: %w{app, web}, primary: true

set :deploy_to, '/home/bobo/fshop'

set :rails_env, :production

set :ssh_options, { forward_agent: true, user: 'bobo', keys: %w(~/.ssh/id_rsa.pub), port: 3023 }

set :puma_init_active_record, true

set :enable_ssl, false

task :webpack do
  on roles(:app) do
    execute "cd #{release_path}/client && npm i && webpack"
  end
end

before 'deploy:assets:precompile', 'webpack'