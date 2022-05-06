
var myview = new ol.View({
    center: [10170827.098547483, 3015200.5279596574],
    zoom: 9.72,
});
var map = new ol.Map({
    target: 'mymap',
    view: myview,
});
var osmLayer = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: "base",
    visible:true,
    zIndex:0,
    source: new ol.source.OSM()
});
var None = new ol.layer.Tile({
    title: 'None',
    type: "base",
    visible:false
});

var wmsAdminLayer = new ol.layer.Image({
    visible: true,
    title: "Kamrup",
    zIndex: 1,
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/GWRIMS/wms",
        params: { 'LAYERS': 'GWRIMS:KAMRUP_PCS' }
    })
});
var wmsAssamDistrictLayer = new ol.layer.Image({
    visible: false,
    title: "Assam District",
    zIndex: 1,
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:4326',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:Assam' }
    })
});

var wmsLulc2000Layer = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LULC 2000',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:2000lulc'}
    })
});
var wmsLulc2010Layer = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LULC 2010',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:2010lulc' }
    })
});
var wmsLulc2020Layer = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LULC 2020',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:2020lulc' }
    })
});
var wmsLSTpostmonsoon2000 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LST POSTMONSOON 2000',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:LST_POSTMONSOON_2000' }
    })
});
var wmsLSTpremonsoon2000 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LST PREMONSOON 2000',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:LST_PREMONSOON_2000' }
    })
});
var wmsLSTpostmonsoon2010 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LST POSTMONSOON 2010',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:LST_POSTMONSOON_2010' }
    })
});
var wmsLSTpremonsoon2010 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LST PREMONSOON 2010',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:LST_PREMONSOON_2010' }
    })
});
var wmsLSTpostmonsoon2020 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LST POSTMONSOON 2020',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:LST_POSTMONSOON_2020' }
    })
});
var wmsLSTpremonsoon2020 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'LST PREMONSOON 2020',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:LST_PREMONSOON_2020' }
    })
});
var wmsndviPreMonsoon2000 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'NDVI PRE 2000',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:NDVI_PREMONSOON_2000' }
    })
});
var wmsndviPostMonsoon2000 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'NDVI POST 2000',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:NDVI_POSTMONSOON_2000' }
    })
});
var wmsndviPreMonsoon2010 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'NDVI PRE 2010',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:NDVI_PREMONSOON_2010' }
    })
});
var wmsndviPostMonsoon2010 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'NDVI POST 2010',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:NDVI_POSTMONSOON_2010' }
    })
});
var wmsndviPreMonsoon2020 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'NDVI PRE 2020',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:NDVI_PREMONSOON_2020' }
    })
});
var wmsndviPostMonsoon2020 = new ol.layer.Image({
    visible: false,
    zIndex:1,
    title: 'NDVI POST 2020',
    source: new ol.source.ImageWMS({
        crossOrigin: 'annonymous',
        serverType: 'geoserver',
        projection: 'EPSG:32646',
        url: "http://localhost:8080/geoserver/LST/wms",
        params: { 'LAYERS': 'LST:NDVI_POSTMONSOON_2020' }
    })
});
var lulcGroupLayer = new ol.layer.Group({
    title: 'LULC',
    visible: true,
    layers: [wmsLulc2000Layer, wmsLulc2010Layer, wmsLulc2020Layer]
});
var lstGroupLayer = new ol.layer.Group({
    title: 'LST',
    visible: false,
    layers: [wmsLSTpostmonsoon2000, wmsLSTpremonsoon2000, wmsLSTpostmonsoon2010, wmsLSTpremonsoon2010, wmsLSTpremonsoon2020, wmsLSTpostmonsoon2020]
});
var ndviGroupLayer = new ol.layer.Group({
    title: 'NDVI',
    visible: false,
    layers: [wmsndviPreMonsoon2000, wmsndviPostMonsoon2000, wmsndviPreMonsoon2010, wmsndviPostMonsoon2010, wmsndviPreMonsoon2020, wmsndviPostMonsoon2020]
});
var administrativeGroupLayer = new ol.layer.Group({
    title: 'Administrative',
    visible: true,
    layers: [wmsAdminLayer,wmsAssamDistrictLayer]
});
var baseMapLayerGroup = new ol.layer.Group({
    title: 'Base Layer',
    visible: true,
    layers: [osmLayer,None]
});
var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    groupSelectStyle: 'group',
    tipLabel: 'Legend' // Optional label for button
});
map.addControl(layerSwitcher);

var scaleLine = new ol.control.ScaleLine({
});
map.addControl(scaleLine)

map.addControl(layerSwitcher);
map.addLayer(lulcGroupLayer);
map.addLayer(lstGroupLayer);
map.addLayer(ndviGroupLayer);
map.addLayer(administrativeGroupLayer);
map.addLayer(baseMapLayerGroup);

function loadAllLegends(){
    let layers = map.getAllLayers()
    layers.forEach(function(lyr){
      
        if (lyr.getSource() && lyr.getSource().getLegendUrl) {
            const graphicUrl = lyr.getSource().getLegendUrl(map.getView().getResolution());
            let img = document.createElement("img")
            img.src = graphicUrl
            document.querySelector("#legend").appendChild(img)
            if(lyr.getVisible() == false){
                img.style.display = 'none'
            }
            lyr.on('change:visible', function(event){
               
                if(event.target.getVisible() == true){
                    img.style.display = 'block'
                }
                else{
                    img.style.display = 'none'
                }
            })
        }
    });
}
loadAllLegends();