class AddChildRefToVisits < ActiveRecord::Migration[7.0]
  def change
    add_reference :visits, :child, index: true
  end
end
