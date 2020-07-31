export const dummy = {
  clipboard: true,

  tabs: {
    details: {
      label: 'Details',
      components: {
        prefix: {
          type: 'select',
          label: 'Prefix',
          width: '10%',
          options: [
            { label: 'Dr.', value: 'dr' },
            { label: 'Mr.', value: 'mr' },
            { label: 'Ms.', value: 'ms' },
            { label: 'Mrs.', value: 'mrs' },
            { label: 'Miss.', value: 'miss' }
          ]
        },

        firstName: {
          type: 'text',
          label: 'First Name',
          width: '40%'
        },

        lastName: {
          type: 'text',
          label: 'Last Name',
          width: '50%',
          required: true
        },

        dateOfBirth: {
          type: 'datetime',
          label: 'Date of Birth',
          width: '50%',
          seconds: true
        },

        tags: {
          type: 'multiselect',
          label: 'Tags',
          width: '50%',
          multiple: true,
          searchable: true,
          taggable: true,
          options: ['Developer', 'Designer', 'Writer', 'Composer']
        },

        country: {
          type: 'multiselect',
          label: 'Country',
          multiple: false,
          searchable: true,
          placeholder: 'Select or search country',
          options: {
            data() {
              return this.load({
                url: 'https://cdn.rawgit.com/lukes/ISO-3166-Countries-with-Regional-Codes/d4031492/all/all.json',
                cache: 'global'
              })
            },
            label: 'name',
            value: 'alpha-2',
            groupBy: 'sub-region'
          }
        },

        email: {
          type: 'email'
        },

        age: {
          type: 'radio',
          label: 'Age',
          layout: 'vertical',
          width: 'auto',
          options: [
            { value: 20, label: '20-29' },
            { value: 30, label: '30-39' },
            { value: 40, label: '40-49' },
            { value: 50, label: '50-99' }
          ]
        },

        factor: {
          label: 'Factor',
          type: 'number',
          width: 'auto',
          step: 0.01,
          range: [0, 100],
          required: true
        },

        colors: {
          type: 'checkboxes',
          label: 'Favorite Colors',
          width: 'auto',
          options: ['blue', 'red', 'pink', 'green'],
          layout: 'horizontal'
        },

        verified: {
          type: 'switch',
          label: 'Verified Address',
          width: 'auto',
          size: { width: 55 },
          labels: { checked: 'yes', unchecked: 'no' },
          default: false
        },

        comments: {
          type: 'textarea',
          label: 'Comment',
          lines: 3
        }
      }
    },

    messages: {
      label: 'Messages',
      components: {
        messages: {
          type: 'list',
          width: '100%',
          form: import('./message'),
          inlined: true,
          creatable: true,
          draggable: true,
          deletable: true
        }
      }
    }
  },

  buttons: {
    apply: {
      text: 'Apply',
      resource: {
        method: 'patch'
      },
      if: ({ formComponent }) => !formComponent.isCreating
    }
  }
}
