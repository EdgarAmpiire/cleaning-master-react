import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Blog from './Blog/Blog';
import blogs from "./blogsData"

const Blogs = () => {
    return (
        <div className="bg-service">
            <Container className="py-5">
                <div className="text-center py-5">
                    <h5 className="color">BLOG</h5>
                    <h1 className="service-txt w-75 mx-auto">Our Latest News From Blog</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {blogs.map(blog => <Blog blog={blog} />)}
                </Row>
                <div className="text-center">
                    <Button variant="warning" className="fs-5 py-2 px-5 mt-5">View More Blogs</Button>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;