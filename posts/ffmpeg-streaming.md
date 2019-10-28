---
title: Livestreaming with FFMPEG [WIP]
subtitle: An expensive alternative to Twitch
date: 2019-09-28T21:46:20.086+00:00

---
# FFMPEG

    ffmpeg -y -re -i [file] -c:v libx264 -preset ultrafast -crf 18 -c:a acc -hls_list_size 2 -hls_time 10 -hls-flags delete_segments [output].m3u8

* file - input file
* output - output path