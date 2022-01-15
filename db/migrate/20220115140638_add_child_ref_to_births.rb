class AddChildRefToBirths < ActiveRecord::Migration[7.0]
  def change
    add_reference :births, :child, index: true
  end
end
