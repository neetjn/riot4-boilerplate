import * as riot from 'riot'
import DatePlugin from './mixins/date'
import Page from './containers/page.tag'

// loading css using postcss loader
// tailwind plugin and config specified in postcss config
import './assets/styles/app.css'

// installing a riot plugin / mixin
riot.install(component => {
  component.date = new DatePlugin()
})

// mounting a riot component
// in this case we're mounting our container
// child components are exported by the container
riot.component(Page)(document.querySelector('#app'))
