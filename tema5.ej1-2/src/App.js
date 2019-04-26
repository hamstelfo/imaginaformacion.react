import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Request from 'react-http-request';
import AskWeather from './AskWeather';

const CustomLink = ({ activeStyle, children, className, to, activeOnlyWhenExact }) => (
  <Route 
    path = {to} 
    exact={activeOnlyWhenExact} 
    children = {({match}) => (
      <Link to={to} className={className} style={match && activeStyle}>
        {children}
      </Link>
    )}
  />
);

const appActiveStyle = { color: 'red'};

const Links = () => (
  <div>
    <h2>Ejercicio 1</h2>
    <ul>
      <li>
        <CustomLink activeStyle={appActiveStyle} to= '/' activeOnlyWhenExact={true}> Home </CustomLink>
        <ul>
          <li><CustomLink activeStyle={appActiveStyle} to= '/1' activeOnlyWhenExact={true}> Home 1</CustomLink></li>
          <li><CustomLink activeStyle={appActiveStyle} to= '/2' activeOnlyWhenExact={true}> Home 2</CustomLink></li>
          <li><CustomLink activeStyle={appActiveStyle} to= '/3' activeOnlyWhenExact={true}> Home 3</CustomLink></li>
        </ul>
      </li>
      <li>
        <CustomLink activeStyle={appActiveStyle} to= '/address' activeOnlyWhenExact={true}> Address </CustomLink>
        <ul>
          <li><CustomLink activeStyle={appActiveStyle} to= '/address1' activeOnlyWhenExact={true}> Address 1</CustomLink></li>
          <li><CustomLink activeStyle={appActiveStyle} to= '/address2' activeOnlyWhenExact={true}> Address 2</CustomLink></li>
        </ul>
      </li>
      <li>
        <CustomLink activeStyle={appActiveStyle} to= '/http' activeOnlyWhenExact={true}> Test HTTP </CustomLink>
      </li>
    </ul>
    <h2>Ejercicio 2</h2>
    <ul>
      <li>
        <CustomLink activeStyle={appActiveStyle} to= '/ejercicio2' activeOnlyWhenExact={true}> Ejercicio 2 </CustomLink>
      </li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Route exact path="/" component={Home} />
          <Route path="/1" component={Home1} />
          <Route path="/2" component={Home2} />
          <Route path="/3" component={Home3} />
          <Route path="/address" component={Address} />
          <Route path="/address1" component={Address1} />
          <Route path="/address2" component={Address2} />
          <Route path="/http" component={TestHTTP} />
          <Route path="/ejercicio2" component={AskWeather} />
        </div>
      </Router>
    )
  }
}

const Home = () => <h1>Hola desde Home!</h1>
const Home1 = () => <h1>Subpágina Home 1</h1>
const Home2 = () => <h1>Subpágina Home 2</h1>
const Home3 = () => <h1>Subpágina Home 3</h1>
const Address = () => <h1>Nos encontramos en la Avenida de Valencia.</h1>
const Address1 = () => <h1>Subpágina Address 1</h1>
const Address2 = () => <h1>Subpágina Address 2</h1>
const TestHTTP = () => 
          <div>
            <h1>Test HTTP</h1>
            <Request
                  url='http://api.openweathermap.org/data/2.5/weather?q=Fuengirola&appid=5aa82f6c6baaebeb11c9d322e2cf6927'
                  method='get'
                  accept='application/json'
                  verbose={true}>
                      {({error, result, loading}) => {
                          if (loading) {
                            return <div>loading...</div>;
                          } else {
                            var obj = JSON.stringify(result.body)
                            var obj2 = JSON.parse(obj)
                            //console.log(obj2)
                            return <div>
                                <p>Tiempo: {obj2.weather[0].description}</p>
                              </div>;
                          }
                        }
                      }
            </Request>
        </div>     
export default App