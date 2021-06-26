REVERSE_PROXY := nginx
BACKEND := node-app
DATABASE := mongo
REDIS := redis
FRONTEND := vue-ui
SCRAPING := scraping-app

up-backend:
	powershell docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --force-recreate $(REVERSE_PROXY) $(BACKEND) $(DATABASE) $(REDIS)

up-frontend:
	powershell docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --force-recreate $(FRONTEND)

up-scraping:
	powershell docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --force-recreate $(SCRAPING)

up-backend-d:
	powershell docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --force-recreate $(REVERSE_PROXY) $(BACKEND) $(DATABASE) $(REDIS)

up-frontend-d:
	powershell docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --force-recreate $(FRONTEND)

up-scraping-d:
	powershell docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --force-recreate $(SCRAPING)

down:
	powershell docker-compose down -v

logs:
	powershell docker-compose logs -f

prune:
	powershell docker system prune

prune-all:
	powershell docker system prune -a

into-node-app:
	powershell docker-compose exec -it $(BACKEND) bash

into-mongo:
	powershell docker-compose exec -it $(DATABASE) bash

into-vue-app:
	powershell docker-compose exec -it $(FRONTEND) bash
