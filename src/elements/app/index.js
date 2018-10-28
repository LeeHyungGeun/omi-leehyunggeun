import { tag, WeElement } from 'omi'
import style from './_index.css'
import 'elements/hello'
import 'elements/page-view'


@tag('my-app')
class MyApp extends WeElement {
	static get data() {
		return {
			pages: {
				'/': <hello-element></hello-element>,
				'/resume': 'KEN'
			}
		}
	}
	
	css() {
		return style
	}

	render(props, data) {
		return (
			<div class="app">
				<main class="main">
					<page-view pages={this.data.pages}></page-view>
				</main>
			</div>
		)
	}
}
