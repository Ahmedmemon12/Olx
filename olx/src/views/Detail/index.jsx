import { Container, Row, Col, Button } from 'react-bootstrap';
import { getAllProducts, getSingleAd } from "../../config/firebase"
import Footer from '../NavBar/footer';
import './index.css'
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function Detail() {
  const { id } = useParams();
  const [detailItem, setdetailItem] = useState([])
  useEffect(() => {
    getDetail()
  }, [])

  async function getDetail() {
    const res = await getSingleAd(id)
    setdetailItem(res)
  }
  const { title, description, brand, price, imageURL } = detailItem || {};
  const navigate = useNavigate()


  return <div style={{ zIndex: -1 }}>
    <button onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left" style={{ color: '#ffffff;' }} /></button>
    <div id="container" className="container-fluid">
      <Row>
        <Col sm={8}>
          <div className="container mt-5">
            <Carousel style={{ width: '90%' }}>
              {imageURL && imageURL.length > 0 ? (
                imageURL.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                    height={600}
                    style={{width:700 }}
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              ) : <></>}
            </Carousel>
          </div>
          <Card className='mt-3' style={{ width: '90%' }}>
            <Card.Body>
              {/* <Card.Title><h1>Rs : {price}$</h1></Card.Title> */}
              <br />
              <Card.Text>
                <h3>
                  {title}
                </h3>
              </Card.Text>
              <Card.Text>
                <h6>
                  {brand}
                </h6>
              </Card.Text>
              <Card.Text>
                <h4>
                  <b>
                    Rs. {price}
                  </b>
                </h4>
              </Card.Text>

              <div onClick={(e) => { like(e.target) }} style={{}}><img style={{ float: 'right', marginRight: '0px' }} width={30} src="https://static-00.iconduck.com/assets.00/heart-icon-512x461-rdoishra.png" alt="" /></div>
              <img style={{ float: 'right', marginRight: '20px' }} width={30} src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png" alt="" />
            </Card.Body>
          </Card>
          <Card className='mt-3' style={{ width: '90%' }}>
            <Card.Body>
              <Card.Text>
                <h1>Description</h1>
                <p><b><i>{description}</i></b></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card className='mt-5' style={{ width: '80%', textAlign: 'center' }}>
            <Card.Body>
              <Card.Title><h4 className='details'><span><img width={'15%'} src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png" alt="" /></span>Ahmed</h4></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Member Since Dec 2020</Card.Subtitle>
              <br />
              <Card.Text>
                <div className="d-grid gap-2">
                  <Button className='btn btn-black' style={{ width: 300 }} size="md">
                    Show Phone Number
                  </Button>
                  <Button variant="secondary" style={{ width: 300 }} size="md">
                    Chat
                  </Button>
                </div>.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='mt-5' style={{ width: '80%', textAlign: 'center' }}>
            <Card.Body>
              <Card.Title><h1>Location</h1></Card.Title>
              <Card.Text>
                <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjwdZvFqJudRfAmH0P8oI0iQUm4Gf-6pDq2VUwEqBST8fRq9E_8xP69Vgcjou7wcSIRg&usqp=CAU" alt="" />
                G-8, Karachi

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  </div>

}
export default Detail;