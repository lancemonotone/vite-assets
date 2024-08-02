import './accordion.scss'

window.addEventListener('load', function () {
    const containers = document.querySelectorAll('.accordion')

    containers.forEach(container => {
        new ClassAccordion(container)
    })
})

// transform toggleAriaExpanded into a class
class ClassAccordion {
    constructor (container, focus = false) {
        this.focus = focus
        this.container = container
        this.toggle = container.querySelector('.accordion-toggle')
        this.content = container.querySelector('.accordion-content')
        this.button = container.querySelector('.accordion-label')
        this.init()
    }

    findFirstFocusableElement (parentElement) {
        const focusableElementsSelector = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([type=submit]):not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        const focusableElements = parentElement.querySelectorAll(focusableElementsSelector)
        const visibleFocusableElements = Array.from(focusableElements).
            filter(el => el.offsetWidth > 0 && el.offsetHeight > 0)
        return visibleFocusableElements.length > 0 ? visibleFocusableElements[0] : null
    }

    init () {
        this.toggle.addEventListener('change', () => {
            if (this.toggle.checked) {
                // if the accordion is expanded
                this.container.setAttribute('aria-expanded', 'true')
                // Find the first focusable element in the expanded content and focus it
                if (this.focus) {
                    let firstFocusableElement = this.findFirstFocusableElement(this.content)
                    if (firstFocusableElement) {
                        firstFocusableElement.focus()
                    }
                }
            } else {
                // if the accordion is collapsed
                this.container.setAttribute('aria-expanded', 'false')
                // Return focus back to the button
                this.button.focus()
            }
        })
    }
}
