<template>
    <div class="mapViewDiv" id="mapViewDiv"></div>
</template>

<script>
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Home from "@arcgis/core/widgets/Home.js";

export default {
    name: 'WebMap',
    data() {
        return {
            vie: null,
        }
    },
    methods: {
        loadMap() {

            const map = new Map({
                basemap: "hybrid"
            });


            const popupTrailheads = {
                "title": "Data District",
                "content": "<b>Region_Soato:</b> {region_soato}<br><b>Region_Code:</b> {region_code}<br><b>Region_Name:</b> {region_name}<br><b>District_Soato:</b> {district_soato}<br><b>District_Code:</b> {district_code}<br>" +
                    "<b>District_Name:</b> {district_name}<br><b>Total_Count:</b> {total_count}<br><b>Total_Area:</b> {total_area}<br>"
            }

            let featureLayer1 = new FeatureLayer({
                url: "https://db.ngis.uz/db/rest/services/geodata_db_public_v_yer_elektron_data_by_district_v2_mat/FeatureServer/0",
                outFields: ["region_soato", "region_code", "region_name", "district_soato", "district_code", "district_name", "total_count", "total_area"],
                popupTemplate: popupTrailheads,
                minScale: 7000000,
                maxScale: 0
            });
            map.add(featureLayer1);

            const popupTrailheads2 = {
                "title": "Data Region",
                "content": "<b>Region_Soato:</b> {region_soato}<br><b>Region_Code:</b> {region_code}<br><b>Region_Name:</b> {region_name}<br><b>Total_Count:</b> {total_count}<br><b>Total_Area:</b> {total_area}<br>" +
                    "<b>Total_Area_1:</b> {total_area_1}<br><b>Total_Area_2:</b> {total_area_2}<br><b>Total_Area_3:</b> {total_area_3}<br>"
            }

            let featureLayer2 = new FeatureLayer({
                url: "https://db.ngis.uz/db/rest/services/geodata_db_public_v_yer_elektron_data_by_region_v2_mat/FeatureServer/0",
                outFields: ["region_soato", "region_code", "region_name", "total_count", "total_area", "total_area_1", "total_area_2", "total_area_3"],
                popupTemplate: popupTrailheads2,
                title: "Yer Elektron Regions",
                minScale: 0,
                maxScale: 7000001
            });
            map.add(featureLayer2);

            let mapView = new MapView({
                container: "mapViewDiv",
                map: map,
                center: [63.543517, 41.899446],
                zoom: 6,
                ui: { components: [] }
            });
            this.$parent.mapView = mapView;

            const home = new Home({
                view: mapView
            });
            mapView.ui.add(home, "top-left");

        }
    },
    watch: {},
    mounted: function() {
        this.loadMap();
    },

}
</script>

<style scoped>
@import url("https://js.arcgis.com/4.27/esri/themes/light/main.css");

.mapViewDiv {
    height: 100%;
    width: 100%;
}
</style>
