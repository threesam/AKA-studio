import S from '@sanity/desk-tool/structure-builder'

import { BsTagFill } from 'react-icons/all'

export default S.listItem()
  .title('Tags')
  .schemaType('tag')
  .child(
    S.documentTypeList('tag').title('Tags')
  )
  .icon(BsTagFill)