import { tag, WeElement } from 'omi'
import style from './_index.scss'

@tag('me-intro')
class MeIntro extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <div class="me">
        <div class="profile">
          <img
            class="image"
            src="https://avatars1.githubusercontent.com/u/2471651?s=460&v=4"
          />
          <p class="description">
            Hello, I'm Ken!
          </p>
          <div class="link">
            <a
              href="https://github.com/leehyunggeun/"
              target="_blank"
            >
              <i
                class="fa fa-github"
                title="Github"
              />
            </a>
            <a
              href="https://linkedin.com/in/leehyunggeun/"
              target="_blank"
            >
              <i
                class="fa fa-linkedin"
                title="Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}