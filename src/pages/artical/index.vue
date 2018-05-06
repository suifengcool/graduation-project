<template>
    <div class='artical'>
		<vue-editor v-model="content"></vue-editor>
    </div>
</template>

<script>
import { Button} from 'element-ui';
import { VueEditor } from 'vue2-editor'
export default {
    name: 'notFound',
    components: {
    	Button,
        VueEditor
    },
    data () {
		return {
            content: '<h1>Some initial content</h1>'
		}
    },

    created () {
    },

    methods: {

	}
}
</script>
<style lang='sass' scoped>

</style>