import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../../components'
import './menuDetail.css'

const MenuDetail = () => {
    const params = useParams();
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const getDataMenu = () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        setError(error)
      });
    }

    useEffect(() => {
      getDataMenu()
    }, []);

    return (<div>
        <Header title="List Menu"/>
        {error && <div data-testid="err-message">Error: {error.message}</div>}
        {data && (
          <div className="wrapper">
            <h1 className="title" data-testid="title">{data.title}</h1>
            <p className="body" data-testid="body">{data.body}</p>
          </div>
        )}
    </div>)
}

export default MenuDetail