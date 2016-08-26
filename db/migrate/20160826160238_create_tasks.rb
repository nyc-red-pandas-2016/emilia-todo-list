class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :description, null: false
      t.integer :list_id, null: false
      t.boolean :completed, null: false, default:false

      t.timestamps
    end
  end
end
