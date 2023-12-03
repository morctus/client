import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

function Home() {

    const getData = async() => {
        try {
            const response = await axios.post('http://localhost:5000/user/get-user-info-by-id', {},
            {
                Headers : {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            console.log(response.data)
        } catch (error) {
            console.log("fuck")
        }
    }
    useEffect(() => {

        getData()

    },[])

    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    )
}

export default Home