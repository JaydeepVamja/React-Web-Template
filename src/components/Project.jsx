import React, { useEffect, useState } from 'react'
import { Card, Container, Nav } from 'react-bootstrap';
import data from '../ProjectData.json';

function Project() {

    const [project, setProject] = useState(data);


    const handleAll = () => {
        setProject(data); 
    };

    const handleFurniture = () => {
        const filteredData = data.filter((ele) => ele.category === 'Furniture');
        setProject(filteredData);
    };

    const handleDesign = () => {
        const filteredData = data.filter((ele) => ele.category === 'Design');
        setProject(filteredData);
    };

    const handleHouse = () => {
        const filteredData = data.filter((ele) => ele.category === 'House');
        setProject(filteredData);
    };

    // const [val, setVal] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await
    //             fetch('https://wallpaper.oceanmtechrnd.com/wallpaper_category')
    //         const data = await response.json();
    //         console.log(data);
    //         setVal(data);
    //     }
    //     fetchData();
    // }, [])


    return (
        <>
            <section className='pt-5 pb-5'>
                <Container>
                    <div className="our-projects">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-12">
                                <div className="title">
                                    <h2>Our Projects</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <Nav defaultActiveKey="all" as="ul" className='justify-content-between'>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="all" onClick={handleAll}>All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="furniture" onClick={handleFurniture}>Furniture</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="design" onClick={handleDesign}>Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="house" onClick={handleHouse}>House</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                {/* <Nav defaultActiveKey="all" as="ul" className='justify-content-between'>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="furniture">Furniture</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="design">Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="house">House</Nav.Link>
                                    </Nav.Item>
                                </Nav> */}
                            </div>
                        </div>
                        <div className="row pt-5 g-5">
                            {
                                project.map((item) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                            <Card className='rounded-0 border-0'>
                                                <Card.Img variant="top" className='rounded-0' src={item.image} />
                                                <Card.Body>
                                                    <Card.Text className='text-center'>
                                                        {item.name}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                            {/* {
                                val.map((item, index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                                            <Card className='rounded-0 border-0'>
                                                <Card.Img variant="top" className='rounded-0' src={item.live_img_url} />
                                                <Card.Body>
                                                    <Card.Text className='text-center'>
                                                        {item.category_name}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Project
