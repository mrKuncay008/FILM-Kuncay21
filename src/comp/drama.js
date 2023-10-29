import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import PhotoCard from '../img/whoami.jpg';
import PhotoCard2 from '../img/citizen.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const cardData = [
    {
      title: 'Who Am I (2014)',
      Image: PhotoCard,
      desc: "mengisahkan tentang Benjamin (Tom Schilling), lelaki muda introver yang diasuh neneknya.  Sejak kecil Benjamin memiliki mimpi menjadi superhero. Tapi ia sadar bahwa itu hanya khayalan. Tapi, sejak menemukan internet, Benjamin sadar bahwa di sana ia bisa menjadi siapa saja. Bahkan superhero.Hidupnya berubah seketika saat bertemu Max yang karismatik (Elyas M'Barek). Meskipun memiliki kepribadian yang sangat berbeda, keduanya memiliki minat yang sama. Yakni hacking.",
      Link: '/dramaOne'
    },
    
    {
      title: 'Drama',
      Image: PhotoCard2,
      desc: "CITIZENFOUR adalah film thriller kehidupan nyata, yang terungkap setiap menitnya, memberikan penonton akses yang belum pernah terjadi sebelumnya terhadap pertemuan pembuat film Laura Poitras dan jurnalis Glenn Greenwald dengan Edward Snowden di Hong Kong, saat ia menyerahkan dokumen rahasia yang memberikan bukti pelanggaran privasi massal yang tidak pandang bulu dan ilegal oleh pihak berwenang. Badan Keamanan Nasional (NSA). ",
      Link: '/'
    },
  ];

const Drama = () => {
    return (
<div className='main'>
<Row xs={1} md={3} className="g-5">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Link  className='link' to={card.Link}>
            <Card className='bod' >
            <Card.Img variant="top" src={card.Image} />
            <Card.Body className='titcard'>
            <Card.Title className='titName'> {card.title} </Card.Title>
              <Card.Text className='titDesc'>{card.desc}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
     ))}
      </Row>
</div>
    )
}

export default Drama