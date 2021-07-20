# Reddit-Guide-V3


Dev
```
docker compose build
docker compose -f docker-compose.dev.yml -f docker-compose.yml up -d
```

Production
```
docker compose build
docker compose up -d
```




```
$ docker volume create mongodb
$ docker volume create mongodb_config
```