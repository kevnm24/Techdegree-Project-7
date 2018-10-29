import React, { Component } from 'react';
import apiKey from './config';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// these are the components
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import PageNotFound from './components/PageNotFound';
import SearchForm from './components/SearchForm';

export default class App extends Component {

// sets the state of App class
  constructor() {
    super();
    this.state = {
      pictures: [],
      mountains: [],
      lakes: [],
      forests: [],
      loading: true
    };
  }

// this function is used depending on the route
  componentDidMount() {
    this.performSearch();
    this.mountainSearch();
    this.lakeSearch();
    this.forestSearch();
  }

// these function are used for to search the flickr api's which are then used for the state of empty containers.
  performSearch = (userSearch = 'earth') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error=> {
        console.log('Error fetching and parsing data', error);
      })
  }

  mountainSearch = (userSearch = 'mountains') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          mountains: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error=> {
        console.log('Error fetching and parsing data', error);
      })
    }

    lakeSearch = (userSearch = 'lakes') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            lakes: response.data.photos.photo,
            loading: false
          })
        })
        .catch(error=> {
          console.log('Error fetching and parsing data', error);
        })
      }

    forestSearch = (userSearch = 'forest') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            forests: response.data.photos.photo,
            loading: false
          })
        })
        .catch(error=> {
          console.log('Error fetching and parsing data', error);
        })
      }

// this will render the routing for the app
// switch is used to render component PageNotFound when route does not match any of those below
// this will add a loading message when app first starts up and when ever page is refreshed

  render() {
    console.log(this.state.pictures)
    return (
      <BrowserRouter>
        <div className='container'>
          <Route exact path="/" component={() => <SearchForm onSearch={this.performSearch} />}/>
          <Route exact path="/mountains" component={() => <SearchForm onSearch={this.mountainSearch} />}/>
          <Route exact path="/lakes" component={() => <SearchForm onSearch={this.lakeSearch} />}/>
          <Route exact path="/forests" component={() => <SearchForm onSearch={this.forestSearch} />}/>
          <Nav />
          <Switch>
            {
              (this.state.loading)
              ? <h3 className='active'>Loading...</h3>
              : <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            }
            <Route path='/mountains' render={() => <Gallery data={this.state.mountains} />} />
            <Route path='/lakes' render={() => <Gallery data={this.state.lakes} />} />
            <Route path='/forests' render={() => <Gallery data={this.state.forests} />} />
            <Route path='/search' render={() => <Gallery data={this.state.pictures} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
