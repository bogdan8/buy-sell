set :stage, :production
set :branch, 'master'
set :user, 'ubuntu'

role :app, %w{ubuntu@18.217.57.117}
role :web, %w{ubuntu@18.217.57.117}
role :db, %w{ubuntu@18.217.57.117f}

server 'ubuntu@18.217.57.117', user: fetch(:user), roles: %w{app, web}, primary: true

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
