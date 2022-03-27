class Dom {
	/**
	 * Get Element by ID
	 */
	public static gebid<T extends HTMLElement>(id: string): T {
		return document.getElementById(id) as T
	}

	/**
	 * Get Elements by Class Name
	 */
	public static gebcn<T extends HTMLElement>(className: string): T[] {
		return Array.prototype.slice.call( document.getElementsByClassName(className) ) as T[]
	}

	/**
	 * Get Elements by Tag Name
	 */
	public static gebtn<T extends HTMLElement>(tagName: string): T[] {
		return Array.prototype.slice.call( document.getElementsByTagName(tagName) ) as T[]
	}

	/**
	 * Query Selector
	 */
	public static qs<T extends HTMLElement>(selector: string, parent: HTMLElement | Document = document): T {
		return parent.querySelector(selector) as T
	}

	/**
	 * Query Selector All
	 */
	public static qsAll<T extends HTMLElement>(selector: string, parent: HTMLElement | Document = document): T[] {
		return Array.prototype.slice.call( parent.querySelectorAll(selector) ) as T[]
	}

	/**
	 * Gets a child of an element's children list
	 */
	public static child<T extends HTMLElement>(element: HTMLElement, index: number): T {
		return element.children[index] as T
	}

	/**
	 * Shows an HTML element
	 */
	public static show(element: HTMLElement): void {
		element.style.display = 'block'
	}

	/**
	 * Hides an HTML element
	 */
	public static hide(element: HTMLElement): void {
		element.style.display = 'none'
	}

	/**
	 * Shows or hides an HTML element
	 */
	public static visible(element: HTMLElement, isVisible: boolean): void {
		element.style.display = isVisible ? 'block' : 'none'
	}

	/**
	 * Gets if an element visible
	 */
	public static isVisible(element: HTMLElement): boolean {
		return element.style.display !== 'none'
	}

	/**
	 * Gets or sets the textContent of an HTML element
	 */
	public static text(element: HTMLElement, text?: any): string {
		return typeof text === 'undefined'
			? element.textContent || ''
			: element.textContent = String(text)
	}

	/**
	 * Gets or sets a value of an HTML Input or HTMLSelect element
	 */
	public static value(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value?: any): string {
		return typeof value === 'undefined'
			? element.value
			: element.value = String(value)
	}

	/**
	 * Gets or sets the innerHTML an HTML element
	 */
	public static innerHtml(element: HTMLElement, html?: string): string {
		return typeof html === 'string'
			? element.innerHTML = html
			: element.innerHTML
	}

	/**
	 * Appends HTML to an element. Similar to 'beforeend'
	 */
	public static appendHtml(element: HTMLElement, html: string): void {
		element.insertAdjacentHTML('beforeend', html)
	}

	/**
	 * Gets or sets the `checked` attribute of an HTML Input element
	 */
	public static checked(element: HTMLInputElement, isChecked?: boolean): boolean {
		return typeof isChecked === 'boolean'
			? element.checked = isChecked
			: element.checked
	}

	/**
	 * Gets or sets the `disabled` attribute of an HTML Input element
	 */
	public static disabled(element: HTMLInputElement | HTMLButtonElement | HTMLSelectElement, isDisabled?: boolean): boolean {
		return typeof isDisabled === 'boolean'
			? element.disabled = isDisabled
			: element.disabled
	}

	/**
	 * Adds one or more classes to an HTML Element's class list
	 */
	public static addClass(element: HTMLElement, ...className: string[]): void {
		element.classList.add(...className)
	}

	/**
	 * Removes one or more classes from an HTML Element's class list
	 */
	public static removeClass(element: HTMLElement, ...className: string[]): void {
		element.classList.remove(...className)
	}

	/**
	 * Adds or removes a class from an HTML Element's class list as per a flag or
	 * gets if the element contains a class.
	 */
	public static hasClass(element: HTMLElement, className: string, flag?: boolean): boolean {
		if (typeof flag === 'boolean') {
			if (flag) {
				element.classList.add(className)
				return true
			}

			element.classList.remove(className)
			return false
		}

		return element.classList.contains(className)
	}

	/**
	 * Swaps a class of an HTML Element
	 */
	public static swapClass(element: HTMLElement, classToRemove: string, classToAdd: string): void {
		element.classList.remove(classToRemove)
		element.classList.add(classToAdd)
	}
}
