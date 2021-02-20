import S from '@sanity/desk-tool/structure-builder'

import { MdMusicNote } from 'react-icons/all'

export default S.listItem()
  .title('Songs')
  .schemaType('song')
  .child(
    S.documentTypeList('song').title('Songs')
  )
  .icon(MdMusicNote)