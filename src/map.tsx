import {MapContainer, Marker, Popup, TileLayer, FeatureGroup} from "react-leaflet"
import { EditControl } from "react-leaflet-draw"
import {IData} from "./home"
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { renderToStaticMarkup } from 'react-dom/server';
interface MapProps {
    markers: IData[]|undefined
}

const customIconMarkup = renderToStaticMarkup(<FontAwesomeIcon icon={faMapMarkerAlt} size="3x" color="red" />);
const customIconUrl = `data:image/svg+xml;base64,${btoa(customIconMarkup)}`;
const customIcon = L.icon({
    iconUrl: customIconUrl,
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//draw tool
const _onEdited = (e: any) => {  
    console.log(e);
}

const _onCreate = (e: any) => {
    console.log(e);
}

const _onDeleted = (e: any) => {
    console.log(e);
}








function Map(this: any, {markers}: MapProps) {

    if(markers === undefined) return (
        <MapContainer center={[24.83, 102.84]} zoom={12} scrollWheelZoom={false} id={"map"}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FeatureGroup>
                <EditControl
                    position='topright'
                    onEdited={_onEdited}
                    onCreated={_onCreate}
                    onDeleted={_onDeleted}
                    draw={{
                        polyline:{
                            icon: new L.DivIcon({
                                iconSize: new L.Point(8, 8),
                                className: 'leaflet-div-icon leaflet-editing-icon'}),
                            shapeOptions: {
                                guidelineDistance: 10,
                                color: 'navy',
                                weight: 3
                            }
                        },
                        rectangle: true,
                        circle: true,
                        circlemarker: true,
                        polygon: true,
                    }
                    }
                />
            </FeatureGroup>
        </MapContainer>
    )
    return (
        <MapContainer center={[24.83, 102.84]} zoom={12} scrollWheelZoom={false} id={"map"}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <FeatureGroup>
                <EditControl
                position='topright'
                onEdited={_onEdited}
                onCreated={_onCreate}
                onDeleted={_onDeleted}
                draw={{
                    polyline:{
                        icon: new L.DivIcon({
                            iconSize: new L.Point(8, 8),
                            className: 'leaflet-div-icon leaflet-editing-icon'}),
                        shapeOptions: {
                            guidelineDistance: 10,
                            color: 'navy',
                            weight: 3    
                        }
                    },
                    rectangle: true,
                    circle: true,
                    circlemarker: true,
                    polygon: true,
            }
        }
                />
  </FeatureGroup>
            {
                markers.map((marker, index) => (
                    <Marker key={index} position={[parseFloat(marker.latitude), parseFloat(marker.longitude)]} icon={customIcon}>
                        <Popup>
                            {marker.info}
                        </Popup>
                    </Marker>

            ))}
        </MapContainer>
    )
}

export default Map