require 'spec_helper'

describe 'action new products', type: :feature, js: true do
  it '#is approved' do
    visit '/admin/new_products'
    count = all('#is_approved').count
    page.all(:css, '#is_approved').each do |el|
      el.click
    end
    expect(all('#is_approved .active-i').count).to eq(count)
  end

  it '#no approved' do
    visit '/admin/new_products'
    count = all('#no_approved').count
    page.all(:css, '#no_approved').each do |el|
      el.click
    end
    expect(all('#no_approved .active-i').count).to eq(count)
  end

  it '#prepaid' do
    visit '/admin/new_products'
    page.all(:css, '#is_approved').each do |el|
      el.click
    end
    count = all('#prepaid_product').count
    page.all(:css, '#prepaid_product').each do |el|
      el.click
    end
    expect(all('#prepaid_product .active-i').count).to eq(count)
  end
end