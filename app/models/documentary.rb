class Documentary < ApplicationRecord

  def self.find_or_create(attributes)
    doc = self.where(title: attributes[:title]).first || self.create(attributes)
    doc.assign_attributes(attributes)
    doc
  end
end