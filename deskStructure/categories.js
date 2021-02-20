import S from '@sanity/desk-tool/structure-builder'

import { MdBook } from 'react-icons/all'

export default S.listItem()
  .title('Categories')
  .schemaType('category')
  .child(
    S.documentTypeList('category').title('Categories')
  )
  .icon(MdBook)
