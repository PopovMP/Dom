/**
 * Dom
 *
 * A simple Dom manipulation helper
 * https://github.com/PopovMP/dom
 *
 * Copyright @ 2022 Miroslav Popov
 *
 * v1.1 2022.07.08
 */

class Dom
{
	/**
	 * Get Element by ID
	 */
	public static gebid<T extends HTMLElement>(id: string): T
	{
		return document.getElementById(id) as T
	}

	/**
	 * Get Elements by Class Name
	 */
	public static gebcn<T extends HTMLElement>(className: string): T[]
	{
		const elementsByClass = document.getElementsByClassName(className)
		const elements: T[] = Array(elementsByClass.length)

		let index = 0
		while (index < elementsByClass.length) {
			elements[index] = elementsByClass[index] as T
			index += 1
		}

		return elements
	}

	/**
	 * Get Elements by Tag Name
	 */
	public static gebtn<T extends HTMLElement>(tagName: string): T[]
	{
		const elementsByTag = document.getElementsByTagName(tagName)
		const elements: T[] = Array(elementsByTag.length)

		let index = 0
		while (index < elementsByTag.length) {
			elements[index] = elementsByTag[index] as T
			index += 1
		}

		return elements
	}

	/**
	 * Query Selector
	 */
	public static qs<T extends HTMLElement>(selector: string, parent: HTMLElement | Document = document): T
	{
		return parent.querySelector(selector) as T
	}

	/**
	 * Query Selector All
	 */
	public static qsAll<T extends HTMLElement>(selector: string, parent: HTMLElement | Document = document): T[]
	{
		const nodes = parent.querySelectorAll(selector)
		const elements: T[] = Array(nodes.length)

		let index = 0
		while (index < nodes.length) {
			elements[index] = nodes[index] as T
			index += 1
		}

		return elements
	}

	/**
	 * Gets a child of an element's children list
	 */
	public static child<T extends HTMLElement>(element: HTMLElement, index: number): T
	{
		return element.children[index] as T
	}

	/**
	 * Shows an HTML element
	 */
	public static show(element: HTMLElement): void
	{
		element.style.display = 'block'
	}

	/**
	 * Hides an HTML element
	 */
	public static hide(element: HTMLElement): void
	{
		element.style.display = 'none'
	}

	/**
	 * Shows or hides an HTML element or gets the visible state
	 */
	public static visible(element: HTMLElement, isVisible?: boolean): boolean
	{
		if (typeof isVisible === 'boolean')
			element.style.display = isVisible ? 'block' : 'none'

		return element.style.display !== 'none'
	}

	/**
	 * Gets or sets the textContent of an HTML element
	 */
	public static text(element: HTMLElement, text?: any): string
	{
		return typeof text === 'undefined' ? element.textContent || '' : element.textContent = String(text)
	}

	/**
	 * Gets or sets a value of an HTML Input or HTMLSelect element
	 */
	public static value(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value?: any): string
	{
		return typeof value === 'undefined' ? element.value : element.value = String(value)
	}

	/**
	 * Gets or sets the innerHTML an HTML element
	 */
	public static innerHtml(element: HTMLElement, html?: string): string
	{
		return typeof html === 'string' ? element.innerHTML = html : element.innerHTML
	}

	/**
	 * Appends HTML to an element. Similar to 'beforeend'
	 */
	public static appendHtml(element: HTMLElement, html: string): void
	{
		element.insertAdjacentHTML('beforeend', html)
	}

	/**
	 * Gets or sets the `checked` attribute of an HTML Input element
	 */
	public static checked(element: HTMLInputElement, isChecked?: boolean): boolean
	{
		return typeof isChecked === 'boolean' ? element.checked = isChecked : element.checked
	}

	/**
	 * Gets or sets the `disabled` attribute of an HTML Input element
	 */
	public static disabled(element: HTMLInputElement | HTMLButtonElement | HTMLSelectElement, isDisabled?: boolean): boolean
	{
		return typeof isDisabled === 'boolean' ? element.disabled = isDisabled : element.disabled
	}

	/**
	 * Adds or removes one or more classes to an element according to a condition
	 */
	public static ensureClass(element: HTMLElement, cond: boolean, ...className: string[]): void
	{
		if (cond)
			element.classList.add(...className)
		else
			element.classList.remove(...className)
	}

	/**
	 * Adds one or more classes to an HTML Element's class list
	 */
	public static addClass(element: HTMLElement, ...className: string[]): void
	{
		element.classList.add(...className)
	}

	/**
	 * Removes one or more classes from an HTML Element's class list
	 */
	public static removeClass(element: HTMLElement, ...className: string[]): void
	{
		element.classList.remove(...className)
	}

	/**
	 * Swaps a class of an HTML Element
	 */
	public static swapClass(element: HTMLElement, classToRemove: string, classToAdd: string): void
	{
		element.classList.remove(classToRemove)
		element.classList.add(classToAdd)
	}

	/**
	 * Toggles a class of an HTML Element
	 */
	public static toggleClass(element: HTMLElement, className: string): void
	{
		if (element.classList.contains(className))
			element.classList.remove(className)
		else
			element.classList.add(className)
	}

	/**
	 * Creates an element with the given tag
	 *
	 * @param {string} tagName
	 */
	public static createElement<T extends HTMLElement>(tagName: string): T
	{
		return document.createElement(tagName) as T
	}

	/**
	 * Sets text to the browser's tab
	 *
	 * @param {string} title
	 */
	public static title(title: string): void
	{
		document.title = title
	}
}
