import { mount } from 'riot'
import registerGlobalComponents from './register-global-components'

// without that scss plugin would not build that global style bundle
import './style/index.scss'

// register
registerGlobalComponents()

// mount all the global components found in this page
mount('[data-riot-component]')
