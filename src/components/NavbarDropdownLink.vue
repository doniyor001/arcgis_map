<template>
    <li><a class="dropdown-item" href="#">
        <span :class="glyphicon">
        </span> {{name}}</a>
    </li>
</template>

<script>
export default {
    name: "NavbarDropdownLink",
    props:  ["datatarget", "name", "glyphicon"],
    data() {
        return {};
    }
};
</script>
