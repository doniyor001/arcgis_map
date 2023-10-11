<template>
    <div id="legendDiv"></div>
</template>
<script>


import Legend from "@arcgis/core/widgets/Legend.js";

export default {
    props:['mapinfo'],
    data() {
        return{}
    },
    methods: {
        createWidget() {
            new Legend({
                container: "legendDiv",
                view: this.mapinfo
            });
        }
    },
    watch: {
        mapinfo: function(){

            this.createWidget();
        }
    }
};
</script>
<style >
</style>