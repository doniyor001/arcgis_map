<template>
    <div id="app">
        <navbar @panel-change="handlePanel"></navbar>
        <esri-map></esri-map>
        <panel-template
                v-for="(panel, index) in panels"
                :title="panel.name"
                :panelid="panel.panelid"
                :glyphicon="panel.glyphicon"
                :key="index+1"
                :position="panel.position">
            <component
                    v-bind:is="panel.panelid"
                    v-bind:mapinfo="vie">
            </component>
        </panel-template>
    </div>
</template>

<script>
import WebMap from './components/WebMap.vue'
import Navbar from "./components/Navbar.vue";
import Panel from "./components/Panel.vue";

import InfoPanel from "./components/Panels/InfoPanel.vue";
import LegendPanel from "./components/Panels/LegendPanel.vue";
import ButtomPanel from "./components/Panels/ButtomPanel.vue";

export default {
    name: 'App',
    props: {
        msg: String,
    },
    methods: {
        handlePanel: function (chosenpanel, position) {
            //remove panel with same position
            this.activePanels = this.activePanels.filter(panel => panel.position != position);
            //get new panel
            let newPanel = this.panels.filter(panel => panel.panelid == chosenpanel);
            this.activePanels.push(newPanel[0])
        }
    },
    data() {
        return {
            panels: [
                {"panelid": "info-panel", "name": "About", "glyphicon": "fa-solid fa-water"},
                {"panelid": "legend-panel", "name": "Legend", "glyphicon": "fa-solid fa-water"},
                {"panelid": "buttom-panel", "name": "Bottom", "glyphicon": "fa-solid fa-water", "position": "bottom"},


            ],
            activePanels: [],
            //just used to map intialPanels to active panels so as not to repeat code...
            initialPanels: [],
            vie: null,
            title: "Geodata",

        }
    },


    components: {
        "buttom-panel": ButtomPanel,
        "navbar": Navbar,
        "panel-template": Panel,
        "esri-map": WebMap,
        "legend-panel": LegendPanel,
        "info-panel": InfoPanel
    },
    beforeMount: function () {
        this.activePanels = this.panels.filter((panel) => {
            let iPanels = this.initialPanels;
            return iPanels.includes(panel.panelid);
        });
    }
}
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

.esri-popup--is-docked-top-right .esri-popup__main-container {
    max-height: 100%;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
</style>
