/* istanbul ignore file */
import Descriptions from './src/Descriptions.js'
import DescriptionsItem from './src/DescriptionsItem.js'

Descriptions.install = function (app, naive) {
  app.component(naive.componentPrefix + Descriptions.name, Descriptions)
  app.component(naive.componentPrefix + DescriptionsItem.name, DescriptionsItem)
}

export default Descriptions
