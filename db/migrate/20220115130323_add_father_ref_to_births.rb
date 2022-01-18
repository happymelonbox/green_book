class AddFatherRefToBirths < ActiveRecord::Migration[7.0]
  def change
    add_reference :births, :father, index: true
  end
end
