import S from '@sanity/desk-tool/structure-builder'
import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'

import { BiNews } from 'react-icons/all'


export default S.listItem()
  .title('Press')
  .schemaType('press')
  .icon(BiNews)
  .child(
    S.documentTypeList('press')
      .title('Press')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('press')
          .views([
            S.view.form().icon(EditIcon)
          ])
      )
  )