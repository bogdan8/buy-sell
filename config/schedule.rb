set :output, "#{path}/log/cron.log"

every :day, at: '1:00am' do
  rake 'product:check_prepaid'
end