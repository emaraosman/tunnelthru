class CreateGeneralAssessments < ActiveRecord::Migration[5.1]
  def change
    create_table :general_assessments do |t|
      t.string :name
      t.integer :age
      t.string :ethnicity
      t.integer :weight
      t.integer :height
      t.boolean :arthritis
      t.boolean :hypertension
      t.boolean :cholesterol
      t.boolean :chd
      t.boolean :diabetes
      t.boolean :copd
      t.boolean :alzheimers
      t.boolean :familyarthritis
      t.boolean :familyhypertension
      t.boolean :familycholesterol
      t.boolean :familychd
      t.boolean :familydiabetes
      t.boolean :familycopd

      t.belongs_to :user #building relation to user table
      t.timestamps
    end
  end
end
