noop:

unit:
	./node_modules/karma/bin/karma start
build:
	grunt build && git add -A && git commit -m "+build" && git push --all origin && git push --tags
publish_patch:
	make build && bower version patch && git push --all origin && git push --tags
push:
	git push --all origin && git push --tags
