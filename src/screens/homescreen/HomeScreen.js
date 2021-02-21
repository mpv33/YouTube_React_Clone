import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import CategoryBar from '../../components/categorybar/CategoryBar'
import Vedio from '../../components/vedio/Vedio'


const HomeScreen = () => {
    return (
       <Container> 

            <CategoryBar /> 
               <Row>
                {[...new Array(20)].map(()=>(
                    <Col lg={3} md={4}> 
                       <Vedio />
                    </Col>
                ))}    
                  
              </Row>


       </Container>
    )
}

export default HomeScreen
