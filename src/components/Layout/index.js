import React, { useContext, useEffect, useRef } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';


export default class Layout extends React.Component {
  // componentDidMount() {
  //   console.log("componente montou...");
  //   document.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   console.log("componente desmontou...");
  //   document.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   console.log("scrolled...");
  // };

  render() {
    return (
      <>
        <Header />

        <PostsList />

        <Footer />
      </>
    );
  }
}