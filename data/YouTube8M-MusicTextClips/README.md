# YouTube8M-MusicTextClips Dataset

This page includes the YouTube8M-MusicTextClips dataset from our CVPR 2023 paper:

[Language-Guided Music Recommendation for Video via Prompt Analogies](https://openaccess.thecvf.com/content/CVPR2023/papers/McKee_Language-Guided_Music_Recommendation_for_Video_via_Prompt_Analogies_CVPR_2023_paper.pdf)<br>
Daniel McKee<sup>1</sup>, Justin Salamon<sup>2</sup>, Josef Sivic<sup>2,3</sup>, Bryan Russell<sup>2</sup><br>
<sup>1</sup>University of Illinois at Urbana-Champaign, <sup>2</sup>Adobe Research, <sup>3</sup>Czech Institute of Informatics, Robotics and Cybernetics, Czech Technical University

The dataset is licensed under a Research-only, non-commercial Adobe Research License. Please see our attached LICENSE file for more information.


## Dataset Description

The YouTube8M-MusicTextClips dataset consists of over 4k high-quality human text descriptions of music found in video clips from the [YouTube8M dataset](https://research.google.com/youtube8m/). 

For each selected YouTube music video, we extracted 10 second clips at the middle of the video for annotation. We provided annotators with only the *audio* corresponding to this clip. Thus, text annotations describe audio alone, not the visual content of the clip.

The dataset annotations are divided into train and test split files. As the dataset is meant mainly for evaluation, there are 3169 annotated clips from the test set and only 1000 annotated clips from the train set.

Each file contains the following information for each sample:
- video_id: The YouTube ID corresponding to the video containing an annotated clip
- start: Start time (in seconds) of the annotated clip in the video
- end: End time (in seconds) of the annotated clip in the video
- text: The text annotation describing the music from the annotated clip

For more information, please check our project page and paper: https://www.danielbmckee.com/language-guided-music-for-video/


## Citation

If you use this dataset, please cite our paper:

McKee, D., Salamon, J., Sivic, J., & Russell, B. (2023). Language-Guided Music Recommendation for Video via Prompt Analogies. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2023).

Bibtex:
```
@InProceedings{mckee2023language, 
  author = {McKee, Daniel and Salamon, Justin and Sivic, Josef and Russell, Bryan},
  title = {Language-Guided Music Recommendation for Video via Prompt Analogies},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year = {2023},
}
```