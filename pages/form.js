import Header from "../components/Header";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import React, { Component } from "react";
import PDF from "../components/PDF";

class Post extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  sunmitPost = (e) => {
    if (!this.state.title || !this.state.content) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <div className="flex flex-col h-screen justify-between">
        <Header />
        
        <div className="flex flex-col gap-10">
        {!this.state.postSubmitted ? (
            <form >
              <fieldset>
                <legend className="text-center header">Add new Post</legend>
                <div className="form-group">
                  <span className="col-md-1 col-md-offset-2 text-center">
                    <i className="fa fa-user bigicon"></i>
                  </span>
                  <input
                    onChange={this.onChange("title")}
                    name="title"
                    type="text"
                    placeholder="Post Title"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <span className="col-md-1 col-md-offset-2 text-center">
                    <i className="fa fa-user bigicon"></i>
                  </span>
                  <input
                    onChange={this.onChange("image")}
                    name="image"
                    type="text"
                    placeholder="https://"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <span className="col-md-1 col-md-offset-2 text-center">
                    <i className="fa fa-pencil-square-o bigicon"></i>
                  </span>
                  <textarea
                    onChange={this.onChange("content")}
                    className="form-control"
                    name="content"
                    placeholder="Enter your text here"
                    rows="7"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    onClick={this.sunmitPost}
                    className="btn btn-primary btn-lg"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
        ) : (
          <PDF
            title={this.state.title}
            content={this.state.content}
            image={this.state.image}
          />
        )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Post;

/*
 <div className="container">
            <div className="jumbotron mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <form className="form-horizontal" method="post">
                      <fieldset>
                        <legend className="text-center header">
                          Add new Post
                        </legend>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("title")}
                            name="title"
                            type="text"
                            placeholder="Post Title"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("image")}
                            name="image"
                            type="text"
                            placeholder="https://"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-pencil-square-o bigicon"></i>
                          </span>
                          <textarea
                            onChange={this.onChange("content")}
                            className="form-control"
                            name="content"
                            placeholder="Enter your text here"
                            rows="7"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <button
                            type="button"
                            onClick={this.sunmitPost}
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
*/
