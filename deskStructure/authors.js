import S from '@sanity/desk-tool/structure-builder'
import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
import BusinessCard from '../components/previews/pdf/BusinessCard'

import { MdPerson } from 'react-icons/all'


export default S.listItem()
  .title('Authors')
  .schemaType('author')
  .icon(MdPerson)
  .child(
    S.documentTypeList('author')
      .title('Authors')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('author')
          .views([
            S.view.form().icon(EditIcon),
            S.view
              .component(BusinessCard)
              .icon(EyeIcon)
              .title('Business Card')
          ])
      )
  )
