class Voucher

  def self.all
    vouchers = []
    vouchers << Voucher.new(:id => 1, :title => "one", :body => "1")
    vouchers << Voucher.new(:id => 2, :title => "two", :body => "2")
    vouchers << Voucher.new(:id => 3, :title => "three", :body => "3")
    vouchers
  end

  def self.find(id)
    Voucher.new(:id => id, :title => "found", :body => id)
  end

  def initialize(arguments = {})
    update_attributes! arguments
  end

  attr_accessor :id, :body, :title

  def save
    self
  end

  def update_attributes!(attributes = {})
    attributes.each { |key, value| send "#{key}=", value }
  end

  def to_json(options = {})
    super options.merge(:only => [:id, :title, :body])
  end

end
