require 'spec_helper'

describe "vist page", type: :feature, js: true do
  it "#admin/categories" do
    visit '/admin/categories'
    find('.body-header-title', text: 'Таблиця Рубрик:')
  end
end

describe "action categories", type: :feature, js: true do
  it "#create" do
    visit '/admin/categories'
    old_number = all('#name_category').count
    first('#create_category_btn').click
    within('#form_create_category') do
      fill_in 'category', with: 'Нова категорія'
      click_button 'Додати'
    end
    new_number = all('#name_category').count
    expect(old_number).not_to eq(new_number)
  end

  it "#edit" do
    visit '/admin/categories'
    old_name = first('#name_category')['innerText']
    first('#edit_category_input').click
    within('#form_category_edit') do
      fill_in 'category-edit', with: 'Нова категорія'
      click_button 'Редагувати'
    end
    new_name = first('#name_category')['innerText']
    expect(old_name).not_to eq(new_name)
  end

  it "#remove" do
    visit '/admin/categories'
    count = all('#remove_category').count
    first('#remove_category').click
    expect(all('#remove_category').count).to eq(count - 1)
  end
end
