var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_CB_Coblong_1 = new ol.format.GeoJSON();
var features_CB_Coblong_1 = format_CB_Coblong_1.readFeatures(json_CB_Coblong_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CB_Coblong_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CB_Coblong_1.addFeatures(features_CB_Coblong_1);
var lyr_CB_Coblong_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CB_Coblong_1, 
                style: style_CB_Coblong_1,
                popuplayertitle: 'CB_Coblong',
                interactive: true,
                title: '<img src="styles/legend/CB_Coblong_1.png" /> CB_Coblong'
            });
var format_Polru_Coblong_2 = new ol.format.GeoJSON();
var features_Polru_Coblong_2 = format_Polru_Coblong_2.readFeatures(json_Polru_Coblong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polru_Coblong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polru_Coblong_2.addFeatures(features_Polru_Coblong_2);
var lyr_Polru_Coblong_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polru_Coblong_2, 
                style: style_Polru_Coblong_2,
                popuplayertitle: 'Polru_Coblong',
                interactive: true,
    title: 'Polru_Coblong<br />\
    <img src="styles/legend/Polru_Coblong_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/Polru_Coblong_2_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/Polru_Coblong_2_2.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/Polru_Coblong_2_3.png" /> Jalur Hijau<br />\
    <img src="styles/legend/Polru_Coblong_2_4.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/Polru_Coblong_2_5.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/Polru_Coblong_2_6.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/Polru_Coblong_2_7.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/Polru_Coblong_2_8.png" /> Perkantoran<br />\
    <img src="styles/legend/Polru_Coblong_2_9.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/Polru_Coblong_2_10.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/Polru_Coblong_2_11.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/Polru_Coblong_2_12.png" /> Perumahan Kepadatan Sangat Tinggi<br />\
    <img src="styles/legend/Polru_Coblong_2_13.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/Polru_Coblong_2_14.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/Polru_Coblong_2_15.png" /> Rimba Kota<br />\
    <img src="styles/legend/Polru_Coblong_2_16.png" /> Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/Polru_Coblong_2_17.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/Polru_Coblong_2_18.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/Polru_Coblong_2_19.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/Polru_Coblong_2_20.png" /> Taman Hutan Raya<br />\
    <img src="styles/legend/Polru_Coblong_2_21.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/Polru_Coblong_2_22.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/Polru_Coblong_2_23.png" /> Taman Kota<br />\
    <img src="styles/legend/Polru_Coblong_2_24.png" /> Transportasi<br />\
    <img src="styles/legend/Polru_Coblong_2_25.png" /> <br />' });
var format_Faskes_Coblong_3 = new ol.format.GeoJSON();
var features_Faskes_Coblong_3 = format_Faskes_Coblong_3.readFeatures(json_Faskes_Coblong_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Faskes_Coblong_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faskes_Coblong_3.addFeatures(features_Faskes_Coblong_3);
var lyr_Faskes_Coblong_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Faskes_Coblong_3, 
                style: style_Faskes_Coblong_3,
                popuplayertitle: 'Faskes_Coblong',
                interactive: true,
                title: '<img src="styles/legend/Faskes_Coblong_3.png" /> Faskes_Coblong'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_CB_Coblong_1.setVisible(true);lyr_Polru_Coblong_2.setVisible(true);lyr_Faskes_Coblong_3.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_CB_Coblong_1,lyr_Polru_Coblong_2,lyr_Faskes_Coblong_3];
lyr_CB_Coblong_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'namobj': 'namobj', 'namzon': 'namzon', 'kodzon': 'kodzon', 'namszn': 'namszn', 'kodszn': 'kodszn', 'jnsrpr': 'jnsrpr', 'kodewp': 'kodewp', 'kodswp': 'kodswp', 'kodblk': 'kodblk', 'kodsbl': 'kodsbl', 'wadmpr': 'wadmpr', 'wadmkk': 'wadmkk', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'kkop_1': 'kkop_1', 'lp2b_2': 'lp2b_2', 'krb_03': 'krb_03', 'tod_04': 'tod_04', 'teb_05': 'teb_05', 'puslit': 'puslit', 'cagbud': 'cagbud', 'resair': 'resair', 'ksmpdn': 'ksmpdn', 'hankam': 'hankam', 'kkarst': 'kkarst', 'ptbgmb': 'ptbgmb', 'mgrsat': 'mgrsat', 'rdbumi': 'rdbumi', 'tpz_00': 'tpz_00', 'remark': 'remark', 'luasha': 'luasha', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'pl': 'pl', 'kd_kkop': 'kd_kkop', 'kd_lp2b': 'kd_lp2b', 'kd_krb': 'kd_krb', 'kd_teb': 'kd_teb', 'kd_cagbud': 'kd_cagbud', 'kd_resair': 'kd_resair', 'kd_smpd': 'kd_smpd', 'kd_hnkm': 'kd_hnkm', 'kd_tpz': 'kd_tpz', 'kod_unq': 'kod_unq', 'd_namzon': 'd_namzon', 'd_kodzon': 'd_kodzon', 'd_namszn': 'd_namszn', 'd_kodszn': 'd_kodszn', 'd_jnsrpr': 'd_jnsrpr', 'd_kodsbl': 'd_kodsbl', 'd_kkop_1': 'd_kkop_1', 'd_lp2b_2': 'd_lp2b_2', 'd_krb_03': 'd_krb_03', 'd_tod_04': 'd_tod_04', 'd_teb_05': 'd_teb_05', 'd_puslit': 'd_puslit', 'd_cagbud': 'd_cagbud', 'd_resair': 'd_resair', 'd_ksmpdn': 'd_ksmpdn', 'd_hankam': 'd_hankam', 'd_kkarst': 'd_kkarst', 'd_ptbgmb': 'd_ptbgmb', 'd_mgrsat': 'd_mgrsat', 'd_rdbumi': 'd_rdbumi', });
lyr_Polru_Coblong_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'namobj': 'namobj', 'namzon': 'namzon', 'kodzon': 'kodzon', 'namszn': 'namszn', 'kodszn': 'kodszn', 'jnsrpr': 'jnsrpr', 'kodewp': 'kodewp', 'kodswp': 'kodswp', 'kodblk': 'kodblk', 'kodsbl': 'kodsbl', 'wadmpr': 'wadmpr', 'wadmkk': 'wadmkk', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'kkop_1': 'kkop_1', 'lp2b_2': 'lp2b_2', 'krb_03': 'krb_03', 'tod_04': 'tod_04', 'teb_05': 'teb_05', 'puslit': 'puslit', 'cagbud': 'cagbud', 'resair': 'resair', 'ksmpdn': 'ksmpdn', 'hankam': 'hankam', 'kkarst': 'kkarst', 'ptbgmb': 'ptbgmb', 'mgrsat': 'mgrsat', 'rdbumi': 'rdbumi', 'tpz_00': 'tpz_00', 'remark': 'remark', 'luasha': 'luasha', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'pl': 'pl', 'kd_kkop': 'kd_kkop', 'kd_lp2b': 'kd_lp2b', 'kd_krb': 'kd_krb', 'kd_teb': 'kd_teb', 'kd_cagbud': 'kd_cagbud', 'kd_resair': 'kd_resair', 'kd_smpd': 'kd_smpd', 'kd_hnkm': 'kd_hnkm', 'kd_tpz': 'kd_tpz', 'kod_unq': 'kod_unq', 'd_namzon': 'd_namzon', 'd_kodzon': 'd_kodzon', 'd_namszn': 'd_namszn', 'd_kodszn': 'd_kodszn', 'd_jnsrpr': 'd_jnsrpr', 'd_kodsbl': 'd_kodsbl', 'd_kkop_1': 'd_kkop_1', 'd_lp2b_2': 'd_lp2b_2', 'd_krb_03': 'd_krb_03', 'd_tod_04': 'd_tod_04', 'd_teb_05': 'd_teb_05', 'd_puslit': 'd_puslit', 'd_cagbud': 'd_cagbud', 'd_resair': 'd_resair', 'd_ksmpdn': 'd_ksmpdn', 'd_hankam': 'd_hankam', 'd_kkarst': 'd_kkarst', 'd_ptbgmb': 'd_ptbgmb', 'd_mgrsat': 'd_mgrsat', 'd_rdbumi': 'd_rdbumi', });
lyr_Faskes_Coblong_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_CB_Coblong_1.set('fieldImages', {'ogc_fid': '', 'namobj': '', 'namzon': '', 'kodzon': '', 'namszn': '', 'kodszn': '', 'jnsrpr': '', 'kodewp': '', 'kodswp': '', 'kodblk': '', 'kodsbl': '', 'wadmpr': '', 'wadmkk': '', 'wadmkc': '', 'wadmkd': '', 'kkop_1': '', 'lp2b_2': '', 'krb_03': '', 'tod_04': '', 'teb_05': '', 'puslit': '', 'cagbud': '', 'resair': '', 'ksmpdn': '', 'hankam': '', 'kkarst': '', 'ptbgmb': '', 'mgrsat': '', 'rdbumi': '', 'tpz_00': '', 'remark': '', 'luasha': '', 'shape_leng': '', 'shape_area': '', 'pl': '', 'kd_kkop': '', 'kd_lp2b': '', 'kd_krb': '', 'kd_teb': '', 'kd_cagbud': '', 'kd_resair': '', 'kd_smpd': '', 'kd_hnkm': '', 'kd_tpz': '', 'kod_unq': '', 'd_namzon': '', 'd_kodzon': '', 'd_namszn': '', 'd_kodszn': '', 'd_jnsrpr': '', 'd_kodsbl': '', 'd_kkop_1': '', 'd_lp2b_2': '', 'd_krb_03': '', 'd_tod_04': '', 'd_teb_05': '', 'd_puslit': '', 'd_cagbud': '', 'd_resair': '', 'd_ksmpdn': '', 'd_hankam': '', 'd_kkarst': '', 'd_ptbgmb': '', 'd_mgrsat': '', 'd_rdbumi': '', });
lyr_Polru_Coblong_2.set('fieldImages', {'ogc_fid': 'Range', 'namobj': 'TextEdit', 'namzon': 'TextEdit', 'kodzon': 'TextEdit', 'namszn': 'TextEdit', 'kodszn': 'TextEdit', 'jnsrpr': 'TextEdit', 'kodewp': 'TextEdit', 'kodswp': 'TextEdit', 'kodblk': 'TextEdit', 'kodsbl': 'TextEdit', 'wadmpr': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'kkop_1': 'TextEdit', 'lp2b_2': 'TextEdit', 'krb_03': 'TextEdit', 'tod_04': 'TextEdit', 'teb_05': 'TextEdit', 'puslit': 'TextEdit', 'cagbud': 'TextEdit', 'resair': 'TextEdit', 'ksmpdn': 'TextEdit', 'hankam': 'TextEdit', 'kkarst': 'TextEdit', 'ptbgmb': 'TextEdit', 'mgrsat': 'TextEdit', 'rdbumi': 'TextEdit', 'tpz_00': 'TextEdit', 'remark': 'TextEdit', 'luasha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'pl': 'TextEdit', 'kd_kkop': 'TextEdit', 'kd_lp2b': 'TextEdit', 'kd_krb': 'TextEdit', 'kd_teb': 'TextEdit', 'kd_cagbud': 'TextEdit', 'kd_resair': 'TextEdit', 'kd_smpd': 'TextEdit', 'kd_hnkm': 'TextEdit', 'kd_tpz': 'TextEdit', 'kod_unq': 'TextEdit', 'd_namzon': 'TextEdit', 'd_kodzon': 'TextEdit', 'd_namszn': 'TextEdit', 'd_kodszn': 'TextEdit', 'd_jnsrpr': 'TextEdit', 'd_kodsbl': 'TextEdit', 'd_kkop_1': 'TextEdit', 'd_lp2b_2': 'TextEdit', 'd_krb_03': 'TextEdit', 'd_tod_04': 'TextEdit', 'd_teb_05': 'TextEdit', 'd_puslit': 'TextEdit', 'd_cagbud': 'TextEdit', 'd_resair': 'TextEdit', 'd_ksmpdn': 'TextEdit', 'd_hankam': 'TextEdit', 'd_kkarst': 'TextEdit', 'd_ptbgmb': 'TextEdit', 'd_mgrsat': 'TextEdit', 'd_rdbumi': 'TextEdit', });
lyr_Faskes_Coblong_3.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', });
lyr_CB_Coblong_1.set('fieldLabels', {'ogc_fid': 'no label', 'namobj': 'no label', 'namzon': 'no label', 'kodzon': 'no label', 'namszn': 'no label', 'kodszn': 'no label', 'jnsrpr': 'no label', 'kodewp': 'no label', 'kodswp': 'no label', 'kodblk': 'no label', 'kodsbl': 'no label', 'wadmpr': 'no label', 'wadmkk': 'no label', 'wadmkc': 'no label', 'wadmkd': 'no label', 'kkop_1': 'no label', 'lp2b_2': 'no label', 'krb_03': 'no label', 'tod_04': 'no label', 'teb_05': 'no label', 'puslit': 'no label', 'cagbud': 'no label', 'resair': 'no label', 'ksmpdn': 'no label', 'hankam': 'no label', 'kkarst': 'no label', 'ptbgmb': 'no label', 'mgrsat': 'no label', 'rdbumi': 'no label', 'tpz_00': 'no label', 'remark': 'no label', 'luasha': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'pl': 'no label', 'kd_kkop': 'no label', 'kd_lp2b': 'no label', 'kd_krb': 'no label', 'kd_teb': 'no label', 'kd_cagbud': 'no label', 'kd_resair': 'no label', 'kd_smpd': 'no label', 'kd_hnkm': 'no label', 'kd_tpz': 'no label', 'kod_unq': 'no label', 'd_namzon': 'no label', 'd_kodzon': 'no label', 'd_namszn': 'no label', 'd_kodszn': 'no label', 'd_jnsrpr': 'no label', 'd_kodsbl': 'no label', 'd_kkop_1': 'no label', 'd_lp2b_2': 'no label', 'd_krb_03': 'no label', 'd_tod_04': 'no label', 'd_teb_05': 'no label', 'd_puslit': 'no label', 'd_cagbud': 'no label', 'd_resair': 'no label', 'd_ksmpdn': 'no label', 'd_hankam': 'no label', 'd_kkarst': 'no label', 'd_ptbgmb': 'no label', 'd_mgrsat': 'no label', 'd_rdbumi': 'no label', });
lyr_Polru_Coblong_2.set('fieldLabels', {'ogc_fid': 'no label', 'namobj': 'no label', 'namzon': 'no label', 'kodzon': 'no label', 'namszn': 'no label', 'kodszn': 'no label', 'jnsrpr': 'no label', 'kodewp': 'no label', 'kodswp': 'no label', 'kodblk': 'no label', 'kodsbl': 'no label', 'wadmpr': 'no label', 'wadmkk': 'no label', 'wadmkc': 'no label', 'wadmkd': 'no label', 'kkop_1': 'no label', 'lp2b_2': 'no label', 'krb_03': 'no label', 'tod_04': 'no label', 'teb_05': 'no label', 'puslit': 'no label', 'cagbud': 'no label', 'resair': 'no label', 'ksmpdn': 'no label', 'hankam': 'no label', 'kkarst': 'no label', 'ptbgmb': 'no label', 'mgrsat': 'no label', 'rdbumi': 'no label', 'tpz_00': 'no label', 'remark': 'no label', 'luasha': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'pl': 'no label', 'kd_kkop': 'no label', 'kd_lp2b': 'no label', 'kd_krb': 'no label', 'kd_teb': 'no label', 'kd_cagbud': 'no label', 'kd_resair': 'no label', 'kd_smpd': 'no label', 'kd_hnkm': 'no label', 'kd_tpz': 'no label', 'kod_unq': 'no label', 'd_namzon': 'no label', 'd_kodzon': 'no label', 'd_namszn': 'no label', 'd_kodszn': 'no label', 'd_jnsrpr': 'no label', 'd_kodsbl': 'no label', 'd_kkop_1': 'no label', 'd_lp2b_2': 'no label', 'd_krb_03': 'no label', 'd_tod_04': 'no label', 'd_teb_05': 'no label', 'd_puslit': 'no label', 'd_cagbud': 'no label', 'd_resair': 'no label', 'd_ksmpdn': 'no label', 'd_hankam': 'no label', 'd_kkarst': 'no label', 'd_ptbgmb': 'no label', 'd_mgrsat': 'no label', 'd_rdbumi': 'no label', });
lyr_Faskes_Coblong_3.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_Faskes_Coblong_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});