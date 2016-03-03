class CreateDiffTests < ActiveRecord::Migration
  def change
    create_table :diff_tests do |t|
      t.text :description
      t.text :new_img_url
      t.text :old_img_url
      t.text :diff_img_url
      t.text :new_url
      t.text :old_url
      t.belongs_to :commit, index: true

      t.timestamps null: false
    end
  end
end
