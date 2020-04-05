<template>
    <div class="m-5 row">
        <div class="offset-md-3 col-md-6 border rounded p-4">
            <div class="form-group">
                <label for="username_or_email_field" class="font-weight-bold">Username Or Email</label>
                <input
                    type="text"
                    class="form-control"
                    id="username_or_email_field"
                    placeholder="Enter username or email"
                />
                <small class="form-text text-danger">Wrong username, email or password</small>
            </div>
            <div class="form-group">
                <label for="password_field" class="font-weight-bold">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password_field"
                    placeholder="Enter password"
                />
                <small class="form-text text-danger">Wrong username, email or password</small>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember the password</label>
            </div>
            <div class="form-group mt-2">
                <button type="button" @click="login" class="btn btn-info">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    methods: {
        login() {
            // TODO
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
