class AddBirthRefToChildren < ActiveRecord::Migration[7.0]
  def change
    add_reference :children, :birth, index: true
  end
end
