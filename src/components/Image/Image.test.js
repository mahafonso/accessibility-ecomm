import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Image from './Image'

expect.extend(toHaveNoViolations)

describe('Image Component', () => {
	it('should not have any accessibility violations', async () => {
		render(<Image src="test" alt="lorem" />)
		expect(await axe(screen.getByRole('img'))).toHaveNoViolations()
	})
})