noop:

unit:
	./node_modules/karma/bin/karma start
publish_patch:
	bower version patch && git push --all origin && git push --tags
push:
	git push --all origin && git push --tags