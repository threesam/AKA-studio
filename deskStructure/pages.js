import S from '@sanity/desk-tool/structure-builder'

import { MdPages } from 'react-icons/all'

export default S.listItem()
  .title('Pages')
  .schemaType('page')
  .child(
    S.documentTypeList('page').title('Pages')
  )
  .icon(MdPages)