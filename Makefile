web_app: server client

web_app_with_docker: docker web_app

client: client/package.json client/yarn.lock
	cd client; yarn install
	cd client; yarn start &

server: server/package.json server/yarn.lock
	cd server; yarn install
	cd server; yarn start &

docker: 
	docker-compose up -d db; sleep 10

clean:
	rm -rf client/node_modules
	rm -rf server/node_modules
	docker-compose down
  
