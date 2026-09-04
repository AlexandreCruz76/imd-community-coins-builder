.PHONY: install dev build start clean

install:
	cd frontend && npm install
	cd contracts && npm install

dev:
	cd frontend && npm run dev

build:
	cd frontend && npm run build
	cd contracts && npm run build

start:
	cd frontend && npm start

clean:
	rm -rf frontend/node_modules
	rm -rf contracts/node_modules
	rm -rf frontend/.next
	rm -rf contracts/artifacts
	rm -rf contracts/cache

lint:
	cd frontend && npm run lint

test:
	cd contracts && npm test
