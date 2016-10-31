class AddPriorityToTodo < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :priority, :string
  end
end
