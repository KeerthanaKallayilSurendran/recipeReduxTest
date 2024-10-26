import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { Link, useParams } from 'react-router-dom'
import { all } from 'axios'

const View = () => {
    const { id } = useParams()
    // console.log(id);
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        if (sessionStorage.getItem("allRecipes")) {
            const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
            setRecipe(allRecipes?.find(recipe => recipe.id == id))
        }
    }, [])


    return (
        <>
            <Header />
            <div style={{ minHeight: '100vh' }} className='p-5'>
                <Container>
                    <Row>
                        <Col>
                            <img className='recipe-img' src={recipe?.image} height={'600px'} alt="" />
                        </Col>
                        <Col>
                            <p className=''><span className='fw-bolder'>Id: </span>{recipe?.id}</p>
                            <h1 className='text-success'>{recipe?.name}</h1>
                            <p><span className='fw-bolder'>Cuisine: </span>{recipe?.cuisine}</p>
                            <p><span className='fw-bolder fs-4'>Ingredients</span><br />
                                <ol>
                                    {recipe?.ingredients?.map((item,inde) =>
                                        <li key={inde}>{item}</li>
                                    )}
                                </ol>

                            </p>
                            <p>
                                <span className='fw-bolder fs-4'>Instructions:</span> <br />
                                <ol>
                                    {recipe?.instructions?.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ol>
                            </p>
                            <p><span className='fw-bolder'>Preparation Time:</span> {recipe?.prepTimeMinutes}min</p>
                            <p><span className='fw-bolder'>Cooking Time: </span>{recipe?.cookTimeMinutes}min</p>
                            <p><span className='fw-bolder'>Rating: </span>{recipe?.rating}</p>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>

    )
}

export default View