<template>
    <transition name="slide-fade">
        <div class="card"
             v-show="($parent.activePanels.map(panel=>panel.panelid)).includes(panelid)"
             v-bind:id="panelid"
             v-bind:class="position">
                <div id="headingInfo" class="card-header" role="tab">
                    <div class="card-title">
                        <a class="panel-toggle" role="button"  aria-expanded="true" ><span :class="glyphicon" aria-hidden="true"></span><span class="panel-label">{{title}}</span></a>
                        <a class="panel-close" role="button" v-on:click="removePanel" tabindex="0" ><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>
                    </div>
                </div>
                <div id="collapseInfo" role="tabpanel" aria-labelledby="headingInfo">
                    <div class="card-body">
                        <slot></slot>
                    </div>
                </div>

        </div>
    </transition>
</template>

<script>
export default {
    name: `Panel`,
    props: ['panelid', 'title', 'glyphicon', "position"],
    data() {
        return {};
    },
    methods:{
        removePanel: function(){
            this.$parent.activePanels = this.$parent.activePanels.filter(panel=>panel.panelid!=this.panelid);
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.slide-fade-enter-active {
    transition-delay:.2s;
    transition: all .2s ease;
}

/* .slide-fade-leave-active {
  transition: all .2s ease;
} */
.slide-fade-enter /*.slide-fade-leave-to*/
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(400px);
}

.bottom .card-body {
    width: 100% !important;
    height: 250px !important;

}

.bottom{
    position: absolute;
    bottom: 0 !important;
    top:auto!important;
    left: 0 !important;
    right: 0 !important;
    z-index: 300 !important;
    margin-bottom: 0 !important;
    width: 1920px !important;
}


.card{
    display: block;
    left: 1555px;
    margin-bottom: 0px;
    position: absolute;
    right: 15px;
    top: 65px;
    width: 350px;
    z-index: 4;
    -webkit-font-smoothing: subpixel-antialiased;
}

</style>