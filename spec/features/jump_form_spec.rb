require 'rails_helper'

describe 'jump form' do
  it 'saves the jump location', js: true do
    visit new_jump_path
    fill_in 'Location', with: 'CPI'
    click_on 'Submit'
    expect(Jump.all.count).to eq 1
  end
end
