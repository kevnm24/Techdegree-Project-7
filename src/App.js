import React, { Component } from 'react';
import apiKey from './config.js';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav.js';
import Gallery from './components/Gallery.js';
import PageNotFound from './components/PageNotFound.js';
import SearchForm from './components/SearchForm.js';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

export default class App extends Component {

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

  componentDidMount() {
    this.performSearch();
    this.navSearch();
  }

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

  navSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          mountains: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error=> {
        console.log('Error fetching and parsing data', error);
      })
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lakes&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          lakes: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error=> {
        console.log('Error fetching and parsing data', error);
      })
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=forests&per_page=24&format=json&nojsoncallback=1`)
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

  render() {
    console.log(this.state.pictures)
    return (
      <BrowserRouter>
        <div className='container'>
          <Route path="/search" component={() => <SearchForm onSearch={this.performSearch}/>}/>
          <Nav />
          <Switch>
            <Route path='/mountains' render={() => <Gallery data={this.state.mountains} />} />
            <Route path='/lakes' render={() => <Gallery data={this.state.lakes} />} />
            <Route path='/forests' render={() => <Gallery data={this.state.forests} />} />
            <Route path='/search' render={() => <Gallery data={this.state.pictures} />} />
            <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            <Route component={PageNotFound} />
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            }
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
