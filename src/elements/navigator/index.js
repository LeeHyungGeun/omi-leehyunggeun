import { tag, WeElement } from 'omi'
import page from 'omi-page'
import style from './_index.scss'

@tag('navigator-element')
class Navigator extends WeElement {
  css() {
    return style
  }

  changePage = (path) => {
    page(path)
    this.update()
  }

  render() {
    return (
      <nav class="navi">
        <a
          class={this.store.data.path === '/' ? 'active' : null}
          onClick={() => this.changePage('/')}
        >
          Me
        </a>
        <a
        class={this.store.data.path === '/resume' ? 'active' : null}
          onClick={() => this.changePage('/resume')}
        >
          Resume
        </a>
      </nav>
    )
  }
}