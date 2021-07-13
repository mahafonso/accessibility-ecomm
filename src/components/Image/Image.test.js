import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Image from './Image'

expect.extend(toHaveNoViolations)

describe('Image Component', () => {
	it('should not fail in an accessibility test with alt', async () => {
		render(<Image src="test" alt="lorem" />)
		expect(await axe(screen.getByRole('img'))).toHaveNoViolations()
	})
	
	it('should not fail in an accessibility test with title', async () => {
		render(<Image src="test" title="lorem" />)
		expect(await axe(screen.getByRole('img'))).toHaveNoViolations()
	})
	
	it('should not fail in an accessibility test with aria-label', async () => {
		render(<Image src="test" aria-label="lorem" />)
		expect(await axe(screen.getByRole('img'))).toHaveNoViolations()
	})
})