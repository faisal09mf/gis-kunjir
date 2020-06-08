var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_area1_0 = new ol.format.GeoJSON();
var features_area1_0 = format_area1_0.readFeatures(json_area1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area1_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_area1_0.addFeatures(features_area1_0);var lyr_area1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area1_0, 
                style: style_area1_0,
                title: '<img src="styles/legend/area1_0.png" /> area1'
            });var format_rumah1_1 = new ol.format.GeoJSON();
var features_rumah1_1 = format_rumah1_1.readFeatures(json_rumah1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah1_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah1_1.addFeatures(features_rumah1_1);cluster_rumah1_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_rumah1_1
});var lyr_rumah1_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_rumah1_1, 
                style: style_rumah1_1,
                title: '<img src="styles/legend/rumah1_1.png" /> rumah1'
            });var format_rumah2_2 = new ol.format.GeoJSON();
var features_rumah2_2 = format_rumah2_2.readFeatures(json_rumah2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah2_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah2_2.addFeatures(features_rumah2_2);cluster_rumah2_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_rumah2_2
});var lyr_rumah2_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_rumah2_2, 
                style: style_rumah2_2,
                title: '<img src="styles/legend/rumah2_2.png" /> rumah2'
            });var format_jalur1_3 = new ol.format.GeoJSON();
var features_jalur1_3 = format_jalur1_3.readFeatures(json_jalur1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalur1_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalur1_3.addFeatures(features_jalur1_3);var lyr_jalur1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalur1_3, 
                style: style_jalur1_3,
                title: '<img src="styles/legend/jalur1_3.png" /> jalur1'
            });

lyr_area1_0.setVisible(true);lyr_rumah1_1.setVisible(true);lyr_rumah2_2.setVisible(true);lyr_jalur1_3.setVisible(true);
var layersList = [baseLayer,lyr_area1_0,lyr_rumah1_1,lyr_rumah2_2,lyr_jalur1_3];
lyr_area1_0.set('fieldAliases', {'id': 'id', });
lyr_rumah1_1.set('fieldAliases', {'id': 'id', });
lyr_rumah2_2.set('fieldAliases', {'id': 'id', });
lyr_jalur1_3.set('fieldAliases', {'id': 'id', });
lyr_area1_0.set('fieldImages', {'id': 'WebView', });
lyr_rumah1_1.set('fieldImages', {'id': 'WebView', });
lyr_rumah2_2.set('fieldImages', {'id': 'WebView', });
lyr_jalur1_3.set('fieldImages', {'id': 'WebView', });
lyr_area1_0.set('fieldLabels', {'id': 'no label', });
lyr_rumah1_1.set('fieldLabels', {'id': 'no label', });
lyr_rumah2_2.set('fieldLabels', {'id': 'no label', });
lyr_jalur1_3.set('fieldLabels', {'id': 'no label', });
lyr_jalur1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});