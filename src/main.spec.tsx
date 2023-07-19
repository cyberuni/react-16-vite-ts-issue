import renderer from 'react-test-renderer'
import { test } from 'vitest'
import { Editor } from 'react-freedom'

test('Link changes the class when hovered', () => {
	renderer.create(
		<Editor />
	)
})
