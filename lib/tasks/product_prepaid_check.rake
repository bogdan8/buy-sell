namespace :product do
  desc 'check or payment date fugitive'
  task check_prepaid: :environment do
    PrepaidProduct.all.each do |prepaid|
      if prepaid.prepaid_end_date.month == Date.today.month && prepaid.prepaid_end_date.day <= Date.today.day
        prepaid.destroy
      end
    end
  end
end