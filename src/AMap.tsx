import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Editor from '@arcgis/core/widgets/Editor';
import { useEffect, useRef } from 'react';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

const AMap = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const queryTypeRef = useRef<HTMLSelectElement>(null);
    useEffect(() => {
         /* 加载样式表 */

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://js.arcgis.com/4.29/esri/themes/light/main.css';
        document.head.appendChild(link);
       
        /* 从服务器加载图层 */
        const layers = [
            new FeatureLayer ({
                url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/0',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/1',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/2',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/3',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/4',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/5',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/6',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/7',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/8',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/14',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/15'
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/12',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/13',
          }),
          new FeatureLayer ({
            url: 'http://localhost:6080/arcgis/rest/services/renFIlder/KunMIng/FeatureServer/10'
          })
       ];  
        const map = new Map({
            basemap: 'streets-navigation-vector',
            layers: layers
           });
        const view = new MapView({
            container: mapRef.current as HTMLDivElement | undefined,
            map: map,
            popupEnabled: false,
            popup: {
                dockEnabled: true,
                dockOptions: {
                    buttonEnabled: false,
                    breakpoint: false,
                    position: "top-right"
                }
            }
        });
        view.when(() => {
            const editor = new Editor({
                container: editorRef.current as HTMLDivElement | undefined,
                view: view
            });
            view.ui.add((optionsRef.current as HTMLDivElement), "top-right");
        });
        return () => {
            document.head.removeChild(link);
        };
    }, []);
  


    return (
        <div>
            <div id="legend"></div>
            <div ref={mapRef} id="viewDiv">
                <div ref={editorRef} id="editor"></div>
                <div ref={optionsRef} id="optionsDiv" className="esri-widget">
                    <p>Select a query type and click a point on the map to view the results.</p>
                    <select ref={queryTypeRef} id="query-type" className="esri-widget">
                        <option value="basic">Basic Query</option>
                        <option value="distance">Query By Distance</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default AMap;

