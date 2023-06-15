var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DemografiKelurahan_2 = new ol.format.GeoJSON();
var features_DemografiKelurahan_2 = format_DemografiKelurahan_2.readFeatures(json_DemografiKelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemografiKelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemografiKelurahan_2.addFeatures(features_DemografiKelurahan_2);
var lyr_DemografiKelurahan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DemografiKelurahan_2, 
                style: style_DemografiKelurahan_2,
                interactive: true,
                title: '<img src="styles/legend/DemografiKelurahan_2.png" /> Demografi Kelurahan'
            });
var lyr_KepadatanPenduduk_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kepadatan Penduduk",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KepadatanPenduduk_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11879667.096861, -720896.334470, 11902137.096861, -704353.609254]
                            })
                        });
var lyr_RawanGempaInarisk_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rawan Gempa (Inarisk)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RawanGempaInarisk_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11879677.000000, -720890.606060, 11902077.000000, -704381.446778]
                            })
                        });
var format_RawanLongsor_5 = new ol.format.GeoJSON();
var features_RawanLongsor_5 = format_RawanLongsor_5.readFeatures(json_RawanLongsor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanLongsor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanLongsor_5.addFeatures(features_RawanLongsor_5);
var lyr_RawanLongsor_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanLongsor_5, 
                style: style_RawanLongsor_5,
                interactive: true,
                title: '<img src="styles/legend/RawanLongsor_5.png" /> Rawan Longsor'
            });
var format_StrukturGeologiESDM_6 = new ol.format.GeoJSON();
var features_StrukturGeologiESDM_6 = format_StrukturGeologiESDM_6.readFeatures(json_StrukturGeologiESDM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturGeologiESDM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrukturGeologiESDM_6.addFeatures(features_StrukturGeologiESDM_6);
var lyr_StrukturGeologiESDM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrukturGeologiESDM_6, 
                style: style_StrukturGeologiESDM_6,
                interactive: true,
    title: 'Struktur Geologi (ESDM)<br />\
    <img src="styles/legend/StrukturGeologiESDM_6_0.png" /> Kelurusan<br />\
    <img src="styles/legend/StrukturGeologiESDM_6_1.png" /> Lipatan<br />\
    <img src="styles/legend/StrukturGeologiESDM_6_2.png" /> Patahan<br />'
        });
var format_RumahSakit_7 = new ol.format.GeoJSON();
var features_RumahSakit_7 = format_RumahSakit_7.readFeatures(json_RumahSakit_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_7.addFeatures(features_RumahSakit_7);
var lyr_RumahSakit_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_7, 
                style: style_RumahSakit_7,
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_7.png" /> Rumah Sakit'
            });
var format_SesarBaribis_8 = new ol.format.GeoJSON();
var features_SesarBaribis_8 = format_SesarBaribis_8.readFeatures(json_SesarBaribis_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SesarBaribis_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SesarBaribis_8.addFeatures(features_SesarBaribis_8);
var lyr_SesarBaribis_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SesarBaribis_8, 
                style: style_SesarBaribis_8,
                interactive: true,
                title: '<img src="styles/legend/SesarBaribis_8.png" /> Sesar Baribis'
            });
var format_RiwayatGempa18002023USGS_9 = new ol.format.GeoJSON();
var features_RiwayatGempa18002023USGS_9 = format_RiwayatGempa18002023USGS_9.readFeatures(json_RiwayatGempa18002023USGS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiwayatGempa18002023USGS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiwayatGempa18002023USGS_9.addFeatures(features_RiwayatGempa18002023USGS_9);
var lyr_RiwayatGempa18002023USGS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiwayatGempa18002023USGS_9, 
                style: style_RiwayatGempa18002023USGS_9,
                interactive: true,
    title: 'Riwayat Gempa 1800-2023 (USGS)<br />\
    <img src="styles/legend/RiwayatGempa18002023USGS_9_0.png" /> 3,9 - 4,5<br />\
    <img src="styles/legend/RiwayatGempa18002023USGS_9_1.png" /> 4,5 - 5<br />\
    <img src="styles/legend/RiwayatGempa18002023USGS_9_2.png" /> 5 - 6<br />'
        });
var format_BatasKabupaten_10 = new ol.format.GeoJSON();
var features_BatasKabupaten_10 = format_BatasKabupaten_10.readFeatures(json_BatasKabupaten_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_10.addFeatures(features_BatasKabupaten_10);
var lyr_BatasKabupaten_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabupaten_10, 
                style: style_BatasKabupaten_10,
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_10.png" /> Batas Kabupaten'
            });
var format_BatasKelurahan_11 = new ol.format.GeoJSON();
var features_BatasKelurahan_11 = format_BatasKelurahan_11.readFeatures(json_BatasKelurahan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_11.addFeatures(features_BatasKelurahan_11);
var lyr_BatasKelurahan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKelurahan_11, 
                style: style_BatasKelurahan_11,
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_11.png" /> Batas Kelurahan'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_DemografiKelurahan_2.setVisible(true);lyr_KepadatanPenduduk_3.setVisible(false);lyr_RawanGempaInarisk_4.setVisible(false);lyr_RawanLongsor_5.setVisible(false);lyr_StrukturGeologiESDM_6.setVisible(false);lyr_RumahSakit_7.setVisible(false);lyr_SesarBaribis_8.setVisible(false);lyr_RiwayatGempa18002023USGS_9.setVisible(false);lyr_BatasKabupaten_10.setVisible(true);lyr_BatasKelurahan_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_DemografiKelurahan_2,lyr_KepadatanPenduduk_3,lyr_RawanGempaInarisk_4,lyr_RawanLongsor_5,lyr_StrukturGeologiESDM_6,lyr_RumahSakit_7,lyr_SesarBaribis_8,lyr_RiwayatGempa18002023USGS_9,lyr_BatasKabupaten_10,lyr_BatasKelurahan_11];
lyr_DemografiKelurahan_2.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKD': 'Desa', 'WADMKK': 'Kabkot', 'jumlah_pen': 'Jumlah Penduduk', 'jumlah_kk': 'Jumlah KK', 'u0': 'Jumlah Penduduk Umur 0-5', 'u5': 'Jumlah Penduduk Umur 5-10', 'u10': 'Jumlah Penduduk Umur 10-15', 'u15': 'Jumlah Penduduk Umur 15-20', 'u20': 'Jumlah Penduduk Umur 20-25', 'u25': 'Jumlah Penduduk Umur 25-30', 'u30': 'Jumlah Penduduk Umur 30-35', 'u35': 'Jumlah Penduduk Umur 35-40', 'u40': 'Jumlah Penduduk Umur 40-45', 'u45': 'Jumlah Penduduk Umur 45-50', 'u50': 'Jumlah Penduduk Umur 50-55', 'u55': 'Jumlah Penduduk Umur 55-60', 'u60': 'Jumlah Penduduk Umur 60-65', 'u65': 'Jumlah Penduduk Umur 65-70', 'u70': 'Jumlah Penduduk Umur 70-75', 'u75': 'Jumlah Penduduk Umur >75', });
lyr_RawanLongsor_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ket': 'ket', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', });
lyr_StrukturGeologiESDM_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'fcode': 'fcode', 'namobj': 'namobj', 'klsstr': 'klsstr', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'st_length_': 'st_length_', 'st_length1': 'st_length1', 'Shape_Leng': 'Shape_Leng', });
lyr_RumahSakit_7.set('fieldAliases', {'NAME': 'NAME', 'koordinat': 'koordinat', 'arah': 'arah', 'foto': 'foto', 'rute': 'rute', });
lyr_SesarBaribis_8.set('fieldAliases', {'Id': 'Id', 'Sesar': 'Sesar', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_RiwayatGempa18002023USGS_9.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontal': 'horizontal', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSo': 'locationSo', 'magSource': 'magSource', });
lyr_BatasKabupaten_10.set('fieldAliases', {'WADMKK': 'Kabupaten', 'WADMPR': 'Provinsi', });
lyr_BatasKelurahan_11.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKD': 'Desa', 'WADMKK': 'Kabkot', 'jumlah_pen': 'Jumlah Penduduk', 'jumlah_kk': 'Jumlah KK', 'u0': 'Jumlah Penduduk Umur 0-5', 'u5': 'Jumlah Penduduk Umur 5-10', 'u10': 'Jumlah Penduduk Umur 10-15', 'u15': 'Jumlah Penduduk Umur 15-20', 'u20': 'Jumlah Penduduk Umur 20-25', 'u25': 'Jumlah Penduduk Umur 25-30', 'u30': 'Jumlah Penduduk Umur 30-35', 'u35': 'Jumlah Penduduk Umur 35-40', 'u40': 'Jumlah Penduduk Umur 40-45', 'u45': 'Jumlah Penduduk Umur 45-50', 'u50': 'Jumlah Penduduk Umur 50-55', 'u55': 'Jumlah Penduduk Umur 55-60', 'u60': 'Jumlah Penduduk Umur 60-65', 'u65': 'Jumlah Penduduk Umur 65-70', 'u70': 'Jumlah Penduduk Umur 70-75', 'u75': 'Jumlah Penduduk Umur >75', });
lyr_DemografiKelurahan_2.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'jumlah_pen': 'TextEdit', 'jumlah_kk': 'TextEdit', 'u0': 'TextEdit', 'u5': 'TextEdit', 'u10': 'TextEdit', 'u15': 'TextEdit', 'u20': 'TextEdit', 'u25': 'TextEdit', 'u30': 'TextEdit', 'u35': 'TextEdit', 'u40': 'TextEdit', 'u45': 'TextEdit', 'u50': 'TextEdit', 'u55': 'TextEdit', 'u60': 'TextEdit', 'u65': 'TextEdit', 'u70': 'TextEdit', 'u75': 'TextEdit', });
lyr_RawanLongsor_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ket': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', });
lyr_StrukturGeologiESDM_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'klsstr': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'st_length_': 'TextEdit', 'st_length1': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_RumahSakit_7.set('fieldImages', {'NAME': 'TextEdit', 'koordinat': 'TextEdit', 'arah': 'TextEdit', 'foto': 'ExternalResource', 'rute': 'TextEdit', });
lyr_SesarBaribis_8.set('fieldImages', {'Id': 'Range', 'Sesar': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_RiwayatGempa18002023USGS_9.set('fieldImages', {'time': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'TextEdit', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontal': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'TextEdit', 'status': 'TextEdit', 'locationSo': 'TextEdit', 'magSource': 'TextEdit', });
lyr_BatasKabupaten_10.set('fieldImages', {'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_BatasKelurahan_11.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'jumlah_pen': 'TextEdit', 'jumlah_kk': 'TextEdit', 'u0': 'TextEdit', 'u5': 'TextEdit', 'u10': 'TextEdit', 'u15': 'TextEdit', 'u20': 'TextEdit', 'u25': 'TextEdit', 'u30': 'TextEdit', 'u35': 'TextEdit', 'u40': 'TextEdit', 'u45': 'TextEdit', 'u50': 'TextEdit', 'u55': 'TextEdit', 'u60': 'TextEdit', 'u65': 'TextEdit', 'u70': 'TextEdit', 'u75': 'TextEdit', });
lyr_DemografiKelurahan_2.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'jumlah_pen': 'inline label', 'jumlah_kk': 'inline label', 'u0': 'inline label', 'u5': 'inline label', 'u10': 'inline label', 'u15': 'inline label', 'u20': 'inline label', 'u25': 'inline label', 'u30': 'inline label', 'u35': 'inline label', 'u40': 'inline label', 'u45': 'inline label', 'u50': 'inline label', 'u55': 'inline label', 'u60': 'inline label', 'u65': 'inline label', 'u70': 'inline label', 'u75': 'inline label', });
lyr_RawanLongsor_5.set('fieldLabels', {'OBJECTID': 'inline label', 'ket': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'luas': 'inline label', });
lyr_StrukturGeologiESDM_6.set('fieldLabels', {'OBJECTID_1': 'inline label', 'objectid_2': 'inline label', 'objectid': 'inline label', 'fcode': 'inline label', 'namobj': 'inline label', 'klsstr': 'inline label', 'remark': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'st_length_': 'inline label', 'st_length1': 'inline label', 'Shape_Leng': 'inline label', });
lyr_RumahSakit_7.set('fieldLabels', {'NAME': 'inline label', 'koordinat': 'inline label', 'arah': 'inline label', 'foto': 'inline label', 'rute': 'inline label', });
lyr_SesarBaribis_8.set('fieldLabels', {'Id': 'inline label', 'Sesar': 'inline label', 'Keterangan': 'inline label', 'Sumber': 'inline label', });
lyr_RiwayatGempa18002023USGS_9.set('fieldLabels', {'time': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', 'depth': 'inline label', 'mag': 'inline label', 'magType': 'inline label', 'nst': 'inline label', 'gap': 'inline label', 'dmin': 'inline label', 'rms': 'inline label', 'net': 'inline label', 'id': 'inline label', 'updated': 'inline label', 'place': 'inline label', 'type': 'inline label', 'horizontal': 'inline label', 'depthError': 'inline label', 'magError': 'inline label', 'magNst': 'inline label', 'status': 'inline label', 'locationSo': 'inline label', 'magSource': 'inline label', });
lyr_BatasKabupaten_10.set('fieldLabels', {'WADMKK': 'inline label', 'WADMPR': 'inline label', });
lyr_BatasKelurahan_11.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'jumlah_pen': 'inline label', 'jumlah_kk': 'inline label', 'u0': 'inline label', 'u5': 'inline label', 'u10': 'inline label', 'u15': 'inline label', 'u20': 'inline label', 'u25': 'inline label', 'u30': 'inline label', 'u35': 'inline label', 'u40': 'inline label', 'u45': 'inline label', 'u50': 'inline label', 'u55': 'inline label', 'u60': 'inline label', 'u65': 'inline label', 'u70': 'inline label', 'u75': 'inline label', });
lyr_BatasKelurahan_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});