require 'json'
require 'rubygems'
require 'htmlentities'
require 'unicode'
$KCODE = 'UTF-8'

# Raw json should look something like:

	# [{"k":"v"},{"k":"v"},{"k":"v"},{"k":"v"}]

# That is to say it should NOT look like:

	# "[{"k":"v"},{"k":"v"},{"k":"v"},{"k":"v"}]"

	# OR

	# {"k":"v"},{"k":"v"},{"k":"v"},{"k":"v"}

	# OR

	# "{"k":"v"},{"k":"v"},{"k":"v"},{"k":"v"}"

json = File.open(ARGV[0], 'r').read
parsed = JSON.parse(json)
coder = HTMLEntities.new

parsed.each do |obj|
	obj.each do |key, val|
		obj[key] = coder.encode(val, :named) unless key == "src"
	end
end

File.open(ARGV[0], 'w') { |file| file.write(parsed.to_json) }