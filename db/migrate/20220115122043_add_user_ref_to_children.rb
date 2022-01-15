class AddUserRefToChildren < ActiveRecord::Migration[7.0]
  def change
    add_reference :children, :user, index: true
  end
end
