import CMS from 'netlify-cms'

import FooterPreview from './preview-templates/FooterPreview'
import VideosResourcePreview from './preview-templates/VideosResourcePreview'

CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('resource', VideosResourcePreview)
