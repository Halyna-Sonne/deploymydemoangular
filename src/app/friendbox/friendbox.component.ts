import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrls: ['./friendbox.component.scss']
})
export class FriendboxComponent implements OnInit {

  names = [];
  images = [];

  constructor(public fs: FriendService) { }

  ngOnInit(): void {

  }

}
