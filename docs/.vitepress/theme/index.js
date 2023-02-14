import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import gUI from 'g-element-plus-components/g-e-choose-area/index'
import 'g-element-plus-components/style.css'
import '../styles/custom.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.use(ElementPlus)
        ctx.app.use(gUI)
    }
}

