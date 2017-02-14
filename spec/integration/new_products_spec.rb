require 'spec_helper'

describe "vist page", type: :feature, js: true do
  it "#admin/new_products" do
    visit '/admin/new_products'
    find('.body-header-title', text: 'Нові Оголошення:')
  end
end

describe "action new products", type: :feature, js: true do
  it "#is approved" do
    visit '/admin/new_products'
    count = all('#is_approved').count
    page.all(:css, '#is_approved').each do |el|
      el.click
    end
    expect(all('#is_approved .active-i').count).to eq(count)
  end

  it "#no approved" do
    visit '/admin/new_products'
    count = all('#no_approved').count
    page.all(:css, '#no_approved').each do |el|
      el.click
    end
    expect(all('#no_approved .active-i').count).to eq(count)
  end

  it "#prepaid" do
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

  it "#remove" do
    visit '/admin/new_products'
    count = all('#remove_product').count
    first('#remove_product').click
    expect(all('#remove_product').count).to eq(count - 1)
  end
end