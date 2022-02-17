class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :genre
      t.string :question
      t.references :questionable, polymorphic:true, index:true
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
