class AddDescriptionToTodo < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :description, :string
  end
end
