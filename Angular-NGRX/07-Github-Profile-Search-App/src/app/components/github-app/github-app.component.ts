import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../../reducers';
import * as githubActions from '../actions/github.actions';
import * as githubReducer from '../reducers/github.reducer';
import {IProfile} from '../../models/IProfile';
import {IRepository} from '../../models/IRepository';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUsername:string = '';
  public githubProfile:IProfile;
  public githubRepos:IRepository[] = [];
  public errorMessage:string;
  public loading:boolean;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  public submitSearchUser(){
    if(this.githubUsername == undefined && this.githubUsername === ''){
      alert('please fill in the fields');
    }else{
      // dispatch actions to get profile data & repos data
      this.store.dispatch(githubActions.getProfileData({githubUsername : this.githubUsername}))
      this.store.dispatch(githubActions.getReposData({githubUsername : this.githubUsername}))

      // get the state data from NGRX Store
      this.store.pipe(select(githubReducer.githubFeatureKey)).subscribe((state) => {
        this.githubProfile = state.githubProfile;
        this.githubRepos = state.githubRepos;
        this.errorMessage = state.errorMessage;
        this.loading = state.loading;
      });

    }
  }

}
