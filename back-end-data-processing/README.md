# Placeholder

node -> mongodb : ask for an unprocessed bundle
node -> AWS s3: ask for bundle from s3
node -> : gunzip bundle
node -> : build user dataset from individual comments
```
{
    id: 1,
    username: "lanthine",
    subreddits: {
        aww: {comments: 1, response: 1, words: 5},
        vuejs: {comments: 4, response: 3 words: 600}
    }
    words: {
        vuejs: 4,
        and: 55,
        the: 34,
        what: 2
    }
}
node : bundle comments into groups of 100,000
```

## Once every 10,000 loops
node : gzip bundle
node -> AWS s3 : uplode package to s3
node -> mongodb : update 100,000 comments as (success, missing, error, retry)



asdf