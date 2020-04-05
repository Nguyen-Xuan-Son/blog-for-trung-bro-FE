<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <HeaderComponent />
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-9">
                        <ContentComponent />
                    </div>
                    <div class="col-md-3">
                        <SidebarComponent />
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <FooterComponent />
            </div>
        </div>
    </div>
</template>

<script>
import ContentComponent from "./layouts/content";
import FooterComponent from "./layouts/footer";
import HeaderComponent from "./layouts/header";
import SidebarComponent from "./layouts/sidebar";

export default {
    components: {
        ContentComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    },
    props: {
    },
    methods: {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
