import React, { Component } from 'react';

const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '100%'
};

export class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfo: false,
            activeMarker: {},
            selectedProperty: ''
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.properties !== prevProps.properties)
        {
          this.initMap();
        }
    } 

    // initialize map and markers
    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 41.875902, lng: -87.667764 },
            zoom: 13
        });
        if (this.props.properties) {
            this.createMarkers(this.props.properties, map)
        }
    }

    // create markers and infowindow from props data
    createMarkers = (dataArray, mapObj) => {
        //create collection of markers and coordinates
        dataArray.forEach(currProperty => {
            let icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            if(currProperty.ESTIMATED_MARKET_VALUE > 400000 && currProperty.ESTIMATED_MARKET_VALUE <= 800000) { icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'}
            if(currProperty.ESTIMATED_MARKET_VALUE > 800000) { icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
            let marker = new window.google.maps.Marker({
                name: currProperty.Full_Address,
                position: {lat: parseFloat(currProperty.Latitude), lng: parseFloat(currProperty.Longitude)},
                map: mapObj,
                icon: icon
            })
            let infowindowContent = `<div id='infowindow'><p>${currProperty.Full_Address}</p></div>`;
            let infowindow = new window.google.maps.InfoWindow({
                content: infowindowContent
            })
            marker.addListener('mouseover', function(){
                infowindow.open(mapObj, marker);
            })
            marker.addListener('mouseout', function(){
                infowindow.close();
            })
        });
    }

    componentDidMount() {
        window.initMap = this.initMap;
        const googleMapScript = document.createElement('script');
        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_API_KEY + '&callback=initMap';
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.document.body.appendChild(googleMapScript);
    }

    render() {
        return (
            <div style={mapStyles} id='map'></div>
        )
    }
}

export default Map;