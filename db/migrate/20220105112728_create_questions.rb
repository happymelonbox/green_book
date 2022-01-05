class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :genre
      t.string :question
      t.references :questionable, polymorphic:true, index:true
      t.integer :user_id

      t.timestamps
    end
  end
end
