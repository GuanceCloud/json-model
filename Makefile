help:
	@echo "gen  - generate code"
	@echo "fmt  - format code"
	@echo "lint - lint code"
	@echo "test - run tests"

.PHONY: gen
gen:
	@buf generate -v
	@mkdir -p ./generated/go ./generated/ts
	@rm -rf ./generated/go/* ./generated/ts/*
	@cp -rf ./assets/go/* ./generated/go/
	@cp -rf ./assets/ts/* ./generated/ts/
	@mv ./.build/go/guance/io/json/* ./generated/go/
	@mv ./.build/ts/guance/io/json/* ./generated/ts/

.PHONY: fmt
fmt:
	@buf format -w

.PHONY: lint
lint:
	@buf lint

.PHONY: test
test:
	cd generated/go && go test -v . && cd -
