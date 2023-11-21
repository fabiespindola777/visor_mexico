var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mexico_municipios_1 = new ol.format.GeoJSON();
var features_mexico_municipios_1 = format_mexico_municipios_1.readFeatures(json_mexico_municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mexico_municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mexico_municipios_1.addFeatures(features_mexico_municipios_1);
var lyr_mexico_municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mexico_municipios_1, 
                style: style_mexico_municipios_1,
                interactive: true,
    title: 'mexico_municipios<br />\
    <img src="styles/legend/mexico_municipios_1_0.png" /> 0 - 70<br />\
    <img src="styles/legend/mexico_municipios_1_1.png" /> 70 - 262<br />\
    <img src="styles/legend/mexico_municipios_1_2.png" /> 262 - 596<br />\
    <img src="styles/legend/mexico_municipios_1_3.png" /> 596 - 1153<br />\
    <img src="styles/legend/mexico_municipios_1_4.png" /> 1153 - 1766<br />'
        });
var format_cuerpos_agua_2 = new ol.format.GeoJSON();
var features_cuerpos_agua_2 = format_cuerpos_agua_2.readFeatures(json_cuerpos_agua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuerpos_agua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuerpos_agua_2.addFeatures(features_cuerpos_agua_2);
var lyr_cuerpos_agua_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuerpos_agua_2, 
                style: style_cuerpos_agua_2,
                interactive: true,
                title: '<img src="styles/legend/cuerpos_agua_2.png" /> cuerpos_agua'
            });
var format_rutas_3 = new ol.format.GeoJSON();
var features_rutas_3 = format_rutas_3.readFeatures(json_rutas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_3.addFeatures(features_rutas_3);
var lyr_rutas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rutas_3, 
                style: style_rutas_3,
                interactive: true,
                title: '<img src="styles/legend/rutas_3.png" /> rutas'
            });
var format_red_ferroviaria_4 = new ol.format.GeoJSON();
var features_red_ferroviaria_4 = format_red_ferroviaria_4.readFeatures(json_red_ferroviaria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_ferroviaria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_ferroviaria_4.addFeatures(features_red_ferroviaria_4);
var lyr_red_ferroviaria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_red_ferroviaria_4, 
                style: style_red_ferroviaria_4,
                interactive: true,
                title: '<img src="styles/legend/red_ferroviaria_4.png" /> red_ferroviaria'
            });
var format_Rios_5 = new ol.format.GeoJSON();
var features_Rios_5 = format_Rios_5.readFeatures(json_Rios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_5.addFeatures(features_Rios_5);
var lyr_Rios_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_5, 
                style: style_Rios_5,
                interactive: true,
                title: '<img src="styles/legend/Rios_5.png" /> Rios'
            });
var format_Aeropuertos_6 = new ol.format.GeoJSON();
var features_Aeropuertos_6 = format_Aeropuertos_6.readFeatures(json_Aeropuertos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeropuertos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_6.addFeatures(features_Aeropuertos_6);
var lyr_Aeropuertos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeropuertos_6, 
                style: style_Aeropuertos_6,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_6.png" /> Aeropuertos'
            });
var format_Puertos_7 = new ol.format.GeoJSON();
var features_Puertos_7 = format_Puertos_7.readFeatures(json_Puertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puertos_7.addFeatures(features_Puertos_7);
var lyr_Puertos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puertos_7, 
                style: style_Puertos_7,
                interactive: true,
                title: '<img src="styles/legend/Puertos_7.png" /> Puertos'
            });
var format_Capital_8 = new ol.format.GeoJSON();
var features_Capital_8 = format_Capital_8.readFeatures(json_Capital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_8.addFeatures(features_Capital_8);
var lyr_Capital_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capital_8, 
                style: style_Capital_8,
                interactive: true,
                title: '<img src="styles/legend/Capital_8.png" /> Capital'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mexico_municipios_1.setVisible(true);lyr_cuerpos_agua_2.setVisible(true);lyr_rutas_3.setVisible(true);lyr_red_ferroviaria_4.setVisible(true);lyr_Rios_5.setVisible(true);lyr_Aeropuertos_6.setVisible(true);lyr_Puertos_7.setVisible(true);lyr_Capital_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mexico_municipios_1,lyr_cuerpos_agua_2,lyr_rutas_3,lyr_red_ferroviaria_4,lyr_Rios_5,lyr_Aeropuertos_6,lyr_Puertos_7,lyr_Capital_8];
lyr_mexico_municipios_1.set('fieldAliases', {'nom_mun': 'nom_mun', 'p_total': 'p_total', 'pob x km2': 'pob x km2', });
lyr_cuerpos_agua_2.set('fieldAliases', {'gid': 'gid', 'tipo': 'tipo', 'area': 'area', 'perimetro': 'perimetro', });
lyr_rutas_3.set('fieldAliases', {'gid': 'gid', 'nom_tramo': 'nom_tramo', 'ruta': 'ruta', });
lyr_red_ferroviaria_4.set('fieldAliases', {'gid': 'gid', 'nom_tram': 'nom_tram', });
lyr_Rios_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_Aeropuertos_6.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', });
lyr_Puertos_7.set('fieldAliases', {'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', });
lyr_Capital_8.set('fieldAliases', {'Name': 'Name', });
lyr_mexico_municipios_1.set('fieldImages', {'nom_mun': 'TextEdit', 'p_total': 'TextEdit', 'pob x km2': 'Range', });
lyr_cuerpos_agua_2.set('fieldImages', {'gid': 'Range', 'tipo': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_rutas_3.set('fieldImages', {'gid': 'Range', 'nom_tramo': 'TextEdit', 'ruta': 'TextEdit', });
lyr_red_ferroviaria_4.set('fieldImages', {'gid': 'Range', 'nom_tram': 'TextEdit', });
lyr_Rios_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'TextEdit', });
lyr_Aeropuertos_6.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Puertos_7.set('fieldImages', {'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Capital_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_mexico_municipios_1.set('fieldLabels', {'nom_mun': 'header label', 'p_total': 'header label', 'pob x km2': 'header label', });
lyr_cuerpos_agua_2.set('fieldLabels', {'gid': 'header label', 'tipo': 'header label', 'area': 'header label', 'perimetro': 'header label', });
lyr_rutas_3.set('fieldLabels', {'gid': 'header label', 'nom_tramo': 'header label', 'ruta': 'header label', });
lyr_red_ferroviaria_4.set('fieldLabels', {'gid': 'no label', 'nom_tram': 'no label', });
lyr_Rios_5.set('fieldLabels', {'NOMBRE': 'header label', 'CUENCA': 'header label', });
lyr_Aeropuertos_6.set('fieldLabels', {'ID': 'header label', 'NOMBRE': 'header label', });
lyr_Puertos_7.set('fieldLabels', {'ID': 'header label', 'MUNICIPIO': 'header label', 'TIPO': 'header label', 'NOMBRE': 'header label', });
lyr_Capital_8.set('fieldLabels', {'Name': 'header label', });
lyr_Capital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});