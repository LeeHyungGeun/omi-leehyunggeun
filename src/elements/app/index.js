import { tag, WeElement } from 'omi'
import style from './_index.scss'
import 'elements/hello'
import 'elements/page-view'
import 'elements/me-intro'
import 'elements/navigator'

@tag('my-app')
class MyApp extends WeElement {
	static get data() {
		return {
			pages: {
				'/': <me-intro></me-intro>,
				'/resume': <hello-element></hello-element>
			}
		}
	}
	
	css() {
		return style
	}

	render() {
		return (
			<div class="app">
				<navigator-element></navigator-element>
				<main class="main">
					<page-view pages={this.data.pages}></page-view>
				</main>
			</div>
		)
	}
}
