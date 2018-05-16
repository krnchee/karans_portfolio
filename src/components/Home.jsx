import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Karan's Page</h2>
          <p>This site was built using React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle='primary'>About Me</Button>
          </Link>
        </Jumbotron>
        <Row className='show-grid text-center'>
          <Col xs={12} s={4} className='person-wrapper'>
            <Image src="assets/person-1.jpeg" circle className='profile-pic'/>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr/>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
