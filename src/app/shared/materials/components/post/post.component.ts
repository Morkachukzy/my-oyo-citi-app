import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IPost} from '../../../interfaces/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    @Input() post: IPost = {
        id: null,
        image: ``,
        title: ``,
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

    get postImageUrl() {
        return this.post.image;
    }

    get imageStyle() {
        return this.hasImage ?
            `background: lightblue url(${this.postImageUrl}) center/cover no-repeat;` :
            `background: lightblue  center/cover no-repeat fixed;`;
    }

    get hasImage() {
        return this.post.image !== ``;
    }

    get postId() {
        return this.post.id;
    }

    get postTitle() {
        return this.post.title;
    }

    get postLocation() {
        return this.post.location;
    }

    get hasStatus() {
        return this.post.hasOwnProperty('status');
    }

    get postDepartment() {
        return this.post.department;
    }

    get postType() {
        return this.post.type;
    }

    get noOfCaseViews() {
        return this.post.feedback.views;
    }

    get noOfCaseComments() {
        return this.post.feedback.comments;
    }

    get noOfCaseLikes() {
        return this.post.feedback.likes;
    }

    get timeCreated() {
        return this.post.timeCreated;
    }

    get postContent() {
        return this.post.body;
    }

    ngOnInit() {
    }


    proceedTo(postId) {
        this.route.navigate(['post'], {state: {postId}}).then(resp => resp ? console.log('Done') : '');
    }

}