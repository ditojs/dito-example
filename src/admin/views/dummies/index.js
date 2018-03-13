import { labelize } from '@ditojs/utils'

export const dummies = {
  type: 'list',
  label: 'Dummies',
  form: import('./dummy'),
  itemLabel: 'fullName',

  columns: {
    prefix: {
      sortable: true,
      render: prefix => `${labelize(prefix)}.`
    },
    firstName: { sortable: true },
    lastName: { sortable: true },
    country: { sortable: true },
    tags: {
      render: tags => (tags || []).join(', ')
    }
  },
  scopes: ['all', 'verified'],
  creatable: true,
  deletable: true,
  editable: true,
  paginate: 20
}
