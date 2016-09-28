namespace :spec do
  desc "Run all unit tests"
  RSpec::Core::RakeTask.new(:units) do |t|
    t.verbose = false
    t.pattern = Dir['spec/*/**/*_spec.rb'].reject { |f| f['/features'] }
  end

  desc "Run all unit tests"
  RSpec::Core::RakeTask.new(:features) do |t|
    t.verbose = false
    t.pattern = Dir['spec/*/**/*_spec.rb'].select { |f| f['/features'] }
  end

  desc "Run all React tests"
  task frontend: :environment do
    system('npm test -- --single-run')
  end
end
