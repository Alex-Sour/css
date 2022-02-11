import React from 'react'
import clsx from 'clsx'
import {OverlayTemplate} from '../../ui-patterns/Overlay/Overlay.stories'

export default {
  title: 'Components/Dialog',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['DialogTemplate'],
  argTypes: {
    title: {
      name: 'title',
      type: {name: 'string', required: false},
      description: 'The heading element of the dialog',
      defaultValue: '',
      table: {
        category: 'HTML'
      }
    },
    description: {
      name: 'description',
      type: 'string',
      description: 'The sub-heading element of the dialog',
      defaultValue: '',
      table: {
        category: 'HTML'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'focus the dialog',
      defaultValue: false,
      table: {
        category: 'Interactive'
      }
    },
    toggleOverlay: {
      control: {type: 'boolean'},
      description: 'show/hide overlay',
      defaultValue: false,
      table: {
        category: 'Interactive'
      }
    },
    showCloseButton: {
      control: {type: 'boolean'},
      description: 'show/hide close button',
      defaultValue: false,
      table: {
        category: 'Interactive'
      }
    },
    width: {
      options: [0, 1, 2, 3, 4], // iterator
      mapping: [
        'Overlay--width-small',
        'Overlay--width-medium',
        'Overlay--width-large',
        'Overlay--width-xlarge',
        'Overlay--width-xxlarge'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['small', 'medium', 'large', 'xlarge', 'xxlarge']
      },
      description: 'Width options: small: 256px, medium: 320px, large: 480px, xlarge: 640px, xxlarge: 960px',
      table: {
        category: 'CSS'
      }
    },
    height: {
      options: [0, 1, 2, 3, 4, 5], // iterator
      mapping: [
        'Overlay--height-auto',
        'Overlay--height-xsmall',
        'Overlay--height-small',
        'Overlay--height-medium',
        'Overlay--height-large',
        'Overlay--height-xlarge'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']
      },
      description:
        'Height options: auto: adjusts to content, xsmall: 192px, small: 256px, medium: 320px, large: 432px, xlarge: 600px',
      table: {
        category: 'CSS'
      }
    },
    headerVariant: {
      options: [0, 1], // iterator
      mapping: ['', 'Overlay-header--large'], // values
      control: {
        type: 'inline-radio',
        labels: ['medium (default)', 'large']
      },
      description: 'medium (default), large header/description font-size + spacing',
      table: {
        category: 'CSS'
      }
    },
    bodyPaddingVariant: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'Overlay-body--paddingCondensed', 'Overlay-body--paddingNone'], // values
      control: {
        type: 'inline-radio',
        labels: ['normal (default)', 'condensed', 'none']
      },
      description: 'body spacing',
      table: {
        category: 'CSS'
      }
    },
    position: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'Overlay-backdrop--positionCenter', 'Overlay-backdrop--positionBottom'], // values
      control: {
        type: 'inline-radio',
        labels: ['none', 'center', 'bottom']
      },
      description: 'Positions overlay',
      table: {
        category: 'CSS'
      },
      defaultValue: 'center'
    },
    positionWhenNarrow: {
      options: [0, 1, 2], // iterator
      mapping: [
        '',
        'Overlay-backdrop-positionWhenNarrow-fullScreen',
        'Overlay-backdrop-positionWhenNarrow-bottomSheet'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['inherit', 'full-screen', 'bottom-sheet']
      },
      description: 'Positions overlay for narrow width screens. Inherit will keep the height/width props the same',
      table: {
        category: 'CSS'
      },
      defaultValue: 'center'
    },
    headerRegion: {
      control: {type: 'boolean'},
      description:
        'A header region may be used to provide context to the user by displaying a title, description, and offering an easy-to-escape route with a Close button. Headers may also provide ways for the user to interact with the content, such as with search and tabs.',
      defaultValue: true,
      table: {
        category: 'HTML'
      }
    },
    footerRegion: {
      control: {type: 'boolean'},
      description:
        'The footer region may be used to show confirmation actions, navigation links, or other important elements that should appear outside of the content scrolling region.',
      defaultValue: true,
      table: {
        category: 'HTML'
      }
    },
    showFooterDivider: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'Show dividers above footer',
      table: {
        category: 'CSS'
      }
    },
    showHeaderDivider: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'Show dividers below header',
      table: {
        category: 'CSS'
      }
    },
    headerContentSlot: {
      description: 'Slot for additional header content',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    actionContentSlot: {
      description: 'Slot for additional header action',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    motion: {
      options: [0, 1], // iterator
      mapping: [null, 'Overlay--motion-scaleFade'], // values
      control: {
        type: 'inline-radio',
        labels: ['none', 'scaleFade']
      },
      description: 'Animation options for show/hide overlay',
      table: {
        category: 'CSS'
      }
    },
    footerContentAlign: {
      options: [0, 1, 2], // iterator
      mapping: ['Overlay-footer--alignStart', 'Overlay-footer--alignCenter', 'Overlay-footer--alignEnd'], // values
      control: {
        type: 'inline-radio',
        labels: ['start', 'center', 'end']
      },
      description: 'Align footer contents',
      table: {
        category: 'CSS'
      }
    },
    role: {
      description: 'Semantic role',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    ariaLabelledy: {
      description: 'aria-labelledby',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    ariaDescribedby: {
      description: 'aria-describedby',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    dataFocusTrap: {
      description: 'data-focus-trap',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    }
  }
}

const focusMethod = function getFocus() {
  const dialog = document.getElementById('overlay-backdrop')[0]
  dialog.focus()
}

const toggleDialog = () => {
  const dialog = document.getElementById('overlay-backdrop')
  dialog.classList.toggle('Overlay-hidden')
  focusMethod()
}

export const DialogTemplate = OverlayTemplate.bind({})

export const Playground = DialogTemplate.bind({})
Playground.args = {
  title: 'This is the title of the dialog',
  description: 'This is the subtitle of the dialog',
  focusElement: false,
  role: 'dialog',
  width: 1,
  height: 3,
  ariaLabelledby: 'title-id',
  ariaDescribedby: 'description-id',
  dataFocusTrap: 'active',
  footerContentAlign: 2,
  showCloseButton: true,
  position: 1,
  positionWhenNarrow: 1,
  headerVariant: 0,
  bodyPaddingVariant: 0,
  motion: 1,
  descriptionId: 'description-id',
  titleId: 'title-id',
  showFooterDivider: true,
  trigger: (
    <button class="btn" onClick={toggleDialog}>
      <span>Open dialog</span>
    </button>
  )
}
