---
title: Livestreaming with FFMPEG [WIP]
subtitle: An expensive version of Twitch
date: 2019-09-28T21:46:20.086Z
---

Setup EC2 server
---
I used an Ubuntu EC2 instance to handle the ffmpeg process 

Using ffmpeg
---
`apt-get install ffmpeg` 

### Single File

For a single file, we can feed in any video file and it will generate an m3u8 file 

```ffmpeg -y -re -i [file] -c:v copy -c:a copy -f tee -map 0:a? "[hls_time=10:hls_list_size=5:hls_flags=delete_segments]./playlist.m3u8"```

Syncing to S3/Wasabi
---
As we are updating the m3u8 file and outputting the ts files, we can sync them to an s3 bucket. This will allow us to host the livestream online. We can also use cloudfront to distribute our s3 files.

### Wasabi
Wasabi is an alternative to s3 that doesn't charge for file egress. S3 charges for every file read and write.

### s3fs
We will use s3fs to mount an s3 bucket to our output folder 

[https://github.com/s3fs-fuse/s3fs-fuse](https://github.com/s3fs-fuse/s3fs-fuse)

`apt-get install s3fs`

#### Create credentials file for s3
```
echo [ACCESS_KEY_ID]:[SECRET_ACCESS_KEY] > ${HOME}/.passwd-s3fs
chmod 600 ${HOME}/.passwd-s3fs
```

### Cache-Control headers 
We need to tell cloudfront to not cache our m3u8 file

#### Create ahbe configuration file
```
echo .m3u8 Cache-Control max-age=1 > ${HOME}/ahbe.conf
```

`s3fs [bucketname] [outputfolder] -o passwd_file=${HOME}/.passwd-s3fs -o ahbe_conf=${HOME}/ahbe.conf -o url=http://s3.us-east-1.wasabisys.com` 

Distributing with Cloudfront
---

Create an http distribution and point it at the s3 bucket

### Playlist

To play multiple files we'll need to create a playlist 

```ffmpeg -y -re -f concat -safe 0 -protocol_whitelist file,http,https,tcp,tls -i ./playlist_1.txt -vn -c:a aac -f tee -map 0:a? -map 0:v? "[hls_time=5:hls_list_size=2:hls_flags=delete_segments]./playlist.m3u8"```

## Stream from RTMP server

You can also process the video a user is uploading to an rtmp server. You can set up an rtmp server using `nginx` or `node-media-server`. Then to stream up to the rtmp server you would use something like `open broadcasting software`.

```ffmpeg -y -re -i rtmp://[file] -c:v copy -c:a copy -f tee -map 0:a? "[hls_time=10:hls_list_size=5:hls_flags=delete_segments]./playlist.m3u8"```


```
ffmpeg -y -re -f concat -safe 0 -protocol_whitelist file,http,https,tcp,tls -i ../playlist/playlist_1.txt -vn -c:a copy -f tee -map 0:a? -map 0:v? "[hls_time=5:hls_list_size=5:hls_flags=delete_segments]./playlist.m3u8"./playlist7025.ts
```