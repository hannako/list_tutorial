class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|

      t.timestamps null: false
    end
  end
end
