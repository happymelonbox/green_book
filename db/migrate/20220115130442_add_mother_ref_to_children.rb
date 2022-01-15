class AddMotherRefToChildren < ActiveRecord::Migration[7.0]
  def change
    add_reference :births, :mother, index: true
  end
end
