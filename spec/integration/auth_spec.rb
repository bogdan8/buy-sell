require 'spec_helper'

describe "vist page", type: :feature, js: true do
  it "#sign_in" do
    visit '/sign_in'
    expect(page).to have_selector(:css, '.form-sign-in')
  end
  it "#register" do
    visit '/register'
    expect(page).to have_selector(:css, '.auth-block-grid')
  end
  it "#moving from login page to register" do
    visit '/sign_in'
    expect(page).to have_selector(:css, '.form-sign-in')

    click_link 'Зареєструватись'
    expect(page).to have_selector(:css, '.auth-block-grid')
  end
  it "#moving from register page to login" do
    visit '/register'
    expect(page).to have_selector(:css, '.auth-block-grid')

    click_link 'Ввійти'
    expect(page).to have_selector(:css, '.form-sign-in')
  end
end

describe "the signin process", type: :feature, js: true do
  it "signs me in" do
    visit '/sign_in'
    within(".form-sign-in") do
      fill_in 'Електрона Почта', with: 'user@example.com'
      fill_in 'Пароль', with: '123456'
    end
    click_button 'Ввійти'
  end
end
