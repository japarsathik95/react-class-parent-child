import React from "react";

export default class Details extends React.PureComponent {
  detailPage() {
    return (
      <div>
        <div className="col1">
          <img src={this.props.data.avatar_url} />
        </div>
        <div className="col2">
          <p>Name : {this.props.data.login}</p>
          <p>Type : {this.props.data.type}</p>
          <p>
            <a href={this.props.data.repos_url}>Repos</a>
          </p>
          <p>
            <a href={this.props.data.followers_url}>Followers</a>
          </p>
          <button onClick={this.props.backbutton}>back</button>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.detailPage()}</div>;
  }
}
