noop:

unit:
	./node_modules/karma/bin/karma start
publish_patch:
	grunt build && git add -A && git commit -m "+build" && bower version patch && git push --all origin && git push --tags
push:
	git push --all origin && git push --tags
