import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import Card from 'react-bootstrap/Card';
import PhotoCard from '../img/jatayu.jpg';
import PhotoCard2 from '../img/dramaimg.jpg';
import PhotoCard3 from '../img/actionimg.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const cardData = [
  {
    title: 'Kajian Bapak Kyai Tanjung',
    Image: PhotoCard,
    desc: 'Kajian Anubuawah Romo kyai tanjung',
    Link: '/pengajian'
  },
  {
    title: 'Drama',
    Image: PhotoCard2,
    desc: 'Kumpulan Film Drama Terbaik Kuncay21',
    Link: '/drama'
  },
  {
    title: 'Action',
    Image: PhotoCard3,
    desc: 'Kumpulan Film Action Terbaik Kuncay21',
    Link: '/'
  },
];

const Cata = () => {
    return (
      <div className='Cata'>
        <Row xs={1} md={2} className="g-5">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Link to={card.Link}>
            <Card className='imgCard' >
            <Card.Img variant="top" src={card.Image} />
            <Card.Body className='titcard'>
            <Card.Title> {card.title} </Card.Title>
              <Card.Text>{card.desc}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
     ))}
      </Row>
    </div>
    );
}

export default Cata