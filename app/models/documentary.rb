class Documentary < ApplicationRecord

  def self.find_or_create(attributes)
    self.where(title: attributes[:title]).first || self.create(attributes)
  end
end