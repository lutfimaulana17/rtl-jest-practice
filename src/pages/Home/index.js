import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Header, Gap, Button, TextInput, CheckBox} from '../../components'
import {setLoading, addDataComponent, clearDataComponent} from '../../redux/action'
import './home.css'

const Home = () => {
    const globalReducer = useSelector(state => state.globalReducer)
    const homeReducer = useSelector(state => state.homeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const params = [
            {
                name: 'Button',
                component: <Button title="Click Me!"/>,
                howToUse: '<Button title="Click Me!"/>'
            }, {
                name: 'Text Input',
                component: <TextInput placeholder="Name"/>,
                howToUse: '<TextInput placeholder="Name"/>'
            }, {
                name: 'CheckBox',
                component: <CheckBox label="Check me!"/>,
                howToUse: '<CheckBox label="Check me!"/>'
            }
        ]
        dispatch(addDataComponent(params))
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000)
        return() => {
            dispatch(clearDataComponent())
        }
    }, [dispatch])

    return (
        <div className="home">
            <Header title="List Component"/>
            <Gap height={20}/> {
                globalReducer.loading
                    ? 'Loading...'
                    : <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Preview</th>
                                    <th>How to use</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    homeReducer
                                        .dataComponent
                                        .map((item) => {
                                            return (
                                                <tr key={item.name}>
                                                    <td>{item.name}</td>
                                                    <td>{item.component}</td>
                                                    <td>{item.howToUse}</td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table>
            }

        </div>
    )
}

export default Home