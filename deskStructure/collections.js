import S from '@sanity/desk-tool/structure-builder'

import { MdLibraryMusic } from 'react-icons/all'

export default S.listItem()
  .title('Collections')
  .schemaType('collection')
  .child(
    S.documentTypeList('collection').title('Collections')
  )
  .icon(MdLibraryMusic)