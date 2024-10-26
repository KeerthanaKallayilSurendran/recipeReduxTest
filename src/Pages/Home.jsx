import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes, searchRecipe } from '../redux/slices/recipeSlice'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
const Home = () => {
    const dispatch = useDispatch()
    const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)
    // console.log(allRecipes, loading, error);

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [])
    return (
        <>
            <Header insideHome={true} />
            <div style={{ minHeight: '100vh' }}>
                {
                    loading ?
                        <div className='d-flex justify-content-center align-items-center my-5 flex-column ' style={{ height: '100vh' }}>
                            <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" height={'250px'} alt="" />
                            <p className='fs-4 fw-bolder text-success'>Loading...</p>
                        </div>
                        :
                        <>
                            <div className='home-banner'>
                                <h1>Explore Recipes</h1>
                                <p>Leran, Cook, Share. Cooking Made Easy</p>
                            </div>
                            <div className='d-flex justify-content-end p-5'>
                                <input type="text" style={{ width: '300px' }} onChange={e => dispatch(searchRecipe(e.target.value.toLocaleLowerCase()))} className='rounded p-1 text-black' placeholder='Search Product Here...' />
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center p-5'>
                                <h1 className='main-head'>All Recipes</h1>
                                <Container>
                                    <Row className='text-center'>
                                        {
                                            allRecipes?.length > 0 ?
                                                allRecipes.map(recipe => (
                                                    <Col key={recipe?.id} lg='3' md='6' sm='12' className='mb-4'>
                                                        <Card style={{ width: '18rem' }}>
                                                            <Card.Img variant="top" src={recipe?.image} />
                                                            <Card.Body>
                                                                <Card.Title className='text-success fs-5 fw-bolder recipe-name'>{recipe?.name}</Card.Title>
                                                                <Card.Text>
                                                                    <p><span className='fw-bolder'>Cuisine:</span> {recipe?.cuisine}</p>
                                                                </Card.Text>
                                                                <Link className='px-3 py-2 rounded bg-success fw-bolder text-white' style={{ textDecoration: 'none' }} to={`${recipe?.id}/view`}>View Recipe</Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))
                                                :
                                                <div>
                                                    <p className='text-success fw-bolder text-center'>No Recipes Found!!!</p>
                                                </div>
                                        }
                                    </Row>
                                </Container>
                            </div>
                        </>

                }
            </div>
        </>

    )
}

export default Home