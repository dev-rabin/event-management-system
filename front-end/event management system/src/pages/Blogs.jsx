import React from 'react'
import { Container} from "react-bootstrap";
import "./Pages.css";

function BlogsPage() {
  return (
    <>
      <Container className="my-5 p-5">
        <h1 className="text-center my-5 heading p-1">Blogs/News</h1>
        <div className="gap-1 d-flex flex-wrap justify-content-around text-white text-center">
          <div>
            <p>January 2024</p>
            <h4>
              Navigating Event Trends : Creating Unforgettable Experiances in
              2023
            </h4>
          </div>
          <div>
            <p>21 January 2024</p>
            <h4>
              Navigating Event Trends : Creating Unforgettable Experiances in
              2023
            </h4>
          </div>
          <div>
            <p>21 January 2024</p>
            <h4>
              Navigating Event Trends : Creating Unforgettable Experiances in
              2023
            </h4>
          </div>
        </div>
      </Container>
    </>
  )
}

export default BlogsPage
