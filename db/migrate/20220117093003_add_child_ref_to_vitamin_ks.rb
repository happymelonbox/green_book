class AddChildRefToVitaminKs < ActiveRecord::Migration[7.0]
  def change
    add_reference :vitamin_ks, :child, index: true
  end
end
