<template>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    @click="toggleDropdown">
                Menu
            </button>
            <ul id="dropdown-menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="active">
                <navbar-dropdown-link
                    v-for="(panel, index) in $parent.panels"
                    @click="updatePanel(panel.panelid, panel.position)"
                    :key="index + 1"
                    :panelid="panel.panelid"
                    :name="panel.name"
                    :glyphicon="panel.glyphicon">
                </navbar-dropdown-link>

            </ul>
            <a class="navbar-brand mb-0 h1" href="#" >Geodata</a>
        </div>

        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

    </nav>
</template>

<script>
import NavbarDropdownLink from "@/components/NavbarDropdownLink.vue";
export default {
    name: `Navbar`,
    data() {
        return {
            active: false
        };
    },
    methods:{
        updatePanel: function(panelid, position){
            this.$emit('panel-change', panelid, position);
        },
        toggleDropdown(){
            this.active = !this.active
        }
    },
    components:{'navbar-dropdown-link': NavbarDropdownLink}
}
</script>

<style scoped>
ul {
    display: block;
}
</style>