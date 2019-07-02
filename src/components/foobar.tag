<foobar>
  <button class="btn btn-primary block p-2 m-auto text-xl"
          onclick={ showDate }>
    Get Current Date
  </button>
  <h1 class="text-xl text-center" if={ dateToggled }>Date: { foundDate }</h1>
  <script>
    export default {
      dateToggled: false,
      foundDate: null,
      showDate(e) {
        this.dateToggled = true
        this.foundDate = this.date.getDate()
        // manually updating component
        this.update()
      }
    }
  </script>
</foobar>
