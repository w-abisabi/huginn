import React, { Component } from 'react';
// import { useSelector } from 'react-redux';
// import fetchData from '../actions/fetch'

class MyPlaces extends Component {
  // const places = useSelector(state => state.places);
  state = {
    id: '',
    city: '',
    description: '',
    title: '',
    places: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  // LAST vesion -----------------
  // const [places, setPlaces] = useState([]);
  // useEffect(() => {
  //   async function wrapperFn() {
  //     setPlaces(fetchData('places').then());
  //   }
  //   wrapperFn();
  // }, []);
  // LAST vesion -----------------

  // try {
  //   setPlaces(fetchData('places'));
  // } catch (error) {
  //   console.log('There was an error:', error);
  // }
 
  fetchData = async () => {
    await fetch('/.netlify/functions/api/places', {
    headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
    }})
      .then((res) => {
        const data = res.data;
        this.setState({ places: data });
        console.log('Data is here');
      })
      .catch(() => {
        alert('Error meh meh meh :( ');
      });
  };

  render() {
    return (
      <div className="header">
        <h1>MyPlaces </h1>
        {this.state.places}
        {/* {places.length ? (
          places.map((place) => (
            <div key={place._id}>
              <p>{place.username}</p>
              <p>{place.city}</p>
              <p>{place.description} </p>
              <p>{place.title} </p>
            </div>
          ))
        ) : (
          <p>No places added yet</p>
        )} */}
      </div>
    );
  }
}

export default MyPlaces;
