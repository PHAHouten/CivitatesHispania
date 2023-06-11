ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102100").setExtent([-517608.607962, 4917708.253592, -125906.062080, 5264860.939106]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_StamenTerrainBackground_1 = new ol.layer.Tile({
            'title': 'Stamen Terrain Background',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://maps.stamen.com">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'https://stamen-tiles.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png'
            })
        });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                interactive: false,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_2_0.png" /> Main Road<br />\
    <img src="styles/legend/Roads_2_1.png" /> Secondary Road<br />'
        });
var format_Conventusboundaries_3 = new ol.format.GeoJSON();
var features_Conventusboundaries_3 = format_Conventusboundaries_3.readFeatures(json_Conventusboundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Conventusboundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conventusboundaries_3.addFeatures(features_Conventusboundaries_3);
var lyr_Conventusboundaries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conventusboundaries_3, 
                style: style_Conventusboundaries_3,
                interactive: false,
                title: '<img src="styles/legend/Conventusboundaries_3.png" /> Conventus boundaries'
            });
var format_Provincialboundaries_4 = new ol.format.GeoJSON();
var features_Provincialboundaries_4 = format_Provincialboundaries_4.readFeatures(json_Provincialboundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Provincialboundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincialboundaries_4.addFeatures(features_Provincialboundaries_4);
var lyr_Provincialboundaries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincialboundaries_4, 
                style: style_Provincialboundaries_4,
                interactive: false,
                title: '<img src="styles/legend/Provincialboundaries_4.png" /> Provincial boundaries'
            });
var format_Status_5 = new ol.format.GeoJSON();
var features_Status_5 = format_Status_5.readFeatures(json_Status_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102100'});
var jsonSource_Status_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Status_5.addFeatures(features_Status_5);
var lyr_Status_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Status_5, 
                style: style_Status_5,
                interactive: true,
    title: 'Status<br />\
    <img src="styles/legend/Status_5_0.png" /> Colonia<br />\
    <img src="styles/legend/Status_5_1.png" /> Municipium civium Romanorum<br />\
    <img src="styles/legend/Status_5_2.png" /> Municipium civium Romanorum (uncertain)<br />\
    <img src="styles/legend/Status_5_3.png" /> Municipium Latinum<br />\
    <img src="styles/legend/Status_5_4.png" /> Municipium Latinum (uncertain)<br />\
    <img src="styles/legend/Status_5_5.png" /> Municipium<br />\
    <img src="styles/legend/Status_5_6.png" /> Municipium (uncertain)<br />\
    <img src="styles/legend/Status_5_7.png" /> Civitas<br />\
    <img src="styles/legend/Status_5_8.png" /> Civitas (uncertain)<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_StamenTerrainBackground_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Conventusboundaries_3.setVisible(true);lyr_Provincialboundaries_4.setVisible(true);lyr_Status_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_StamenTerrainBackground_1,lyr_Roads_2,lyr_Conventusboundaries_3,lyr_Provincialboundaries_4,lyr_Status_5];
lyr_Roads_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'SOURCE': 'SOURCE', 'timeperiod': 'timeperiod', });
lyr_Conventusboundaries_3.set('fieldAliases', {'id': 'id', });
lyr_Provincialboundaries_4.set('fieldAliases', {'id': 'id', });
lyr_Status_5.set('fieldAliases', {'id': 'id', 'pleiades_i': 'pleiades_i', 'canon_name': 'canon_name', 'juridical_': 'juridical_', 'mapping_ti': 'mapping_ti', 'Status': 'Status', });
lyr_Roads_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'LAYER': 'TextEdit', 'SOURCE': 'TextEdit', 'timeperiod': 'TextEdit', });
lyr_Conventusboundaries_3.set('fieldImages', {'id': '', });
lyr_Provincialboundaries_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Status_5.set('fieldImages', {'id': 'TextEdit', 'pleiades_i': 'TextEdit', 'canon_name': 'TextEdit', 'juridical_': 'TextEdit', 'mapping_ti': 'TextEdit', 'Status': 'TextEdit', });
lyr_Roads_2.set('fieldLabels', {'OBJECTID': 'no label', 'LAYER': 'no label', 'SOURCE': 'no label', 'timeperiod': 'no label', });
lyr_Conventusboundaries_3.set('fieldLabels', {'id': 'no label', });
lyr_Provincialboundaries_4.set('fieldLabels', {'id': 'no label', });
lyr_Status_5.set('fieldLabels', {'id': 'no label', 'pleiades_i': 'inline label', 'canon_name': 'header label', 'juridical_': 'no label', 'mapping_ti': 'no label', 'Status': 'inline label', });
lyr_Status_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});