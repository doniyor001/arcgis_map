<template>
    <div>
        <p>{{greeting}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            greeting: "Geodata"
        };
    }
};
</script>
<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>