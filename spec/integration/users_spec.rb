require 'spec_helper'

describe "vist page", type: :feature, js: true do
  it "#admin/user" do
    visit '/admin/user'
    find('.body-header-title', text: 'Таблиця користувачів:')
  end
end

describe "action user", type: :feature, js: true do
  it "#to user" do
    visit '/admin/user'
    count = all('#to_user').count
    page.all(:css, '#to_user').each do |el|
      el.click
    end
    expect(all('#to_user .active-i').count).to eq(count)
  end

  it "#to admin" do
    visit '/admin/user'
    count = all('#to_admin').count
    page.all(:css, '#to_admin').each do |el|
      el.click
    end
    expect(all('#to_admin .active-i').count).to eq(count)
  end

  it "#remove" do
    visit '/admin/user'
    count = all('#remove_user').count
    first('#remove_user').click
    expect(all('#remove_user').count).to eq(count - 1)
  end
end