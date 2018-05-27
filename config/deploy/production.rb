set :stage, :production
set :branch, 'master'
set :user, 'buy-sell'

role :app, %w{buy-sell@192.168.0.102}
role :web, %w{buy-sell@192.168.0.102}
role :db, %w{buy-sell@192.168.0.102}

server 'buy-sell@192.168.0.102', user: fetch(:user), roles: %w{app, web}, primary: true
#ssh_options = {keys: ["#{ENV['HOME']}/.ssh/amazon.pem"], forward_agent: true }

set :deploy_to, "/home/#{fetch(:user)}"

set :rails_env, :production

set :ssh_options, { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }

set :puma_init_active_record, true

set :enable_ssl, false

set :pty,             true
set :use_sudo,        false
set :deploy_via,      :remote_cache
set :puma_bind,       "unix://#{shared_path}/tmp/sockets/buy-sell-puma.sock"
set :puma_state,      "#{shared_path}/tmp/pids/buy-sell-puma.state"
set :puma_pid,        "#{shared_path}/tmp/pids/buy-sell-puma.pid"
set :puma_access_log, "#{release_path}/log/buy-sell-puma.error.log"
set :puma_error_log,  "#{release_path}/log/buy-sell-puma.access.log"
set :puma_preload_app, true
set :puma_worker_timeout, nil
