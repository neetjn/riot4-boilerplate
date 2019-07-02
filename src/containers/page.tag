<page>
  <img class="block m-auto mt-5 mb-4" src={ Logo } width="150" height="auto">
  <h1 class="text-center mt-4 mb-4">
    <i class="entypo entypo-alert" /> Hello World
  </h1>
  <foobar class="block"></foobar>
  <script>
    import Logo from '../assets/images/riot.svg'
    import Foobar from '../components/foobar.tag'

    export default {
      // exporting images for riot components using url-loader
      Logo,
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
