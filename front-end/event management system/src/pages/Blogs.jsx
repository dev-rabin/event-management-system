import React from 'react'
import { Container} from "react-bootstrap";

function BlogsPage() {
  return (
    <div>
      <Container className="my-5 p-3">
        <h1 className="text-center text-white my-5">Blogs/News</h1>
        <div className="gap-1 d-flex justify-content-around text-white">
          <div className="col-3">
            <p>January 2024</p>
            <h4>
              Navigating Event Trends : Creating Unforgettable Experiances in
              2023
            </h4>
          </div>
          <div className="col-3">
            <p>21 January 2024</p>
            <h4>
              Navigating Event Trends : Creating Unforgettable Experiances in
              2023
            </h4>
          </div>
          <div className="col-3">
            <p>21 January 2024</p>
            <h4>
              Navigating Event Trends : Creating Unforgettable Experiances in
              2023
            </h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BlogsPage