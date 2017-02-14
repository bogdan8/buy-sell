require 'spec_helper'

describe "vist page", type: :feature, js: true do
  it "#products" do
    visit '/products'
    find('#add-product', text: 'Додати Власне оголошення')
  end
end

describe "option", type: :feature, js: true do
  it "#select" do
    visit '/products'
    old_name = find_field('list_category').value
    first('#list_category').click
    all('#list_category_li').last.click
    new_name = find_field('list_category').value
    expect(old_name).not_to eq(new_name)
  end
end

describe "action products", type: :feature, js: true do
  it "#create" do
    visit '/products'
    click_button 'Додати Власне оголошення'
    within('#form_create_product') do
      first('#select-category').click
      all('#category_li').last.click
      fill_in 'description', with: 'Long test'
      fill_in 'price', with: 123
      click_button 'Надіслати на підтвердження'
    end
    expect(accept_alert).to eq('Успішно додано')
  end
end
