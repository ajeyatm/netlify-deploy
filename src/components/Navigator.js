import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Card } from 'react-bootstrap'

function Navigator() {
  return (
    <Card className='mt-5'>
      <Card.Header>
        <h3>HackerRank solution</h3>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col className='md-6 sm-12 mb-3'>
            <Card>
              <Card.Body>
                <Card.Title>Link for Github</Card.Title>
                <Card.Text>
                  App source codes are pushed to Github. Please click on below
                  Link
                </Card.Text>

                <a
                  href='https://github.com/ajeyatm/netlify-deploy.git'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col className='md-6 sm-12 '>
            <Card>
              <Card.Body>
                <Card.Title>Link for Nitlify deployed app</Card.Title>
                <Card.Text>
                  App has been deployed to Netlify. Please click on below Link
                </Card.Text>

                <a
                  href='https://ajeyatm-demo.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Neflify App
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Navigator
