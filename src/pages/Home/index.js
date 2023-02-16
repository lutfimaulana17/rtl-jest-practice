import React from 'react'
import { Header, Gap, Button, TextInput, CheckBox } from '../../components'
import './home.css'

const Home = () => {
  return (
    <div className="home">
        <Header title="List Component" />
        <Gap height={20} />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Preview</th>
                    <th>How to use</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Button</td>
                    <td><Button title="Click Me!" /></td>
                    <td>{`<Button title="Click Me!" />`}</td>
                </tr>
                <tr>
                    <td>Text Input</td>
                    <td><TextInput placeholder="Name" /></td>
                    <td>{`<TextInput placeholder="Name" />`}</td>
                </tr>
                <tr>
                    <td>CheckBox</td>
                    <td><CheckBox label="Check me!" /></td>
                    <td>{`<CheckBox label="Check me!" />`}</td>
                </tr>
            </tbody>
            </table>
    </div>
  )
}

export default Home