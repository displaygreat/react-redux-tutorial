import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { SimpleCounter, Counter, SimpleButton } from "./simple-counter";
import LinkApp from "./link-app";
import TabApp from "./tab-app";
import FormApp from "./form-app";
import RefApp from "./ref-app";
import HocApp from "./hoc-app";
import PortalApp from "./portal-app";
import ContextApp from "./context-app";
import NewsApp from "./FakeNewsApp/containers/NewsApp/NewsApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RouterApp from "./RouterApp/RouterApp";
import Home from "./RouterApp/components/Home/Home";
import Posts from "./RouterApp/components/Posts/Posts";
import Post from "./RouterApp/components/Post/Post";
import Contacts from "./RouterApp/components/Contacts/Contacts";

ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleCounter child={<SimpleButton />}>
      <Counter />
    </SimpleCounter> */}
    {/* <LinkApp /> */}
    {/* <TabApp /> */}
    {/* <FormApp /> */}
    {/* <RefApp /> */}
    {/* <HocApp /> */}
    {/* <PortalApp /> */}
    {/* <ContextApp /> */}
    {/* <NewsApp /> */}
    <BrowserRouter>
      <RouterApp>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </RouterApp>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
