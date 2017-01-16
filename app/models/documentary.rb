class Documentary < ApplicationRecord

  def self.create_or_update(attributes)
    doc = self.where(title: attributes[:title]).first || self.create(attributes)
    doc.assign_attributes(attributes)
    doc
  end
end