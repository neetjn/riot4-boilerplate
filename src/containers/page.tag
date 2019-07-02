<page>
  <h1 class="text-center mt-4 mb-4">
    <i class="entypo entypo-alert" /> Hello World
  </h1>
  <foobar class="block"></foobar>
  <script>
    import Foobar from '../components/foobar.tag'

    export default {
      // importing child components
      components: {
        Foobar
      },
      onMounted() {
        // lifecycle hook example
        console.log('Page mounted!')
      }
    }
  </script>
</page>
