import { Component, OnInit } from '@angular/core';
import {IPost} from '../../shared/interfaces/post';
import {Router} from '@angular/router';
import dummyPostServer from '../../shared/server/dummyPostServer';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postId: number;
  post: IPost = {
      id: null,
      image: ``,
      title: ``,
      // eslint-disable-next-line max-len
      body: ``,
      author: ``,
      location: ``,
      department: ``,
      type: ``,
      feedback: {
        views: 0,
        likes: 0,
        comments: 0
      },
      timeCreated: ``
  };


  constructor(private route: Router) {
  }

  get title() {
    return this.post.title;
  }

  get content() {
    return this.post.body;
  }

  get author() {
    return this.post.author;
  }

  ngOnInit() {
    this.setPostId();
    this.setPost();
    console.log(this.post);
  }

  setPostId() {
    this.postId = history.state.postId;
  }

  //Fetch and set selected post from server
  fetchPost(id) {
    //TODO: fetch post with props postId passed
    return dummyPostServer.find(_post => _post.id === id);
  }

  setPost() {
    const currentPost = this.fetchPost(this.postId);
    if (currentPost !== undefined) {
      this.post = currentPost;
    }
  }

}