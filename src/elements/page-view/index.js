import { tag, WeElement } from 'omi'
import page from 'omi-page'
import 'elements/hello'

@tag('page-view')
class PageView extends WeElement {
  installed() {
    this.route(this.props.pages)
  }

  changePage(ctx) {
    this.store.data.page = this.props.pages[ctx.pathname]
    this.store.data.path = ctx.pathname
    this.update()
  }

  route(pages) {
    const changePage = this.changePage.bind(this)
    for (const path in pages) {
      page(path, changePage)
    }
    page()
  }

	render() {
		return (
			<div>
        {this.store.data.page}
			</div>
		)
	}
}