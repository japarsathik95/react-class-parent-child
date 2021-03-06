import React, { Component } from "react";
import { render } from "react-dom";
import Details from "./details.js";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.detais = this.details.bind(this);
    this.state = {
      detailed: false,
      moreinfo: "",
      onloadData: [
        {
          login: "mojombo",
          id: 1,
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mojombo",
          html_url: "https://github.com/mojombo",
          followers_url: "https://api.github.com/users/mojombo/followers",
          following_url:
            "https://api.github.com/users/mojombo/following{/other_user}",
          gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mojombo/subscriptions",
          organizations_url: "https://api.github.com/users/mojombo/orgs",
          repos_url: "https://api.github.com/users/mojombo/repos",
          events_url: "https://api.github.com/users/mojombo/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mojombo/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "defunkt",
          id: 2,
          avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/defunkt",
          html_url: "https://github.com/defunkt",
          followers_url: "https://api.github.com/users/defunkt/followers",
          following_url:
            "https://api.github.com/users/defunkt/following{/other_user}",
          gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/defunkt/subscriptions",
          organizations_url: "https://api.github.com/users/defunkt/orgs",
          repos_url: "https://api.github.com/users/defunkt/repos",
          events_url: "https://api.github.com/users/defunkt/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/defunkt/received_events",
          type: "User",
          site_admin: true
        },
        {
          login: "pjhyett",
          id: 3,
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pjhyett",
          html_url: "https://github.com/pjhyett",
          followers_url: "https://api.github.com/users/pjhyett/followers",
          following_url:
            "https://api.github.com/users/pjhyett/following{/other_user}",
          gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/pjhyett/subscriptions",
          organizations_url: "https://api.github.com/users/pjhyett/orgs",
          repos_url: "https://api.github.com/users/pjhyett/repos",
          events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/pjhyett/received_events",
          type: "User",
          site_admin: false
        }
      ]
    };
  }

  details(data = "") {
    this.setState({ detailed: !this.state.detailed, moreinfo: data });
  }

  render() {
    return (
      <div>
        {!this.state.detailed ? (
          this.state.onloadData.map(data => {
            return (
              <div className="wrapper">
                <a href="#" onClick={() => this.details(data)}>
                  <div className="col1">
                    <img src={data.avatar_url} />
                  </div>
                  <div className="col2">
                    <p>Name : {data.login}</p>
                  </div>
                </a>
              </div>
            );
          })
        ) : (
          <Details
            data={this.state.moreinfo}
            backbutton={() => this.details()}
          />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
