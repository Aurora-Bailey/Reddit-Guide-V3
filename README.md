# Reddit-Guide-V3


Dev
```
docker compose -f docker-compose.dev.yml -f docker-compose.yml up -d --build
```

test
```
docker-compose -f docker-compose.dev.yml -f docker-compose.yml run collecting npm run test
```


Production
```
docker compose up -d --build
```




```
$ docker volume create mongodb
$ docker volume create mongodb_config
```