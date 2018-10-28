import { tag, WeElement } from 'omi'
import page from 'omi-page'
import style from './_index.scss'

@tag('navigator-element')
class Navigator extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <nav class="navi">
        <a
          class={this.store.data.path === '/' ? 'active' : null}
          onClick={() => { page('/'); this.update(); }}
        >
          Me
        </a>
        <a
        class={this.store.data.path === '/resume' ? 'active' : null}
          onClick={() => { page('/resume'); this.update(); }}
        >
          Resume
        </a>
      </nav>
    )
  }
}