import { tag, WeElement } from 'omi'
import page from 'omi-page'
import 'elements/hello'

@tag('page-view')
class PageView extends WeElement {
  static get data() {
		return { }
  }
  
  installed() {
    this.route(this.props.pages)
  }

  changePage(ctx) {
    this.data.page = this.props.pages[ctx.pathname]
    this.update()
  }

  route(pages) {
    const changePage = this.changePage.bind(this)
    for (const path in pages) {
      page(path, changePage)
    }
    page()
  }

	render(props, data) {
		return (
			<div>
        {this.data.page}
			</div>
		)
	}
}