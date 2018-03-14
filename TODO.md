TODO
====
* pick up where the user has left off (Successfully functions @ 9:45AM)
* ffmpeg -i example_video.mp4 -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2.0[a]" -map "[v]" -map "[a]" example_video_fast.mp4
* ffmpeg -i example_video.mp4 -filter_complex "[0:v]setpts=2.0*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" example_video_slow.mp4
* Intro end recognition performance
