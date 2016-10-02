class CreateJumps < ActiveRecord::Migration[5.0]
  def change
    create_table :jumps do |t|
      t.date :day
      t.string :location
      t.integer :exit_altitude
      t.integer :deployment_altitude
      t.integer :freefall_time
      t.text :description
      t.timestamps
    end
  end
end
