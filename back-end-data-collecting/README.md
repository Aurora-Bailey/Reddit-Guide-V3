# Placeholder

## Loop 1 second
node -> mongodb : ask for 100 comment id's from db
node -> reddit api : ask for comment data on 100 id's
node : bundle comments into groups of 100,000

## Once every 10,000 loops
node : gzip bundle
node -> AWS s3 : uplode bundle to s3
node -> mongodb : update 100,000 comments as (success, missing, error, retry)
node -> mongodb : add bundle name to monogdb as unprocessed

## Loop 1 second
node -> mongodb : ask for 100 subreddit id's from db
node -> reddit api : ask for subreddit data on 100 id's
node : bundle subreddits into groups of 100,000

## Once every 10,000 loops
node : gzip bundle
node -> AWS s3 : uplode bundle to s3
node -> mongodb : update 100,000 subreddits as (success, missing, error, retry)
node -> mongodb : add bundle name to monogdb as unprocessed


{
    Subreddits: {

    }, 
    Users: {
        username: 
    }
}